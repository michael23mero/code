const { Schema, model } = require('mongoose')

const schemaFileExcel = new Schema(
    {
        Cedula: {
            type: String
        },
        Estudiante: {
            type: String
        },
        Tema:{
            type: String
        }
    },
    {
        //timestamps: true
    }
)

schemaFileExcel.methods.toJSON = function () {
    const {__v, ...data}=this.toObject();
    return data;
}

module.exports = model('collectionFileExcel', schemaFileExcel)