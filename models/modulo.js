import mongoose from "mongoose";


const Schema = mongoose.Schema;

const ModuloSchema = new Schema({

    nombre_archivo: {
        type: String,
        required: [true, 'El nickname es obligatorio']
    },
    fecha_carga: {
        type: Date,
        default: Date.now 
    },
    archivo: {
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


ModuloSchema.methods.toJSON = function () {
    const { __v, _id, ...Modulo } = this.toObject();
    Modulo.iud = _id;
    return Modulo;
  };
  
export default mongoose.model('Modulo', ModuloSchema);
