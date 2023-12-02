//get li
let lists = Array.from(document.querySelectorAll(".features ul li"));
let containers = Array.from(document.querySelectorAll(".features .container-img"));

let listsCount = lists.length;


//get the currelnt li
let currentList = 1;
// burgar icon toggle
document.querySelector(".toggle-bar").addEventListener('click',()=>{
    document.querySelector(".list").classList.toggle('active');
    document.querySelector(".fa-bars").classList.toggle('fa-xmark');
    
});



//Set li an index attribute
for(let i=0;i<listsCount;i++){
    lists[i].setAttribute('data-index',i+1)
}

//Trigger the checker function
Checker();

lists.forEach(function(el){
    el.onclick = function(){
        currentList = parseInt(this.getAttribute('data-index'));
        Checker()
    }
})
//Checker function
function Checker(){
    Remove();
    containers[currentList -1].classList.add("divactive")
}

//Remove all clasess
function Remove(){
    containers.forEach(function(el){
        el.classList.remove("divactive");
    })
}

//FAQ Section Toggle
let faq_lists = document.querySelectorAll(".li");
let desc_lists = document.querySelectorAll(".desc");
let icon_lists = document.querySelectorAll(".fa-angle-down");

    faq_lists.forEach(e => {
        e.addEventListener('click', _ => {

                e.classList.toggle("desc-active");


                e.classList.toggle("fa-angle-up");
        })
    });
    

