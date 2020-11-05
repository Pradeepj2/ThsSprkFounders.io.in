var table = document.getElementById("all")
var container = document.getElementById("contain")
var btn1 = document.getElementById("hom")
var btn2 = document.getElementById("custom")
var transfer = document.getElementById("Quick")
var inputs = document.querySelectorAll("input")
var currentVal = 10;
var heading = document.getElementById("quick")

btn1.addEventListener("click",function(){
    container.classList.remove("all1")
    heading.classList.remove("all1")
    table.classList.add("all1")
})
btn2.addEventListener("click",function(){
    container.classList.add("all1")
    heading.classList.add("all1")
    table.classList.remove("all1")
})
     var row=11
    transfer.addEventListener("click",function(){
        var table = document.getElementById("all")
        var name=document.getElementById("name").value;
        var Email=document.getElementById("Email").value;
        var Amount=document.getElementById("Amount").value;
          if(!name || !Email || !Amount){
              alert("Please Enter Complete Data")
          }
          else{  
        var newRow = table.insertRow(row);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);

        cell1.innerHTML = currentVal+1
         cell2.innerHTML = name;
        cell3.innerHTML = Email;
        cell4.innerHTML = Amount;
        cell5.innerHTML = "success"
        row++;
        currentVal++;

        alert("Transaction Success Full")

        inputs.forEach(input => input.value = "")

          }

    })

    
