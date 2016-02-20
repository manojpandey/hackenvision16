'use strict';
const platform = require('platform');
const os = require('os-utils');

const commands = {

	systemInfo: () => {

		return platform.os;
	},

	resourceManager: () => {

		os.cpuUsage((val)=>{console.log(`${val*100}`.substring(0,4));})
	}
}

