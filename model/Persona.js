const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let PersonaSchema = new Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
    },
    Apellido: {
        type: String,
        required: [true, 'El apellido es requerido']
    },
    Edad: {
        type: Number,
        required: [true, 'La edad es requerida']
    }
});

PersonaSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único',
});

module.exports = model('Persona', PersonaSchema);
