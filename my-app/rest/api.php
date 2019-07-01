<?php

class ConnectionDB
{
    private static $dateDbList = [
        'host' => "localhost",
        'user' => "root",
        'password' => "",
        'database' => 'assestment',
    ];
    public static $link = null;

    public static function openConnect()
    {
        if (!self::$link) {
            // убрать порт  на продакшене
            if (!self::$link = mysqli_connect(self::$dateDbList['host'], self::$dateDbList['user'], self::$dateDbList['password'], self::$dateDbList['database'])) {
                die("Error connect mysql");
            }
        }
        return self::$link;
    }

    public static function closeConnect()
    {
        if (self::$link) {
            mysqli_close(self::$link);
        }
    }
}

class Groups extends ConnectionDB
{
    public function getGroups()
    {
        $query = "SELECT * FROM groups";
        $con = ConnectionDB::$link;
        $groupList = $con->query($query);
        if ($result = $groupList->fetch_all(MYSQLI_ASSOC)) {
            echo json_encode($result);
        } else {
            echo "Ошибка запроса" . mysqli_error();
        }
    }
}


function apiEngine($class, $method) {
    if ($open = ConnectionDB::openConnect()) {
        if ($class) {
            $object = new $class();
            $object->$method();
        }
    }
}

if (isset($_GET['method']) && $method = $_GET['method']) {
    $method = $_GET['method'] ?? null;
    $class = $_GET['class'] ?? null;
    apiEngine($class, $method);
}
?>