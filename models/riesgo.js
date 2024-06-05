import mongoose from "mongoose";


const Schema = mongoose.Schema;

const RiesgoSchema = new Schema({

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


RiesgoSchema.methods.toJSON = function () {
    const { __v, _id, ...riesgo } = this.toObject();
    riesgo.iud = _id;
    return riesgo;
  };
  
export default mongoose.model('riesgo', RiesgoSchema);