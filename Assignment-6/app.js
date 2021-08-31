const input = document.querySelector('input');
const ul = document.querySelector('ul');
let arr = [];

input.addEventListener('keyup',(e)=>{
    add(e.keyCode);
});

function add(e){

    if(e == 13){
        arr.push(input.value)
        input.value = "";
    }
    print();

}

function print(){

    ul.innerHTML = "";

    for(var i=0; i<arr.length; i++){

        var item = arr[i];
        var li = document.createElement("li");
        li.value = i;

        li.innerHTML=`
            <div class="container">
            <div class="outer_div">
                <div class="list_item">
                    <span> ${item}</span>
                </div>
                <div class="list_icon">
                    <button onclick="edit(${i})" ><i class="fas fa-edit"></i></button>
                    <button onclick="trash(${i})" ><i class="fas fa-trash-alt"></i></button>
                    <button onclick="up(${i})" ><i class="fas fa-arrow-up"></i></button>
                    <button onclick="down(${i})" ><i class="fas fa-arrow-down"></i></button>
                </div>
            </div>
        </div>
        `;

        ul.appendChild(li);
    }
}
function edit(e){

    var person = prompt("Please enter new value", `${arr[e]}`);
    if (person != null) {
        arr[e] = person;
        print();
    }
}
function trash(e){

    if(e == arr.length){
        arr.pop();
    }
    else{
        arr.splice(e,1);
    }
    print();  
}
function up(e){

    if(e>0){

        var temp = arr[e];
        arr[e] = arr[e - 1];
        arr[e - 1] = temp;
        print();
    }
    
}
function down(e){
    if(e<arr.length-1){
        var temp = arr[e];
        arr[e] = arr[e + 1];
        arr[e + 1] = temp;
        print();
    }
}