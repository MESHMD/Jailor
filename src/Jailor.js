var Jailor;

(function(GLOBAL) {
	var conditions = [];


	Jailor = {
		init: function initJailor() {
			var previousBeforeUnloadHandler = GLOBAL.onbeforeunload;

			GLOBAL.onbeforeunload = Jailor.check;

			Jailor.lock(previousBeforeUnloadHandler);
		},

		lock: function lock(condition) {
			if (condition)
				conditions.push(condition);

			return this;
		},

		check: function check() {
			var result = [];

			conditions.forEach(function(condition) {
				var evaluationResult = condition();

				if (typeof evaluationResult == 'string')
					result.push(evaluationResult);
			});

			if (result.length)
				return result.join('\n');
		}
	}


	Jailor.init();
})(window);
