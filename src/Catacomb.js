/*
	Catacomb
	-
	Authors: @ianpaschal
	License: MIT
*/
let DB = function( options ) {
	if ( options ) {
		this.index = options.index || undefined;
		this.path = options.path || undefined;
	}
	this.records = {};
	this._size = 0;
};
DB.prototype.save   = require("../src/methods/save.js");
DB.prototype.load   = require("../src/methods/load.js");
DB.prototype.insert = require("../src/methods/insert.js");
DB.prototype.update = require("../src/methods/update.js");
DB.prototype.delete = require("../src/methods/delete.js");
DB.prototype.get    = require("../src/methods/get.js");
DB.prototype.getAll = require("../src/methods/getAll.js");
/*
DB.prototype.upsert = function( key, data, callback ) {
	if ( !this.records[ key ] ) {
		this.records[ key ] = {};
	}
	for ( property in data ) {
		this.records[ key ][ property ] = data.property;
	}
	return this;
};
*/

/*
DB.prototype.getWhere = function( key, comp, value, callback ) {
	let results = [];
	for ( let i = 0; i < this.records.length; i++ ) {
		if ( this.records[ i ][ key ] == value ) {
			results.push( this.records[ i ] );
		}
	}
	if ( results.length === 0 ) {
		return console.log("No record found with index equal to that value.");
	}
	if ( typeof callback === "function") {
		return callback( results );
	}
	return results;
};
*/
DB.prototype.getSize = function( callback ) {
	return this._size;
};

module.exports = DB;
