'use strict';

const Hapi=require('hapi');
const routers = require('./routers');
// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

// Add the route
for(let api of routers){
    // console.log(api)
    server.route(api)
}

// Start the server
const init = async () => {
    // 注册插件
    await server.register(require('inert'));
    //日志插件
    await server.register({
        plugin: require('hapi-pino'),
        options: {
            prettyPrint: true,
            logEvents: ['response']
        }
    });
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
