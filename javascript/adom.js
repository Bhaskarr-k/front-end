const parent = document.getElementById("parent").addEventListener('click', function(){
    console.log("parent Clicked")
},true);

const child = document.getElementById("child").addEventListener('click', function(event){
    console.log("parent Clicked");
    event.stopPropagation();
},true);