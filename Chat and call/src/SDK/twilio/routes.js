/*!
  File Description: Defines Routes for Google SDK
*/

"use strict";

import {
  IRouteConfiguration
} from 'hapi';

import * as Joi from 'joi';

const routes : IRouteConfiguration[] = [
  {
    method:'GET',
    path:'/google/getPicture',
    handler:handler.getPicture,
    config: {
      validate: {
        query: {
          userId: Joi.string().required(), //this is the google User ID and not the gamezopId
          accessToken: Joi.string().required(),
        }
      }
    },
  },
  {
    method:'GET',
    path:'/google/getFriends',
    handler:handler.getFriends,
    config:{
      validate:{
        query:{
          userId: Joi.string().required(), //this is the google User ID and not the gamezop ID
          accessToken: Joi.string().required(),
        }
      }
    }
  }
];

export default routes;
