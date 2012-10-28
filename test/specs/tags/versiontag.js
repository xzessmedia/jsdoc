/*global describe: true, expect: true, it: true */
var helpers = require('test/specs/helpers');

describe("@version tag", function() {
    var docSet = helpers.getDocSetFromFile('test/fixtures/versiontag.js'),
        foo = docSet.getByLongname('foo')[0];

    it('When a symbol has an @version tag, the doclet has a version property set to that value.', function() {
        expect(foo.version).toEqual('1.2.3');
    });
});