$('.tmoni-carousel').owlCarousel({
	center:true,
	items:1,
    loop:true,
	autoplay:true,
    responsive:{
		0:{
			items:1
		},
        600:{
            items:3
        },
		1000:{
			items:3
		}
    }
});
$('.gallery-carousel').owlCarousel({
	center:true,
	autoplay:true,
	items:1,
	loop:true,
	margin:20,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:5
		}
	}
});

function handleHide(){
	document.querySelector(".navbar-collapse").style.display = "none";
	document.querySelector(".navbar-toggler").style.display = "block";
	document.querySelector(".appointment-btn").style.display = "block";
}

function handleShow(){
	document.querySelector(".navbar-collapse").style.display = "block";
	document.querySelector(".navbar-toggler").style.display = "none";
	document.querySelector(".appointment-btn").style.display = "none";
}