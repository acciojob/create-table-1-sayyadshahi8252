function insert_Row() {
    //Write your code here
	let celladded=document.getElementById("sampleTable")
	celladded.insertAdjacentHTML("afterbegin", `
  <tr>
    <td>New Cell1</td>
    <td>New Cell2</td>
  </tr>
`);
  
}
