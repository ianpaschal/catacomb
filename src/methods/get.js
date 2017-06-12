/*
	Catacomb | Get (One)
	-
	Authors: @ianpaschal
	License: MIT
*/
module.exports = function( index, callback ) {
	let result;
	if ( !this.records[ index ] ) {
		return console.log("No record found with that index.");
	}
	result = this.records[ index ];
	if ( typeof callback === "function") {
		return callback( result );
	}
	return result;
};
