var input = Document.getElementById('inputbox');
var button = Document.getElementById('addbutton');
var list = Document.getElementById('list');

buttonEnter.addEventListener('click', clickBtn);
function clickBtn() {
    var add = document.createElement('li');
    add.innerHTML = inputbox.value;
    list.appenChild(add);
}

var cnt = 1;

function clickButton() {
var temp = document.createElement('li');
temp.setAttribute("class", "list-group-item");
temp.setAttribute("id", "li"+cnt);
temp.innerHTML = input.value;
temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>삭제</button>";
list.appendChild(temp);
cnt++;
}