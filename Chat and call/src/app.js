/**
 * File Description: Main file, runs the app
 */

 'use strict';

 import server from './server';

 import serverReporter from './reporters/server';

 server.start( serverReporter );
