const axios = require('axios');
const mongoose = require('mongoose');

const coords = require('./coords');
const Location = require('../models/Location');


module.exports = {

    async getCoords() {
        const data = [];
        for (var key in coords){
          
            const name = coords[key].name;
            const lat = coords[key].lat;
            const lon = coords[key].lon;
            const body = {
                lat,
                lon
            }
            
            const getData = await Location.find();

            if(getData) {
                await Location.findByIdAndUpdate(name, body, {new: true});
            } else {
                await Location.create({
                    name,
                    lat,
                    lon
                });
            }
            const datas = await axios.get(`https://api.breezometer.com/fires/v1/current-conditions?lat=${lat}&lon=${lon}&key=${process.env.BREEZO_API}&metadata=true`);

            data.push(JSON.stringify(datas.data));

            console.log(`${name}: ${data}`);
        }

    } 
}