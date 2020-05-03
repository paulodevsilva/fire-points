const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
    name: String,
    lat: String,
    lon: String
});


module.exports = mongoose.model('Location', LocationSchema);


