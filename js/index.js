function verificat(){
	if (document.getElementById('exampleInputEmail1').value == ""){
		document.getElementById('exampleInputEmail1').style.borderColor = "red";
		document.getElementById('exampleInputEmail1').style.backgroundColor = "#ffe5e5";
		document.getElementById('exampleInputEmail1').focus();
		return false;

	}
	else if(document.getElementById('exampleInputPassword1').value == ""){
	document.getElementById('exampleInputPassword1').style.borderColor = "red";
	document.getElementById('exampleInputPassword1').style.backgroundColor = "#ffe5e5";
	document.getElementById('exampleInputPassword1').focus();
    return false;
  }
  else if (document.getElementById('exampleInputEmail1').value == "admim@admim.com" && document.getElementById('exampleInputPassword1').value == "admim"){
  	window.open('/home/castro/git/negaodabl/index.html')
  	return true;
  }
}