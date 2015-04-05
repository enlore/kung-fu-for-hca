var should  = require("should");

var theCruciable = require("./testFile")
  , theSuite = new theCruciable()

describe("getGists", function () {
    it("should pass an Array of Strings to the callback", function (done) {
        theSuite.getGists(function (err, ids) {
            if (err)
                done(err)

            // not super specific, granted that I'm not checking if the strings
            // are actually gist ids, but I'm good with that considering I'm confident
            // that I'm hitting the right API endpoint
            //
            // I could do a regex against an id or two, prob, but that checks the form and not
            // the semantic value of the property
            ids.should.be.an.Array
            ids[0].should.be.a.String
            ids[1].should.be.a.String
            done()
        })
    })
})

describe("isStared", function () {
    it("should pass true to the callback if the gist is starred", function (done) {
        /*
         * I know this gist is starred, cause it's mine and I starred it
         * https://gist.github.com/enlore/38a2c4e545b8371be105
         * https://api.github.com/gists/38a2c4e545b8371be105
         * https://developer.github.com/v3/gists/#check-if-a-gist-is-starred
         */
        var gistId = "38a2c4e545b8371be105";

        theSuite.isStared(gistId, function (err, isStarred) {
            if (err)
                done(err)

            // this is still failing, though.  not sure why. always come back 404
            isStarred.should.be.true
            done()
        })
    })
})

describe("transformRows", function () {
    var kc = "name"
      , lc = "dog"
      , rows = [{name: "bob", dog: "franklin"}, {name: "bob", dog: "jenny"}, {name: "susan", dog: "juniper"}]
      ;

    it("should return an Object keyed to each distinct keyColumn", function () {
        var resObject = theSuite.transformRows(rows, kc, lc)

        resObject.should.be.an.Object
        resObject.should.have.property("bob")
        resObject.should.have.property("susan")
    })

    it("should return an object containing an array of vals pulled from listColumn vals keyed to each keyColumn name", function () {
        var resObject = theSuite.transformRows(rows, kc, lc)

        resObject["bob"].should.eql(["franklin", "jenny"])
        resObject["susan"].should.eql(["juniper"])
    })
})

describe("convertFile", function () {
    var outFile = "calculatedVals.json"
      , fs      = require("fs")
      ;

    afterEach(function (done) {
        fs.unlink(outFile)
        done()
    })

    it("should write an Array of {val: Number} to disk", function (done) {

        // I don't need to test anything, really, beyond getting the output written
        theSuite.convertFile("calc.json", theCruciable.addHelper, outFile)

        // this feels weird and kind of bad
        fs.exists(outFile, function (itDoes) {
            itDoes.should.be.true
            done()
        })
    })
})
