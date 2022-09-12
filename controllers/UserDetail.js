const { getDataUserDetailTableModel, getDataUserDetailTablePivotModel } = require('../models/UserDetail')

module.exports = {

    getDataUserDetailTable: async (req, res) => {
        try {
            const data = await getDataUserDetailTableModel()
            if (data) {
                res.render('table', { result: data })
            } else {
                res.send({
                    statusMessage: "Failed",
                    statusCode: 400,
                    data: false
                })
            }
        } catch (error) {
            console.log(error);
            res.send({
                statusMessage: "Failed",
                statusCode: 400,
                data: false
            })
        }
    },

    getDataUserDetailPivotTable: async (req, res) => {
        
        try {

            // Get Data Item for Coloumn
            let itemData = await getDataUserDetailTableModel()
            let itemDataArray = []
            for (let index = 0; index < itemData.length; index++) {
                itemDataArray.push(itemData[index].item)
                itemDataArray = [...new Set(itemDataArray)];
            }

            const data = await getDataUserDetailTablePivotModel(itemDataArray)

            if (data) {
                res.render('table-pivot', { result: data, itemDataArray })
            } else {
                res.send({
                    statusMessage: "Failed",
                    statusCode: 400,
                    data: false
                })
            }

        } catch (error) {
            console.log(error);
            res.send({
                statusMessage: "Failed",
                statusCode: 400,
                data: false
            })
        }
    }
}