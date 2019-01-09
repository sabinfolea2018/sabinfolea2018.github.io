document.addEventListener("DOMContentLoaded", function(event) {

	if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(eventData) {
    var gama = eventData.gamma;
    var beta = eventData.beta;
    var alpha = eventData.alpha;
    deviceOrientationHandler(gama, beta, alpha);
  }, false);
} else {
};

    function deviceOrientationHandler(gama, beta, alpha) {
      document.getElementById("gama").innerHTML = Math.ceil(gama);
      document.getElementById("beta").innerHTML = Math.ceil(beta);
      document.getElementById("alpha").innerHTML = Math.ceil(alpha);
    }

});