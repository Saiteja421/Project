var fname=document.getElementById('fname');
var lname=document.getElementById('lname');
var age=document.getElementById('age');

var btn=document.getElementById('submit');
btn.onclick=()=>{
    var td1=document.createElement('td');
    td1.textContent=fname.value;
    var td2=document.createElement('td');
    td2.textContent=lname.value;
    var td3=document.createElement('td');
    td3.textContent=age.value;
    var tr=document.createElement('tr')
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    var table=document.getElementById('table');
    table.appendChild(tr);

}