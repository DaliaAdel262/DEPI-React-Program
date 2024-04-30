const btn = document.getElementById("buy");
btn.addEventListener("click",function(){
    const pop_up = document.getElementById("pop");
    console.log(5);
    pop_up.style.display = "block";
    document.getElementsByClassName("nav_container").classList.add("blurred");
    document.getElementsByClassName("content").classList.add("blurred");
})