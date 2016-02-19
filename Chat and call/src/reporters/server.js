'use strict';

var reportingHandler = err => {

  if ( err ) {

    throw err;

  } else {

    console.log( `API server running on port 3000\n`);

  }

};

export default reportingHandler;
