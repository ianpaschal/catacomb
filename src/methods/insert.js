/*
	Catacomb | Insert
	-
	Authors: @ianpaschal
	License: MIT
*/
const UUID = require("uuid");
module.exports = function( data, callback ) {
	let index;
	// If the data includes the field the database uses as index:
	if ( !data[ this.index ] ) {
		index = UUID.v4();
		data[ this.index ] = index;
	} else {
		index = data[ this.index ];
	}
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
