<?php
$db_host = 'localhost';
$db_name = 'shop';
$db_user = 'ushop';
$db_password = 'pshop';

$con = mysqli_connect($db_host, $db_user,$db_password,$db_name);
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit;
  }
define('config_isLogged',true);
mysqli_set_charset($con, 'utf8');
function shop_userHasRole($role) {
    if ($role=='admin' || $role=='sale' || $role=='manager' || $role=='buyer') {
        return true;
    }
    return false;
}
?>
