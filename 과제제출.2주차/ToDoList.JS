const inputbox = Document.querySelector('inputbox');
const enterbtn = Document.querySelector('buttonEnter');
const ToDoList = Document.querySelector('list');
const select = Document.querySelector('selectAll');
const unselect = Document.querySelector('unselectAll');
const delete = Document.querySelector('deleteCheck');

enterbtn.addEventListener('click', addToDoList);
select.addEventListener('click', checkAll);
unselect.addEventListener('click', uncheckAll);
delete.addEventListener('click', removeCheck);

//입력키로 리스트추가
function addToDoList() {
    const newToDoList = document.createElement('li');
    newToDoList.className = 'd-flex justify-content-between';
    newToDoList.innerHTML = `<span id="checkboxcontent"><input type="checkbox" name="checkbox"><input type="text" value="${inputbox.value}" readOnly></input></span>`;
    newToDoList.innerHTML += '<span id="save"><input type="button" name="buttonmodify" value="수정" onclick="readOnlyFalse(this)"><input type="button" name="buttonsave" value="저장" onclick="readOnlyTrue(this)"></span>`;
    
    if (inputbox.value === '') {
        alert('할 일을 입력하세요')
    }   else {
            ToDoList.appendChild(newToDoList);
            inputbox.value = '';
        }  
}

//Enter키로 리스트추가
function addToDoListByEnterBtn() {
    const newToDoList = document.createElement('li');
    newToDoList.className = 'd-flex justify-content-between';
    newToDoList.innerHTML = `<span id="checkboxcontent"><input type="checkbox" name="checkbox"><input type="text" value="${inputbox.value}" readOnly></input></span>`;
    newToDoList.innerHTML += `<span id="save"><input type="button" name="buttonmodify" value="수정" onclick="readOnlyFalse(this)"><input type="button" name="buttonsave" value="저장" onclick="readOnlyTrue(this)"></span>`;

    if (window.event.keyCode == 13) {
        if (inputbox.value === '') {
            alert('할 일을 입력하세요')
        } else{
            ToDoList.appendChild(newToDoList);
            inputbox.value = '';   
        }
    }
}


function removeCheck() {
    const checkbox = document.querySelectorAll('input[type=checkbox]'); // input
    for (i =0; i<checkbox.length; i++) {
        if (checkbox[i].checked==true) {
            checkbox[i].parentElement.parentElement.remove();
        }
    }
}

function readOnlyFalse(e){
    e.parentNode.previousSibling.lastChild.readOnly=false;
}

function readOnlyTrue(e){
    e.parentNode.previousSibling.lastChild.readOnly=true;
}

function checkAll() {
    const checkboxes = document.getElementsByName('checkbox');
    if(checkboxes.checked == false){
        for(var i=0;i<checkboxes.length; i++){
            checkboxes[i].checked = false;
        } 
    }   else {
            for(var i=0;i<checkboxes.length; i++){
                checkboxes[i].checked = true;
            }
        }
}

function uncheckAll() {
    const checkboxes = document.getElementsByName('checkbox');
    if(checkboxes.checked == true){
        for(var i=0;i<checkboxes.length; i++){
            checkboxes[i].checked = true;
        } 
    }   else {
            for(var i=0;i<checkboxes.length; i++){
                checkboxes[i].checked = false;
            }
        }       
}