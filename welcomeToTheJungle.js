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
            ids.should.be.an.Array
            ids[0].should.be.a.String
            ids[1].should.be.a.String
            done()
        })
    })
})

describe("isStared", function () {
    it("should pass a Bool to the callback")
})

describe("transformRows", function () {
    it("should return an Array")
})

describe("convertFile", function () {
    it("should write JSON to a file")
})
