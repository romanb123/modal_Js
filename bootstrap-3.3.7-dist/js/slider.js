
function geturl() {
    var newurl = document.getElementById('inside').value;
    var fatherofdiv = document.getElementById('fatherc');
    var childdiv = document.createElement('div');
    childdiv.setAttribute("class","item")
    var newpic = document.createElement("img");
    var pic2=document.createElement("img");
    console.log(pic2);
    pic2.setAttribute("src", newurl); 
    pic2.setAttribute("width", "150px"); 
    newpic.setAttribute("src", newurl); 
    newpic.style.height='300px';
    newpic.setAttribute("width","100%");
    
   childdiv.appendChild(newpic);
    document.getElementById("fatherc").appendChild(childdiv);
    document.getElementById("gallery").appendChild(pic2);
}
