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
            }
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
