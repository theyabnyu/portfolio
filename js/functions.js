function randombor(){
    let x=0;
    setInterval(function(){
        x++;
        if(x%2==0){
            document.getElementById("sideimg").style.borderTop="none";
            document.getElementById("sideimg").style.borderRight="10px solid #3a7bd5";
            document.getElementById("sideimg").style.borderBottom="none";
            document.getElementById("sideimg").style.borderLeft="10px solid #3a7bd5";
        }
        else{
            document.getElementById("sideimg").style.borderTop="10px solid #3a7bd5";
            document.getElementById("sideimg").style.borderRight="none";
            document.getElementById("sideimg").style.borderBottom="10px solid #3a7bd5";
            document.getElementById("sideimg").style.borderLeft="none";
        }
    },1000)
}