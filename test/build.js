/*jshint node:true */
"use strict";

var path   = require("path"),
    assert = require("assert"),

    Build = require("../lib/build.js");

describe("Node web build", function() {
    describe("Build Object", function() {
        it("should be instatiable", function() {
            assert(new Build({ root : "./specimens/simple/" }));
        });
        
        it("should throw if root isn't defined", function() {
            assert.throws(
                function() {
                    new Build();
                }
            );
        });
        
        it("should use the right defaults", function() {
            var b    = new Build({ root : "./test/specimens/simple/" }),
                dirs = b.config.dirs,
                __base = path.resolve(__dirname, "../");
            
            assert.equal(dirs.root, path.join(__dirname, "specimens", "simple"));
            assert.equal(dirs.dest, path.join(__base, "output"));
            assert.equal(dirs.temp, path.join(__base, "temp", "simple"));
            
            assert.equal(dirs.tasks.internal, path.join(__base, "tasks"));
            assert.equal(dirs.tasks.custom, false);
        });
    });
});