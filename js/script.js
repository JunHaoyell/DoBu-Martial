function adminvalidation(){
var password = 12345678;
var gettxtvalue = document.getElementById("admin-pass").value;

while(true){
    if (gettxtvalue == password){
        window.open("../htmls/administration.html");
        break;
    }
    else{
        alert('Please Enter correct passwords...');
        break;
    }
}
 
}
