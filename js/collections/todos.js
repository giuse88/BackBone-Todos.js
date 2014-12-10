/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Collection
	// ---------------

	// The collection of todos is backed by *localStorage* instead of a remote
	// server.
	var Todos = Backbone.Collection.extend({
		model: app.Todo
	});

	// Create our global collection of **Todos**.
	app.Todos = Todos;
})();
