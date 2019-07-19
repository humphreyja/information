$( document ).ready(function() {
  var recurring = false;
  $('.recurring-details-button').click(function() {
    if (recurring) {
      $('.recurring-details').fadeOut();
      recurring = false;
    } else {
      $('.recurring-details').fadeIn();
      recurring = true;
    }
  });

  var customizable = false;
  $('.highly-customizable-details-button').click(function() {
    if (customizable) {
      $('.highly-customizable-details').fadeOut();
      customizable = false;
    } else {
      $('.highly-customizable-details').fadeIn();
      customizable = true;
    }
  });

  var daily = false;
  $('.daily-details-button').click(function() {
    if (daily) {
      $('.daily-details').fadeOut();
      daily = false;
    } else {
      $('.daily-details').fadeIn();
      daily = true;
    }
  });

  var scenarios = false;
  $('.scenarios-details-button').click(function() {
    if (scenarios) {
      $('.scenarios-details').fadeOut();
      scenarios = false;
    } else {
      $('.scenarios-details').fadeIn();
      scenarios = true;
    }
  });
});
