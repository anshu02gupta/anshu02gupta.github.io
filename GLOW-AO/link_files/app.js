function addRow() {
          
    var number = document.getElementById("num");
    var name = document.getElementById("name");
    var ra = document.getElementById("ra");
    var dec = document.getElementById("dec");
    var zs = document.getElementById("zs");
    var mag = document.getElementById("mag");
    var size = document.getElementById("size");
    var ao = document.getElementById("ao");
    var raao = document.getElementById("raao");
    var decao = document.getElementById("decao");
    var magao = document.getElementById("magao");
    var sep = document.getElementById("sep");
    var ref = document.getElementById("ref");
    var image = document.getElementById("image");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= num.value;
    row.insertCell(2).innerHTML= name.value;
   row.insertCell(3).innerHTML= ra.value;
   row.insertCell(4).innerHTML= dec.value;
   row.insertCell(5).innerHTML= zs.value;
   row.insertCell(6).innerHTML= mag.value;
   row.insertCell(7).innerHTML= size.value;
   row.insertCell(8).innerHTML= ao.value;
   row.insertCell(9).innerHTML= raao.value;
   row.insertCell(10).innerHTML= decao.value;
   row.insertCell(11).innerHTML= magao.value;
   row.insertCell(12).innerHTML= sep.value;
   row.insertCell(13).innerHTML= ref.value;
   row.insertCell(14).innerHTML= image.value;
 
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
 
function addTable() {
      
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<14; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<15; j++){
           var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
    
}
 
function load() {
    
    console.log("Page load finished");
 
}