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