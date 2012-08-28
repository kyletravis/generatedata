define([
	"constants",
	"lang",
	"mediator"
], function(C, L, mediator) {

	var MODULE_ID = "export-type-SQL";
	var LANG = L.modules.SQL;

	/**
	 * Called when the user changes the result type
	 */
	var _resultTypeChanged = function(msg) {
		if (msg.newExportType == "SQL") {
			$("#gdColTitleTop,#gdColTitleBottom").html(LANG.row_label);
		}
	}

	var _init = function() {
		var subscriptions = {};
		subscriptions[C.EVENT.RESULT_TYPE.CHANGE] = _resultTypeChanged;
		mediator.subscribe(MODULE_ID, subscriptions);
	}

	var _run = function() {

	}

	mediator.register(MODULE_ID, C.COMPONENT.EXPORT_TYPE, {
		init: _init,
		run: _run
	});
});