function add(){
    var input = document.getElementById("input");
    var ul = document.getElementById("list");
    var liEle = document.createElement("li" );
    var liText = document.createTextNode(input.value);
    liEle.appendChild(liText);
    ul.appendChild(liEle);
    input.value = "";
}

function del(){
    var ul = document.getElementById("list");
    ul.innerHTML = "";
}