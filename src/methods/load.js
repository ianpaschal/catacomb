/*
	Catacomb | Load
	-
	Authors: @ianpaschal
	License: MIT
*/
const FS = require("fs");
module.exports = function( path ) {
	if ( !path && !this.path ) {
		return console.log("No location specified, could not load database.");
	}
	path = path || this.path;
	FS.readFile( path, "utf8", function( err, data ) {
		if ( err ) {
			return console.log( err );
		}
		this.path = path;
		this.records = JSON.parse( data );
		return console.log("Database loaded!");
	});
};
