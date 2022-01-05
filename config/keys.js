//We can add this to .gitignore

module.exports = {
    google: {
        callbackURL: "/auth/google/redirect",
        clientID: '<Your Google Client ID>',
        clientSecret: '< Your Google Client Secret - key >'
    },
    session: {
        cookieKey: 'anythinghere--> youareawesome'
    }
};
