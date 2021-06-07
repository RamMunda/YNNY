$(document).ready(function() { 
	
    if(window.innerWidth > 768){
	$('.banner').ripples({
			resolution: 512,
			dropRadius: 20, 
			perturbance: 0.04,
		});              
     }
	 if(window.innerWidth < 769){
		$('.banner').ripples({
				resolution: 256,
				dropRadius: 10, 
				perturbance: 0.01,
			}); 
		}
		if(window.innerWidth > 768){
			$('.overlay_layout').ripples({
					resolution: 512,
					dropRadius: 20, 
					perturbance: 0.04,
				});              
			 }
			 if(window.innerWidth < 769){
				$('.overlay_layout').ripples({
						resolution: 256,
						dropRadius: 10, 
						perturbance: 0.01,
					}); 
				}

  $(document).mousemove(function(e){
	 $(".cursorfirst").css({"left" : e.pageX + "px", "top": e.pageY + "px"});
	 $(".cursorsec").css({"left" : e.pageX + "px", "top": e.pageY + "px"});
   });
  
});

var selectedButton = document.querySelector('.custom-hamburger');
var selectedDiv = document.querySelector('.overlay_layout');
var selectedId = document.getElementById('overlay_layout');
selectedButton.addEventListener('click',function(){
    console.log('clicked......');
    selectedDiv.classList.add('addedclass');
})

selectedId.addEventListener('click',function(){
    console.log('clicked......');
    selectedDiv.classList.remove('addedclass');
})

