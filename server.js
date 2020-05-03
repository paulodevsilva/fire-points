const app = require('./src/app.js');
const server = require('http').createServer(app);

const port = process.env.PORT || 8080

app.io.attach(server);


server.listen(port, () => console.log(`🚀 - running in port ${port}`));