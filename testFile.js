/**
 * Created by Landon Barnickle on 4/1/15.
 */

var https = require('https');
var fs = require('fs');


var options = {
    hostname: 'api.github.com',
    port: 443,
    method: 'GET',
    headers: {'user-agent': 'Mozilla/5.0'}
};


var myTest = function () { };




myTest.prototype.getGists = function (callback) {
    /*
     Get a list of the top public Gists at https://api.github.com/gists/public
     pass an array of Gist ids to the callback function

     you can use the request options above but be sure to add a path
     */


};


myTest.prototype.isStared = function (gistId, callback) {
    /*
     Check https://api.github.com/gists/:gistId/star for the given gist id to see if it is starred or not
       if the gist has a star you with get a 204 http response, if it does not you will get a 404 response
       pass a boolean value to the callback
     */

};


myTest.prototype.transformRows = function (rows, keyColumn, listColumn) {
    /*
     Take an array of flat objects
     return an object with attributes for each distinct key column value
       and object.key value is an array of the associated values from the list column

     ex: keyColumn = 'name' and listColumn = 'brother' and rows =
       [ { name: 'Alice', brother: 'Ralph'}, { name: 'Alice', brother: 'Sam'},  { name: 'Bob', brother: 'Tom'} ]
       returns -> { 'Alice': ['Ralph','Sam'], 'Bob': ['Tom'] }

     you can use the included dbSample.json for testing
     */

};

function add(o) {
    return {val: o.a + o.b };
}

myTest.prototype.convertFile = function (inFileName, calcFunction, outFileName) {
    /*
     import a JSON file from the current directory using the inFileName that contains an array of objects
     call the calc function for each object and collect the results into an array
     write the array to a file with the outFileName

     the calc.json file and local "add" function have been included to assist with testing
     */


};


module.exports = myTest;

