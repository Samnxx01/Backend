import mongoose from "mongoose";


const Schema = mongoose.Schema;

const AdministrativaSchema = new Schema({

    nombre_archivo: {
        type: String,
        required: [true, 'El nickname es obligatorio']
    },
    fecha_carga: {
        type: Date,
        default: Date.now 
    },
    xlsx: {
        type: String,
    },
    pdf: {
        type: String,
    },
    docx: {
        type: String,
    },

    estado: {
        type: Boolean,
        default: true
    },
    regisUsu: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'RegisUsu'
    },
    descripcion: {
        type: String,
        required: [true, 'El nickname es obligatorio']
    },

});


AdministrativaSchema.methods.toJSON = function () {
    const { __v, _id, ...administrativa } = this.toObject();
    administrativa.iud = _id;
    return administrativa;
  };
  
export default mongoose.model('administrativa', AdministrativaSchema);
