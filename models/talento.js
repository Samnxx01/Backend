import mongoose from "mongoose";


const Schema = mongoose.Schema;

const TalentoSchema = new Schema({

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


TalentoSchema.methods.toJSON = function () {
    const { __v, _id, ...talento } = this.toObject();
    talento.iud = _id;
    return talento;
  };
  
export default mongoose.model('talento', TalentoSchema);