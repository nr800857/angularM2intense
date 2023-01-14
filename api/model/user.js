let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = Schema({
    id: Number,
    nom: String,
    prenom: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('User', UserSchema);