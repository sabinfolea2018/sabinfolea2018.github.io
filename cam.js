document.getElementById("id_button").addEventListener("click",start);

function on_success(e)
{
	document.getElementById("video").srcObject = e;
}

function on_failure(e)
{
	alert("Eroare conectare");
}


function start()
{
	var c = {audio: true, video: {facingMode: "environment"}};
	navigator.mediaDevices.getUserMedia(c).then(on_success).catch(on_failure);
}