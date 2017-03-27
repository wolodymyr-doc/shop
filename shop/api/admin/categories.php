<?php
class Category extends ShopApi {

   function _get($params) {
       return array('sql_read'=>'select * from shop_categories');
   }
   function _post($params,$data) {
       return array('sql_create'=>'insert into category');
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
