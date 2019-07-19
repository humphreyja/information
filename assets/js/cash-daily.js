$( document ).ready(function() {
  var s = skrollr.init({
		edgeStrategy: 'set',
		easing: {
			WTF: Math.random,
			inverted: function(p) {
				return 1-p;
			}
		}
	});

  var recurring = false;
  $('#recurring-details-button').click(function() {
    if (recurring) {
      $('#recurring-details').fadeTo('slow', 0);
      recurring = false;
    } else {
      $('#recurring-details').fadeTo('slow', 1);
      recurring = true;
    }
  });

  var customizable = false;
  $('#highly-customizable-details-button').click(function() {
    if (customizable) {
      $('#highly-customizable-details').fadeTo('slow', 0);
      customizable = false;
    } else {
      $('#highly-customizable-details').fadeTo('slow', 1);
      customizable = true;
    }
  });

  var daily = false;
  $('#daily-details-button').click(function() {
    if (daily) {
      $('#daily-details').fadeTo('slow', 0);
      daily = false;
    } else {
      $('#daily-details').fadeTo('slow', 1);
      daily = true;
    }
  });

  var scenarios = false;
  $('#scenarios-details-button').click(function() {
    if (scenarios) {
      $('#scenarios-details').fadeTo('slow', 0);
      scenarios = false;
    } else {
      $('#scenarios-details').fadeTo('slow', 1);
      scenarios = true;
    }
  });
});
