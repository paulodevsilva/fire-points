const mongoose = require('mongoose');

const Location = require('../models/Location');
const app = require('../app');



module.exports = {
    async  sendAllLocation() {
        const io = app.io;
    
        const data = await Location.find();
    
    
        console.log('oi')
    
        io.on('connection', socket => {
            console.log(`connected client : ${socket.id}`);
            socket.emit('allLocation', data);
        });
    }
}











