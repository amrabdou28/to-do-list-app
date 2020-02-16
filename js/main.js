const addbutton = document.querySelector('.addbutton');
var inputvalue = document.querySelector('.container');
const container = document.querySelector('container');

class item{
    constructor(itemName){
        //crite div items
       this.creatediv(itemName);
}

    creatediv(itemName){
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classlist.add('item_input');
    input.Type = "text";
    
    
    let itemBox = document.createElement('div');
    itemBox,classlist.add('item');
    
    let donebutton = document.createElement('button');
    donebutton.innerHTML = "done"
    donebutton.classlist.add('donebutton');
    
     let removebutton = document.createElement('button');
    removebutton.innerHTML = "remove"
    removebutton.classslist.add('removebutton');
    
    
    container.appendChild(itemBox);
    
    itemBox.appendChild(input);
    itemBox.appendChild(donebutton);
    itemBox.appendChild(removebutton);
     
    donebutton.addEventListener('click', () => this.done(input));
    removebutton.addEventListener('click', () => this.remove(itembox));
    
}

done(input){
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

addbutton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
    
})



