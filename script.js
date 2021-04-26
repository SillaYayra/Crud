function onFormSubmit(){
    var formData=readFormData();
    insertNewRecord(formData);
    
    }
    function readFormData(){
    var formData={};
    formData["brand"]=document.getElementById("brand").value
    formData["itemName"]=document.getElementById("itemName").value
    formData["itemPrice"]=document.getElementById("itemPrice").value
    formData["expDate"]=document.getElementById("expDate").value
    return formData;
        
    }
    
    function inserNewRecord(data) {
    var table=document.getElementById("employeeList").getElementById(tbody)[0];
    var nwRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0)
    cell1.innerHTML=data.category;
    cell2=newRow.insertCell(1)
    cell2.innerHTML=data.productName;
    cell3=newRow.insertCell(2)
    cell3.innerHTML=data.productPrice;
    cell4=newRow.insertCell(3)
    cell4.innerHTML=data.modifiedDate;
    cell4=newRow.insertCell(4)
    cell4.innerHTML='<a>Edit</a>  <a>Delete</a>';
    
    
    
    }