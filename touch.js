  document.getElementById("id_bussiness_version").innerHTML = "Business version: 2018.11.26.1";
  
  var canvas = document.getElementById("id_canvas");
  canvas.addEventListener("touchstart", on_touch_start);
  
  var canvas_bounding_rect = canvas.getBoundingClientRect();
  
  function on_touch_start(e) 
  {
	  for (var i = 0; i<e.changeTouches.length; i++) {
		var context = canvas.getContext("2d");
		context.beginPath();
		context.arc(e.changeTouches[i].pageX - canvas_bounding_rect.left,
					e.changeTouches[i].pageX - canvas_bounding_rect.top,
					10,
					0,
					2 * Math.PI);
		context.stroke();
	  }
  }