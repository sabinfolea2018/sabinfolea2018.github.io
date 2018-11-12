 document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.10.29.0";
 document.getElementById("id_start_button").addEventListener("click", start);
 document.getElementById("id_stop_button").addEventListener("click", stop);
 
 
 document.getElementById("id_stop_button").disabled = true;
 document.getElementById("id_start_button").disabled = false;
 
	 var unghi_start = {unghi:0};
	 var my_worker = null;
 function deseneaza_cerc(unghi, context, w, h)
 {
	 context.clearRect(0,0, w,h);
	 context.beginPath();
	 context.arc(w/2+ 100 * Math.cos(unghi.unghi * Math.PI/180), 
				 h/2+ 100 * Math.sin(unghi.unghi * Math.PI/180), 
				 50,0,2 * Math.PI);
	 context.stroke();
	 
	 unghi.unghi++;
 }
 
 function start()
 {
	 var canvas = document.getElementById("id_canvas");
	 var context = canvas.getContext("2d");
	 
	 document.getElementById("id_start_button").disabled = true;
	 document.getElementById("id_stop_button").disabled = false;
	 if (my_worker == null){
		 
	 var my_worker = new Worker("calcul_prime.js");
	 my_worker.onmessage = function(e){
		document. getElementById("id_prime").innerHTML = e.data;
	 }
	 
	 
	id_timer = setInterval(deseneaza_cerc, 10, unghi_start, context, canvas.width, canvas.height);
	 }
	 else my_worker.postMessage("start");

 }
 function stop()
 {
	 
	 document.getElementById("id_start_button").disabled = false;
	 document.getElementById("id_stop_button").disabled = true;
	 my_worker.postMessage("stop");
	 clearInterval(id_timer);
	 
 }