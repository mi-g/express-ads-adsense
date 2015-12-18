/* 
 * Copyright (c) 2015 Michel Gutierrez
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. 
 */

var modPackage = require('./package');
var fs = require('fs');

exports.version = modPackage.version;
exports.name = "adSense";
exports.title = "AdSense";
exports.sizes = ["728x90","336x280","320x100","300x600","300x250"];
exports.settings = [{
	name: "adclient",
	title: "AD Client",
	type: "text",
	placeholder: "ca-pub-1234567890",
	defaults: "ca-pub-1234567890",
}];
exports.bannerSettings = [{
	name: "adslot",
	title: "AdSense slot",
	type: "text",
	placeholder: "1234567890",
	defaults: "1234567890",
}];
exports.template = fs.readFileSync(__dirname+"/template.ejs","utf-8");
