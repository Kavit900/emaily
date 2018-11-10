const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/google', 
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/api/logout', (req, res) => {
		// passport automatically log out user and deletes it's cookies
		req.logout();
		// req.user gets empty because of logout
		res.send(req.user);
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};