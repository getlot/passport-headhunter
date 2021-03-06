# Passport-HeadHunter

[Passport](http://passportjs.org/) strategy for authenticating with [HeadHunter](https://github.com/hhru/api)
using the OAuth 2.0 API.

This module lets you authenticate using HeadHunter in your Node.js applications.
By plugging into Passport, HeadHunter authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-headhunter

## Usage

#### Configure Strategy

The HeadHunter authentication strategy authenticates users using a HeadHunter account
and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a client ID, client secret, and callback URL.

    passport.use(new HeadHunterStrategy({
        clientID: HEADHUNTER_CLIENT_ID,
        clientSecret: HEADHUNTER_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/headhunter/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ headhunterId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'headhunter'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/headhunter',
      passport.authenticate('headhunter'));

    app.get('/auth/headhunter/callback',
      passport.authenticate('headhunter', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/getlot/passport-headhunter/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/getlot/passport-headhunter.png)](http://travis-ci.org/getlot/passport-headhunter)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)
  - [Andrey Petukhov](http://github.com/getlot)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>

