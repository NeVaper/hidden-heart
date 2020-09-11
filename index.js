document.getElementById("back-button").hidden=true 

document.getElementById("show-heart-button").onclick=function() { 
    document.getElementById("heart-img").style.visibility="visible"
    document.getElementById("back-button").hidden=false
    document.getElementById("show-heart-button").hidden=true
} 

document.getElementById("back-button").onclick=function() { 
    document.getElementById("show-heart-button").hidden=false
    document.getElementById("heart-img").style.visibility="hidden"
    document.getElementById("back-button").hidden=true
}
