var Time = require ('./../js/businessLogic.js').Time;
  $(document).ready (function() {
    $('#enterTime').submit(function(event) {
      event.preventDefault();

      var timeInput = $('#timeInput').val();

      var newTime = new Time (timeInput);
      console.log(newTime.read());
    });
  });
