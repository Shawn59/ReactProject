
const Connect = () => {
    var mysql = require('mysql');

    console.log('Get connection ...');

    var conn = mysql.createConnection({
        database: 'assestment',
        host: "192.168.1.125",
        user: "root",
        password: "",
        connectionLimit: 50,
        port: 3306
    });

    conn.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
    return conn;
};

export default Connect();