import mongoose from "mongoose";


const Schema = mongoose.Schema;

const MercadeoSchema = new Schema({

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


MercadeoSchema.methods.toJSON = function () {
    const { __v, _id, ...mercadeo } = this.toObject();
    mercadeo.iud = _id;
    return mercadeo;
  };
  
export default mongoose.model('mercadeo', MercadeoSchema);