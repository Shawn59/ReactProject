import * as mysql from 'mysql';
import config from '../config';
import Groups from './groups';

const conn = mysql.createConnection(config.mysql);
conn.connect(err => {
    if (err) {
        console.log(err);
    }
});

export default {Groups}