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
  	alert('login completed')
  	return true;
  }
}
function verificaCr(){
	if (document.getElementById('exampleInputEmail2').value == ""){
		document.getElementById('exampleInputEmail2').style.borderColor = "red";
		document.getElementById('exampleInputEmail2').style.backgroundColor = "#ffe5e5";
		document.getElementById('exampleInputEmail2').focus();
		return false;
	}
	else if(document.getElementById('exampleInputPassword2').value == ""){
	document.getElementById('exampleInputPassword2').style.borderColor = "red";
	document.getElementById('exampleInputPassword2').style.backgroundColor = "#ffe5e5";
	document.getElementById('exampleInputPassword2').focus();
    return false;
	} 
	else if (document.getElementById('exampleInputName2').value == ""){
	document.getElementById('exampleInputName2').style.borderColor = "red";
	document.getElementById('exampleInputName2').style.backgroundColor = "#ffe5e5";
	document.getElementById('exampleInputName2').focus();
	return false;
	}
	else if (document.getElementById('exampleInputAge2').value == ""){
	document.getElementById('exampleInputAge2').style.borderColor = "red";
	document.getElementById('exampleInputAge2').style.backgroundColor = "#ffe5e5";
	document.getElementById('exampleInputAge2').focus();
	return false;
	}
	else if(document.getElementById('exampleInputAge2').value < 14){
	document.getElementById('exampleInputAge2').style.borderColor = "red";
	document.getElementById('exampleInputAge2').style.backgroundColor = "#ffe5e5";
	document.getElementById('exampleInputAge2').focus();
	return false;
	}
	else{
		toLogin()
		return true
	}
}

function toLogin(){
	window.open('/login')
}