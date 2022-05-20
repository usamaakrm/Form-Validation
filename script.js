function validateform(){
    var name=document.myform.name.value;
    var password=document.myform.password.value;

    if(name.length <8 || name == ""){
        alert("username must have 6 character.");
        return false;
    }
    else if(password.length<8){
        alert("Password must be at least 8 character long");
        document.write.innerHTML="hello";
        return false;
    }
    else{
        alert("Successfully login");
    }
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '100px',
    duration: 1200,
    delay: 200,
    interval : 100,
    reset: true 
})
sr.reveal(`h1 h4`,{delay: 600, origin: 'top'})
sr.reveal(`.icons`,{origin: 'bottom', interval: 100})
