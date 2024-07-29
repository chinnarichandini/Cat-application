let onbulb=document.getElementById("onbulb");
let imagecat=document.getElementById("imagecat");
let switchon=document.getElementById("switchon");
let a=document.getElementById("onbutton");
let b=document.getElementById("offbutton");
function onbutton1(){
   onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
   imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
   switchon.textContent="Switch-ON"
   switchon.style.color="red";
   a.style.backgroundColor="green";
   b.style.backgroundColor="#cbd2d9";
}
function offbutton1(){
    onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    switchon.textContent="Switch-OFF"
    switchon.style.color="red";
    a.style.backgroundColor="#cbd2d9";
    b.style.backgroundColor="red";
}
