function add(){
	var x=parseInt(document.getElementById('num1').value);
	var y=parseInt(document.getElementById('num2').value);
	document.getElementById("result").innerHTML=(x+y);
}
function sub(){	
	var x=parseInt(document.getElementById('num1').value);
	var y=parseInt(document.getElementById('num2').value);
	document.getElementById("result").innerHTML=(x-y);
}
function mul(){	
	var x=parseInt(document.getElementById('num1').value);
	var y=parseInt(document.getElementById('num2').value);
	document.getElementById("result").innerHTML=(x*y);
}
function div(){	
	var x=parseInt(document.getElementById('num1').value);
	var y=parseInt(document.getElementById('num2').value);
	document.getElementById("result").innerHTML=(x/y);
}
