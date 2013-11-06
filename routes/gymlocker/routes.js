var index = require('./index');
var admin = require('./admin_pages');
var admin_db = require('./admin_db');

// Index pages
exports.home = index.home;					// index/login page
exports.isLoggedIn = index.isLoggedIn;		// checks if someone is logged in
exports.login = index.login;				// attempt to log in
exports.logout = index.logout;				// log out
exports.main = index.main;					// onces logged in/signed up, view main home page
exports.signup = index.signup;				// attempt to sign up

// Admin pages
exports.admin = admin.index;
exports.admin_users = admin.users;
exports.admin_pro_queue = admin.pro_queue;
exports.admin_exercises = admin.exercises;
exports.admin_equip = admin.equip;
exports.admin_add_ex = admin.add_ex;
exports.admin_add_equip = admin.add_equip;

// Admin Query/JSON
exports.db_get_all_members = admin_db.get_all_members;
// exports.db_delete_members = admin_db.delete_members;
// exports.db_get_pro_queue = admin_db.get_pro_queue;
// exports.db_get_all_ex = admin_db.get_all_ex;
// exports.db_get_all_equip = admin_db.get_all_equip;