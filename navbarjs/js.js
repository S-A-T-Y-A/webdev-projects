



    function satya(){
        console.log("satya");
        const burger=document.querySelector(".burger"); 
        const navlinks=document.querySelectorAll('.nav-links li');
        const navbar=document.querySelector(".nav-links");
        navbar.classList.toggle("nav-links-active");
        navlinks.forEach((link,index)=>{
            // console.log(index);
            link.style.animation='navlinkfade 1s ease forwards';
            // console.log(index/7);
        })
    
    
}





