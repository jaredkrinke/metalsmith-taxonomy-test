const Metalsmith = require("metalsmith");
const markdown = require("metalsmith-markdown");
const taxonomy = require("metalsmith-taxonomy");

Metalsmith(__dirname)
    .source("./src")
    .destination("./build")
    .clean(true)
    .use(markdown())
    .use(taxonomy())
    .build(function (err) {
        if (err) throw err;
    });
