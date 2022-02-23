var employeeData;

function hello(flag){
	var output="";
	var strEmployeeTable="";

	strEmployeeTable = '<table class="table table-bordered">';
	strEmployeeTable = strEmployeeTable + '<thead class="thead-dark">';
	strEmployeeTable = strEmployeeTable + '<tr> <th scope="col">Employee Id</th> <th scope="col">Name</th> <th scope="col">Place</th> <th scope="col">State</th> </tr>';
	strEmployeeTable = strEmployeeTable + '</thead>';

	strEmployeeTable = strEmployeeTable + '<tbody>';
	if(flag==3){
			var no = parseInt(document.getElementById('eid').value);
			no = no-101;
			strEmployeeTable = strEmployeeTable + '<tr><th scope="row">'+(no+101)+'</th> <td>'+employeeData[no].First+'</td> <td>'+employeeData[no].Place+'</td> <td>'+employeeData[no].state+'</td> </tr>';
	}
	else{
	for(var i=0;i<employeeData.length;i++){
		if(flag == 0){
			strEmployeeTable = strEmployeeTable + '<tr> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].state+'</td> </tr>';
        }
		else if(flag == 1){
			if(i%2!=0){
				strEmployeeTable = strEmployeeTable + '<tr><th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].state+'</td> </tr>'; 
			}
		}
		else if(flag == 2){
			if(i%2==0){
				strEmployeeTable = strEmployeeTable + '<tr><th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].state+'</td> </tr>'; 		
			}
		}
	}
	}
	strEmployeeTable = strEmployeeTable + '</tbody>';
	strEmployeeTable = strEmployeeTable + '</table>';


	for(var i=0;i<employeeData.length;i++){
		output = output+(i+1)+".Name: "+employeeData[i].First+",Place: "+employeeData[i].Place+"<br>";
	}

	document.getElementById('result').innerHTML=strEmployeeTable;
}


function cleartext(){
	document.getElementById('result').innerHTML="";
}


employeeData=[{
  "First":"Bhavani",
  "Last":"Konderu",
  "Place":"Hyderabad",
  "state":"Telangana"
},
{
  "First":"jothilakshmi",
  "Last":"v",
  "Place":"rajapalayam",
  "state":"TN"
},
{
  "First":"prathyusha",
  "Last":"K",
  "Place":"Tirupati",
  "state":"AP"
},
{
  "First":"Samhitha",
  "Last":"v",
  "Place":"Rajahmundry",
  "state":"AP"
},
{
  "First":"Neeraja",
  "Last":"v",
  "Place":"Guntur",
  "state":"AP"
},
{
  "First":"Divya",
  "Last":"v",
  "Place":"Machilipatnam",
  "state":"AP"
},
{
  "First":"pavan",
  "Last":"G",
  "Place":"Guntur",
  "state":"AP"
},
{
  "First":"Shravani",
  "Last":"K",
  "Place":"Hyderabad",
  "state":"TS"
},
{
  "First":"Udhay",
  "Last":"K",
  "Place":"Banglore",
  "state":"Karnataka"
},
{
  "First":"Ghanshyam",
  "Last":"B",
  "Place":"Lucknow",
  "state":"UP"
}]