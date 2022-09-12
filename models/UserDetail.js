const db = require('../helpers/db')

module.exports = {
    getDataUserDetailTableModel: () => {
        return new Promise ((resolve, reject) => {
            db.query(`SELECT id, CONCAT(first_name, ' ', last_name) as fullname, 
                      email, item, quantity, total_price FROM user_detail`, (error, result, _field) => {
                    if (!error) {
                        resolve(result.rows)
                      } else {
                        reject(new Error(error))
                }
            })
        })
    },
    getDataUserDetailTablePivotModel: (data) => {
        return new Promise ((resolve, reject) => {

            let queryCustom = ''
            data.forEach(element => {
                queryCustom += `SUM(CASE item WHEN '${element}' THEN quantity ELSE 0 END) ${element.toLowerCase()},\n`
            });

            db.query(`SELECT 
                        ${queryCustom}
                        CONCAT(first_name, ' ', last_name) as fullname,
                        email
                       FROM public.user_detail
                       GROUP BY fullname, email
                       ORDER BY fullname, email`, (error, result, _field) => {
                    if (!error) {
                        resolve(result.rows)
                      } else {
                        reject(new Error(error))
                }
            })
        })
    }
}