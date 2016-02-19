/*!
    File Description: Defines routes for the application.
 */

 'use strict';

 import * as fs from 'fs';
 import * as path from 'path';
 import * as glob from 'glob';
 import {
   Server
 } from 'hapi';

// To Flatten nested arrays
 import {
   flatten
 } from 'lodash';

 import {
   prefixRoutes
 } from './utils';

  const
      // routes wild card
      routeFileWildCard = path.join( __dirname + '/src/SDK/**/routes.js' ),

      // An array containing all the routes definitions

      routeFilePaths = glob.sync( routeFileWildCard ),

      // function to attach the routes to the server
      attachRoutes = ( server ) => {

        let routes = [];

        routeFilePaths.forEach( routeFile => { routes.push( require( routeFile ).default ) });

        routes = flatten( routes );

        server.route( routes );
      };

export default attachRoutes;
