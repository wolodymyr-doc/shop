<?php
require('conf.php');
class ShopApi {

       function _get($params) {
           return '';
       }
       function _post($params,$data) {
           return '';
       }
       function _put($params,$data) {
           return '';
       }
       function _delete($params) {
           return '';
       }
       function _patch($params,$data) {
           return '';
       }
       function _head($params) {
           return '';
       }
       function _option($params,$data) {
           return '';
       }
       function process($con,$method,$params,$data) {
           $res = '';
           $this->con = $con;
           $this->method = $method;
           $this->params = $params;
           $this->pool = $data;
           switch($method) {
               case 'GET':
                  $res = $this->_get($params);
               break;
               case 'POST':
                  $res = $this->_post($params,$data);
               break;
               case 'PUT':
                  $res = $this->_put($params,$data);
               break;
               case 'DELETE':
                  $res = $this->_delete($params);
               break;
               case 'PATCH':
                  $res = $this->_patch($params,$data);
               break;
               case 'HEAD':
                  $res = $this->_head($params);
               break;
               case 'OPTION':
                  $res = $this->_option($params,$data);
               break;
           }
           if ($res=='' || !is_array($res)) {
               throw new Exception("403");
           } else {
               $this->postProcess($res);
           }
           return $res['data'];
       }
       function executeSql($sql,$fetch) {
            $res = array();
            $q = mysqli_query($this->con, $sql);
            if (!$q) {
                    $res=mysqli_error($this->con);
                    throw new Exception($res);
            }
            else {
                if ($fetch) {
                    if ($fetch==='id')
                            $res['id'] = mysqli_insert_id($this->con);
                       else {
                           while($r=mysqli_fetch_assoc($q)) {
                                $res[]= $r;
                           }
                       }
                }

            }
            return $res;
       }
       function postProcess(&$res) {
            if (empty($this->idField)) $this->idField='id';  
            if ($res['sql_read']) {
                $data = $res['sql_read'];
                if (!is_array($data)) {
                    $res['data'] = $this->executeSql($data,true);
                } else {
                        if (!$res['data']) $res['data']=array();
                        foreach($data as $sql) {
                            $res['data'][] = $this->executeSql($sql,true);
                        }
                }
            }
            if ($res['sql_create']) {
                 $data = $res['sql_create'];
                 if (isAssociativeArray($this->pool)) {
                     $res['data'] = $this->processSingleCreate($data,$this->pool);
                 } else {
                     $n = count($data);
                     $res['data'] = array();
                     for($i=0;$i<$n;$i++) {
                       $res['data'][$i] = $this->processSingleCreate($data,$this->pool[$i]);
                     }
                 }         
            }
       }
       function processSingleCreate($sql,$data) {
            if (!is_array($this->fields)) throw new Exception("505");
            $val = '';$n = count($this->fields);
            $sql.='('; $cnt = 0;
            for($i=0;$i<$n;$i++) {
               $key = $this->fields[$i];
               if (isset($data[$key])) {
		     if (($cnt++)!=0) {
                         $sql.=',';
                         $val.=',';
                     }
                     $sql.=$key;
                     $val.='"'.addslashes($data[$key].'').'"';
               }
            }
            if ($cnt==0) throw new Exception("506");
            $sql.=') VALUES('+$val+')';
            $res = $this->executeSql($sql,'id');
            $data[$this->idField]=$res['id'];
            return $data;
       }
       function isAssociativeArray(array $arr) {
            if (array() === $arr) return false;
            return array_keys($arr) !== range(0, count($arr) - 1);
       }
}
header('Content-Type: application/json; charset=utf-8');
try {
    $path = $_SERVER['REQUEST_URI'];
    if (!$path) $path = $_SERVER['PATH_INFO'];
    $request = explode("/", strtolower(substr($path, 1)));
    if (sizeof($request)<3) throw new Exception('too short api url');
    array_shift($request);
    $role = array_shift($request);
    $name = array_shift($request);
    if (!ctype_alpha($role) || !ctype_alpha($name)) throw new Exception('wrong url');
    if (!shop_userHasRole($role)) throw new Exception("401"); //unauthorized
    $file = './api/'.$role.'/'.$name.'.php';
    require_once($file);
    $class = ucfirst($name);
    $obj = new $class();
    $data = trim(file_get_contents('php://input'));
    $c = strlen($data)>0 ? $data[0]:'';
    if ($c=='[' || $c=='{') $data = json_decode($data);
    $method = $_SERVER['REQUEST_METHOD'];
    $res = $obj->process($con,$method,$request,$data);
    if (is_array($res)) $res = json_encode($res);
    echo $res;

} 
catch (Exception $e) {
    $err = $e->getMessage();
    $code = substr($message,0,3);
    $message = '';
    if ($code>=400 && $code<=500) {
        $message = trim(substr($err,3));
    } else {
        $code = 503;
    }
    if (version_compare(PHP_VERSION, '5.4.0') >= 0) {
         http_response_code($code);
    } else {
      header('HTTP/1.1 '.$code.' Unauthorized', true, $code);
    }
    $res = array("message"=>$message);
    if (defined('config_isLogged')) $res['log'] = $err;
    echo json_encode($res);
}
?>
