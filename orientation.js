 window.addEventListener("deviceorientation", on_device_orientation);
 document.getElementById("id_bussiness_version").innerHTML = "Business version: 2018.10.29.0";
 function on_device_orientation(e)
 {
	 document.getElementById("id_alpha").innerHTML = e.alpha;
	 document.getElementById("id_beta").innerHTML = e.beta;
	 document.getElementById("id_gamma").innerHTML = e.gamma;
 }