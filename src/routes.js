const routes = require('express').Router();

// const sessionController = require('./controllers/sessionController');
const locationController = require('./controllers/locationController');


    // routes.post('/new_user', sessionController.user_new);
    // routes.get('/users', sessionController.user_new);
    // routes.put('/update_user/:id', sessionController.user_update);
    // routes.delete('/delete_user', sessionController.user_delete);
    
    routes.get('/get_map', locationController.getMap);
    // routes.get('/gets_map', locationController.gets_map);
    


module.exports = routes;

