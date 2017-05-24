<?php
class Categories extends ShopApi {

   public function __construct()
   {
      $this->fields=array('id','level','parent','image',
            'name1','name2','name3','name4','name5');
   }
   function _get($params) {
       return array('sql_read'=>'select * from shop_categories');
   }
   function _post($params,$data) {
       return array('sql_create'=>'insert into shop_categories');
   }
   function _put($params,$data) {
       return array('sql_update'=>'update category set ');
   }
   function _delete($params) {
       if (sizeof($params)<1 || !ctype_digit($params[0])) throw new Exception('403');
       return array('sql_delete'=>'delete from category where id='.$params[0]);
   }
}
?>
