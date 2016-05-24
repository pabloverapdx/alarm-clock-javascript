exports.Time = function(timeInput) {
  this.timeInput = timeInput;
};

exports.Time.prototype.read = function() {
  return this.timeInput;
};
