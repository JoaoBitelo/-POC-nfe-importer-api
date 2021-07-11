const mongoose = require ('mongoose');
const Schema = mongoose.Schema

const schema = new Schema({
    emissorNome: {
        type: String,
        trim: true,
    },
    emissorCNPJ: {
        type: String,
        trim: true,
    },
    destinatarioNome: {
        type: String,
        trim: true,
    },
    destinatarioCNPJ: {
        type: String,
        trim: true,
    },

});

module.exports = mongoose.model('NFE', schema);