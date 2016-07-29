# basic-isomorphic-app
Generate static HTML via a build script

#### Quick Start

`npm install && npm start`

#### Overview

- Use mithril node render to generate a static html file when ever client/ files change
- Inject the clientside mithril code when generating the static page
- That's it


#### Reasoning

The main benefit of Isomorphic apps is SEO indexing and time to first page load.
If we can just generate a landing page then the client can take over.

### What about xyz

There is no production scripts in the package.json because this example isn't about that.
You can use webpack, or less, or sass or whatever you want.  The principle is the same.
