document.querySelector(".toggle-bar").addEventListener('click',()=>{
    document.querySelector(".list").classList.toggle('active');
    document.querySelector(".fa-bars").classList.toggle('fa-xmark');
    
});




document.querySelector(".simple").addEventListener('click', () => {

    //pointing at the active element
    document.querySelector(".Feature-pointer").classList.add("simple-bookmark");

    document.querySelector(".Feature-pointer").classList.remove("speed-searching");
    document.querySelector(".Feature-pointer").classList.remove("easy-sharing");

    //Filtering the inside content
    document.querySelector(".src").src=`images/illustration-features-tab-1.svg`;
    document.querySelector(".f-title").innerHTML = "Bookmark in one click";
    document.querySelector(".constent-p").innerHTML ="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
});

document.querySelector(".speed").addEventListener('click', () => {
     //pointing at the active element
    document.querySelector(".Feature-pointer").classList.remove("simple-bookmark");

    document.querySelector(".Feature-pointer").classList.add("speed-searching");
    document.querySelector(".Feature-pointer").classList.remove("easy-sharing");



    document.querySelector(".src").src=`images/illustration-features-tab-2.svg`;
    document.querySelector(".f-title").innerHTML = "Intelligent search";
    document.querySelector(".constent-p").innerHTML =" Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
});

document.querySelector(".easy").addEventListener('click', () => {
 //pointing at the active element
    document.querySelector(".Feature-pointer").classList.remove("simple-bookmark");

    document.querySelector(".Feature-pointer").classList.remove("speed-searching");
    document.querySelector(".Feature-pointer").classList.add("easy-sharing");



    document.querySelector(".src").src=`images/illustration-features-tab-3.svg`;
    document.querySelector(".f-title").innerHTML = "Share your bookmarks";
    document.querySelector(".constent-p").innerHTML ="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
});




//FAQ Section Toggle
let faq_lists = document.querySelectorAll(".li");
let desc_lists = document.querySelectorAll(".desc");
let icon_lists = document.querySelectorAll(".fa-angle-down");

    faq_lists.forEach(e => {
        e.addEventListener('click', _ => {
            desc_lists.forEach(e => {
                e.classList.toggle("desc-active");
            })
            icon_lists.forEach(e => {
                e.classList.toggle("fa-angle-up");
            })
        })
    });
    

