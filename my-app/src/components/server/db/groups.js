import {conn} from './index';
export const all = async () => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * from groups', (err, results) => {
            if (err) {
                return reject(err);
            }
            return results;
        });
    })
};

export default {
    all
}