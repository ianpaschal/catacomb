/*
	Catacomb | Save
	-
	Authors: @ianpaschal
	License: MIT
*/
const FS = require("fs");
module.exports = function( path ) {
	let data;
	if ( !path && !this.path ) {
		return console.log("No location specified, could not save database.");
	}
	path = path || this.path;
	data = JSON.stringify( this.records, null, 2 );
	FS.writeFile( path, data, "utf8", function( err ) {
		if ( err ) {
			return console.log( err );
		}
		this.path = path;
		return console.log("Database saved!");
	});
};
