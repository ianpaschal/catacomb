<img style="margin: 16px auto; display: block;" width="128px" height="128px" src="https://github.com/ianpaschal/catacomb/raw/master/docs/logo.png" />

# Catacomb
A bare bones database.

#### Note: As of 2017-06-12, Catacomb is still in the early stages of development. Please avoid using it and check back later.

## About
I wanted a simple way to store my app's data. The obvious solution was just to use the FS module to write JSON to disk. LokiJS did this, but it felt more complicated than just doing it "by hand". Catacomb is an attempt to make it even easier.

If you find yourself asking, "Why does this even exist? It's barely worth a module!", well I _did_ say it was "bare bones."

## Installation
These instructions are pretty bad right now. Check back later.

Check out the releases tab on GitHub and download the latest build. Include it in your app the usual way.

Or use:
```
npm install catacomb --save
```

## Usage
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
