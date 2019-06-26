<?php

    class ConnectionDB {
        private static $dateDbList = [
            'host' => "localhost",
            'user' => "root",
            'password' => "",
            'database' => 'assestment',
            ];
        public static $link = null;

        public static function openConnect () {
            if (!self::$link) {
                if (!self::$link = mysqli_connect(self::$dateDbList)) {
                    die("Error connect mysql");
                }
            }
            return self::$link;
        }

        public static function closeConnect () {
            if (self::$link) {
                mysqli_close(self::$link);
            }
        }
    }

    class Groups extends ConnectionDB {

        public function getGroups () {
            $query = "SELECT * FROM groups";
            if ( ! $ff = mysqli_query($query) ) {
                echo "Ошибка при удалении таблицы: ".mysqli_error();
            } else {
                echo "Таблица удалена.";
            }
        }
    }


         function apiEngine () {
                if ($open = ConnectionDB::openConnect()) {
                    echo 'Есть подключения';
                    ConnectionDB::closeConnect();
                } else {
                    echo 'Нет подключения';
                }
        }


?>