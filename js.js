document.addEventListener("DOMContentLoaded", function(event) {

	if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(eventData) {
    var id_gama = eventData.gamma;
    var id_beta = eventData.beta;
    var id_alpha = eventData.alpha;
    deviceOrientationHandler(id_gama, id_beta, id_alpha);
  }, false);
} else {
};

    function deviceOrientationHandler(id_gama, id_beta, id_alpha) {
      document.getElementById("id_gama").innerHTML = Math.ceil(gamma);
      document.getElementById("id_beta").innerHTML = Math.ceil(beta);
      document.getElementById("id_alpha").innerHTML = Math.ceil(alpha);
      var compassDisc = document.getElementById("compassDiscImg");
      compassDisc.style.webkitTransform = "rotate("+ id_alpha +"deg)";
      compassDisc.style.MozTransform = "rotate("+ id_alpha +"deg)";
      compassDisc.style.transform = "rotate("+ id_alpha +"deg)";
    }

});