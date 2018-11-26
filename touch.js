  document.getElementById("id_bussiness_version").innerHTML = "Business version: 2018.11.26.0";
  
  var canvas = document.getElementById("id_canvas");
  canvas.addEventListener("touchstart", on_touch_start);
  
  function on_touch_start(e) 
  {
	  for (var i = 0; i<e.changeTouches.length; i++) {
		var context = canvas.getContext("2d");
		context.beginPath();
		context.arc(e.changeTouches[i].pageX,
					e.changeTouches[i].pageX,
					10,
					0,
					2 * Math.PI);
		context.stroke();
	  }
  }