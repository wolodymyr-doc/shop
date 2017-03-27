<?php
echo 'Hello<br>';
echo $_SERVER['PATH_INFO'];
echo $_SERVER['REQUEST_METHOD'];
if (version_compare(PHP_VERSION, '6.0.0') >= 0) {
    echo 'Ich bin mindestens PHP 6.0.0, und zwar: ' . PHP_VERSION . "\n";
}

if (version_compare(PHP_VERSION, '5.3.0') >= 0) {
    echo 'Ich bin mindestens PHP 5.3.0, namlich: ' . PHP_VERSION . "\n";
}
print_r($_SERVER);


?>