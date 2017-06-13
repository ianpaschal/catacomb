/*
	Catacomb | Insert As
	-
	Authors: @ianpaschal
	License: MIT
*/
const UUID = require("uuid");
module.exports = function( index, data, callback ) {
	if ( this.records[ index ] ) {
		return console.log("Record " + key + " already exists in database!");
	}
	this.records[ index ] = data;
	this._size++;
	if ( typeof callback === "function") {
		return callback( index );
	}
	return index;
};
