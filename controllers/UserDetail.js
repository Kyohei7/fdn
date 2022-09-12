const Axios = require('axios') 
require('dotenv').config() 
const { getDataUserDetailTableModel, getDataUserDetailTablePivotModel } = require('../models/UserDetail')

module.exports = {

    getDataTweet: async (req, res) => {

        const config = {
            headers: { Authorization: `Bearer ` + process.env.TOKEN_TWITTER }
        };

        try {
            
            const result = await Axios.get( 
                'https://api.twitter.com/2/lists/24275906/tweets',
                config
            )

            res.send({
                statusMessage: "Success",
                statusCode: 200,
                data: {
                    total_data: result.data.data.length,
                    result: result.data.data
                }
            })
        } catch (error) {
            res.send({
                statusMessage: "Failed",
                statusCode: 400,
                data: false
            })
        }
    },

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