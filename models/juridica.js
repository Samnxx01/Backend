import mongoose from "mongoose";


const Schema = mongoose.Schema;

const JuridicaSchema = new Schema({

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


JuridicaSchema.methods.toJSON = function () {
    const { __v, _id, ...juridica } = this.toObject();
    juridica.iud = _id;
    return juridica;
};

export default mongoose.model('juridica', JuridicaSchema);