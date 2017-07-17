# typescript-library-pattern
A simple configuration for making a Typescript library.

# Initial setup

## Library building

`cd` into `my-library` and run these two commands:

* `npm install`

* `npm run lib`

## Main project building

`cd` into the repository root and run these two commands:

* `npm install`

* `npm run build`

# Generating JS equivalents of TS files

`npm run js`

# Running the bundle

Run using `node bundle.js` (note: ensure your global node is up-to-date, or `npm install` a new local one to the package.json), or include the bundle into a HTML page as a script, eg: `<script src="bundle.js"></script>` and it will auto-run.

If it fails, it'll log "ERROR: something"; otherwise it'll log "All functionalities succeeded :)".
