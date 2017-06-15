<img width="128px" height="128px" src="https://github.com/ianpaschal/catacomb/raw/master/docs/logo.png" />

# Catacomb
A bare bones JSON database.

<!-- [![Github file size](https://img.shields.io/github/size/webcaetano/craft/build/craft.min.js.svg)]() -->

#### Note: As of 2017-06-12, Catacomb is still in the early stages of development. Please avoid using it and check back later.

## About
I wanted a simple way to store my Electron app's data. The obvious solution was just to use the FS module to write JSON to disk. So that's what Catacomb does. Only, it includes some slightly more "databasey" methods in case you want to search your JSON instead of referencing a specific key-value pair.

Also, I found most other databases recommend for Electron projects:
- Too complicated to set up.
- Requiring usage within the rendering process because they used IndexedDB (and this is _not_ what the rendering process is for).
- Focusing too much on syncing and online integration which is super handy if you need it, but adds a lot of overhead on offline-only Electron apps that just need a way to save user data between sessions.

If you find yourself asking, "Why does this even exist? It's barely worth a module!", well I _did_ say it was "bare bones." Also, on a personal level, I wanted to try writing an open source module and publishing it on NPM, just for the thrill. So there's that.

## Installation
You can install Catacomb NPM style and `require()` it (preferred), or use HTML script tags.

### NPM
Nothing special here, install it like any other module:
```
npm install catacomb --save
```
After installing, simply require it in your code:

```js
const Catacomb = require("catacomb");
```

### HTML Script Tags
In the near future, it will be possible to download compiled and minified versions to include in HTML `<script>` tags. After downloading and unzipping the release, move to to your project and in your HTML file, include it thusly:
```html
<html>
	<head>
		...
		<script src="js/catacomb.min.js"></script>
		...
	</head>
	<body> ... </body>
</html>
```



## Usage (Work in Progress)
Full documentation can be found on the Github Wiki.

Here's a little example of how straight forward it is to use Catacomb:
```js
// Create a catacomb and specify some options:
let library = new Catacomb({
	index: "id" // This is the key used as an index.
});

// Save to Electron's user data folder:
library.save( app.getPath("userData") + "/library.json");

// Stick a new record in. In this case, we provide the UUID because it's linked to something specific in our app. If it was not provided, Catacomb will generate a UUID itself, and return it.
library.insert({
	id: "0399afa4-219f-45ea-aae0-6968d59a9028",
	name: "Dooper"
});

// Out of curiosity, how many records does our library have?
console.log( library.getSize() );

// Persist our library to disk:
library.save();
```
