import mongoose from "mongoose";


const Schema = mongoose.Schema;

const PlaneacionSchema = new Schema({

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


PlaneacionSchema.methods.toJSON = function () {
    const { __v, _id, ...planeacion } = this.toObject();
    planeacion.iud = _id;
    return planeacion;
  };
  
export default mongoose.model('planeacion', PlaneacionSchema);
