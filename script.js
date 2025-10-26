function insert_Row() {
  const table = document.getElementById("sampleTable");
  const newRow = table.insertRow(0); // insert at top (index 0)

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  cell1.innerText = "New Cell1";
  cell2.innerText = "New Cell2";
}
