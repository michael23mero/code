const ModelData = require('../models/data.model')

const readData = async(req, res) => {
    const data = await ModelData.find({}).sort({createdAt: -1})
    return res.status(200).json(data)
}

module.exports = { readData }