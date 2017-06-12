/*
	Catacomb | Get All
	-
	Authors: @ianpaschal
	License: MIT
*/
module.exports = function( callback ) {
	let results = [];
	for ( record in this.records ) {
		results.push( record );
	}
	if ( typeof callback === "function") {
		return callback( results );
	}
	return results;
};
