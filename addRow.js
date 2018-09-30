function insert_Row() {
    var tabla = document.getElementById("sampleTable");
	var count = tabla.getElementsByTagName("tr").length;
    var row = tabla.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Row " + (count + 1) + " Cell 1";
    cell2.innerHTML = "Row" + (count + 1) + " Cell 2";
}