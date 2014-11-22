/* global describe, it, expect, before */
/* jshint expr: true */

var fs = require('fs')
  , parse = require('../lib/profile').parse;


describe('profile.parse', function() {

  describe('example profile', function() {
    var profile;

    before(function(done) {
      fs.readFile('test/data/example.json', 'utf8', function(err, data) {
        if (err) { return done(err); }
        profile = parse(data);
        done();
      });
    });

    it('should parse profile', function() {
      expect(profile.id).to.equal('12345678');
      expect(profile.username).to.equal('Имя');
      expect(profile.displayName).to.equal('Имя Фамилия');
      expect(profile.profileUrl).to.equal('https://m.hh.ru/me');
      expect(profile.emails).to.have.length(1);
      expect(profile.emails[0].value).to.equal('contact@example.com');
    });
  });
});
