Jailor
======

Allows web applications to register conditions under which an user will be asked to confirm exiting the page.

It is a simple wrapper over [`onbeforeunload`](http://mdn.beonex.com/en/DOM/window.onbeforeunload.html) ([demo](http://www.4guysfromrolla.com/demos/OnBeforeUnloadDemo1.htm)) that allows to add multiple conditions easily.

Example
-------

	var car = {
		wheelsCount: 2
	}

	instructionsDiv.textContent = 'Fix the car!';

	Jailor.lock(function() {
		if (car.wheelsCount != 4) {
			return 'The car is expected to have 4 wheels, not ' + car.wheelsCount + '!';	// return an error-description string to ask confirmation from the user
		}	// return anything else than a string (or nothing) to allow the user to leave the page without any question
	});

Notes
-----

Jailor respects any previous `onbeforeunload` handler already in place, and will add it as a condition.
