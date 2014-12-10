/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		/* TO BE IMPLEMENTED */	
		defaults: {
			title: "",
			status: false
		},

		initialize : function () {
			console.log("New model");
			this.on("change", function () {
				console.log("changed");
			});
		},

		toggle: function() {
			this.save({
				status: !this.get('status')
			});
		}
	});
})();
