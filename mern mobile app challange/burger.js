burger=false;

function burgermenu(){
    if(!burger){
        burger=true;
        document.getElementById("body").style.display="block"
        
    }
    else{
        burger=false;
        document.getElementById("body").style.display="none"

    }
}