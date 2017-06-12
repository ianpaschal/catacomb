/*
	Catacomb | Update
	-
	Authors: @ianpaschal
	License: MIT
*/
module.export = function( index, data, eraseEmpty, callback ) {
	if ( !this.records[ index ] ) {
		return console.log("Record " + index + " does not exist in the database!");
	}
	if ( eraseEmpty === true ) {
		this.records[ index ] = data;
	} else {
		for ( item in data ) {
			this.records[ index ][ item ] = data.item;
		}
	}
	if ( typeof callback === "function") {
		return callback( index );
	}
	return index;
};
