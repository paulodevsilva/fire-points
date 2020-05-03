const axios = require('axios');

module.exports = {
    
    async getMap(req, res) {
        const { address } = req.body;

        try {
            const coords = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GEOCODING_API}`)

            const lat = coords.data.results[0].geometry.location.lat;
            const lon = coords.data.results[0].geometry.location.lng;
            
            const url = `https://api.breezometer.com/fires/v1/current-conditions?lat=${lat}&lon=${lon}&key=${process.env.BREEZO_API}&metadata=true`;
            const getInfo = await axios.get(url);
            let data = getInfo.data.data.fires;

            data ? data = true : data = false
            res.status(200).json({status: 'ok', data: data, address});
        }
        catch(err) {
            console.log(`err_msg: ${err.message}`)
            res.status(res.statusCode).json({status: 'error', err_msg: err.message});
        }
    },

}