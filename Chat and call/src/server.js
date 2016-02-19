/*!
      File Description: Server confiugration and launch parameters
 */

 'use strict';

 import * as Hapi from 'hapi';
 import serverConfig from '../config/server';
 // import middleware
 import routes from './routes';


const server = new Hapi.Server();

server.connection( serverConfig );

//middleware( server );

routes( server );

export default server;
