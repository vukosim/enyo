﻿enyo.kind({
	name: "enyo.Layout",
	layoutClass: "",
	//* @protected
	constructor: function(inContainer) {
		this.container = inContainer;
		inContainer.addClass(this.layoutClass);
	},
	destroy: function() {
		if (this.container) {
			this.container.removeClass(this.layoutClass);
		}
	},
	// static property layout
	flow: function() {
	},
	// dynamic measuring layout
	reflow: function() {
	}
});
