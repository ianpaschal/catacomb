/*
	Catacomb
	-
	Authors: @ianpaschal
	License: MIT
*/
let DB = function( options ) {
	let defaults = {
		index: "id",
		path: undefined,
		autosave: false,
		autosaveInterval: 10000
	};
	for ( let i = 0; i < Object.keys( defaults ).length; i++ ) {
		let key = Object.keys( defaults )[ i ];
		if ( options && options[ key ] ) {
			this[ key ] = options[ key ];
		} else {
			this[ key ] = defaults[ key ];
		}
	}
	this.records = {};
	this._size = 0;
	this._autosaveTimer;
	if ( this.autosave === true ) {
		this.startAutosave();
	}
};
DB.prototype = {
	save:           require("../src/methods/save.js"),
	load:           require("../src/methods/load.js"),
	insert:         require("../src/methods/insert.js"),
	insertAs:       require("../src/methods/insertAs.js"),
	update:         require("../src/methods/update.js"),
	delete:         require("../src/methods/delete.js"),
	get:            require("../src/methods/get.js"),
	getAll:         require("../src/methods/getAll.js"),
	getSize:        require("../src/methods/getSize.js"),
	startAutosave: function() {
    this._autosaveTimer = setInterval(function() {
			console.log("Autosaving!");
		}, this.autosaveInterval );
  },
  stopAutosave: function() {
    this._autosaveTimer = undefined;
  }
};
module.exports = DB;
