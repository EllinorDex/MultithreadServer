document.addEventListener("DOMContentLoaded",
function(){
	
	
	
var btn = document.getElementById('full-version');
    	var viewport = document.querySelector("meta[name=viewport]");
    	if(localStorage.getItem('isFullVersion')=="yes")
    	{
			viewport.setAttribute('content', 'width=1280');
    		btn.innerHTML= "Мобильный вид";
    	}
    	
		btn.addEventListener('click', function() {
			if(localStorage.getItem('isFullVersion')=="yes")
			{
				localStorage.setItem('isFullVersion', 'no');
				viewport.setAttribute('content', 'width=device-width, initial-scale=1');
				btn.innerHTML= "Полная версия";
			}
			else {
				localStorage.setItem('isFullVersion', 'yes');
				viewport.setAttribute('content', 'width=1280');
				btn.innerHTML= "Мобильный вид";
			}
		});
})	
var start_pos = 0;
var sidebar_first = document.querySelectorAll(".site-sidebar-r");
    start_pos=sidebar_first[0].getBoundingClientRect();
window.onscroll = function(){
        var t = document.documentElement.scrollTop || document.body.scrollTop; 
        var sidebar =     document.querySelectorAll(".site-sidebar-r");
        var sidebarmenu = document.querySelectorAll(".widget-cat .item-new");
        var mainbox =     document.querySelectorAll(".site-cont");
        var pos = mainbox[0].getBoundingClientRect();

        
        if ( window.pageYOffset > 330 ) {
	        sidebar[0].classList.add("sidebar-fixed");
	        sidebar[0].style.left = start_pos.x + "px";
	    } else {
	        sidebar[0].classList.remove("sidebar-fixed");
	        sidebar[0].style.left = 0 + "px";
	    }
	    
	    if ( window.pageYOffset > 2350 && screen.width>1024) {
	    	sidebarmenu[0].style.left = pos.left - 220 + "px";
	        sidebarmenu[0].classList.add("fixbox");
	    } else {
	        sidebarmenu[0].classList.remove("fixbox");
	        sidebarmenu[0].style.left = 0 + "px";
	    }
	    
	    if(screen.width>1280)
	    {
			
			
		}
}