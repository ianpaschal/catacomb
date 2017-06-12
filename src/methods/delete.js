/*
	Catacomb | Delete
	-
	Authors: @ianpaschal
	License: MIT
*/
module.exports = function( index, callback ) {
	if ( !index ) {
		return console.error("Could not delete record without an index.");
	}
	delete this.records[ index ];
	if ( typeof callback === "function") {
		return callback( index );
	}
	return index;
};
