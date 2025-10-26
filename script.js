function insert_Row() {
    //Write your code here
	let celladded=document.getElementById("sampleTable")
	celladded.insertAdjacentHTML("afterbegin", `
  <tr>
    <td>New cell1</td>
    <td>New cell2</td>
  </tr>
`);
  
}
