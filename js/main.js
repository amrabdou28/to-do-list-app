const addButton = document.querySelector('.addbutton');
var input = document.querySelector('.input ');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        //crite div items
       this.creatediv(itemName);
}

    creatediv(itemName){
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classList.add('item_input');
    input.Type = "text";
    
    
    let itemBox = document.createElement('div');
    itemBox,classlist.add('item');
    
    let editButton = document.createElement('button');
    editbutton.innerHTML = "edit"
    editbutton.classList.add('editbutton');
    
    let removeButton = document.createElement('button');
    removebutton.innerHTML = "remove"
    removebutton.classList.add('removebutton');
    
    
    container.appendChild(itemBox);
    
    itemBox.appendChild(input);
    itemBox.appendChild(editbutton);
    itemBox.appendChild(removebutton);
     
    editbutton.addEventListener('click', () => this.edit(input));
    removebutton.addEventListener('click', () => this.remove(itembox));
    
}

edit(input){
    input.disabled = !input.disabled;
    
}
remove(item){
    container.removeChild(item);
    
}
 
} 
function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
        
    }    
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
    
})