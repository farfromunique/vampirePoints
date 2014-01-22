var flown;
document.addEventListener('DOMContentLoaded',function() {
	var i;
    var gotos;
	
	flyoutOnRight();
	
	window.onresize = function() { 
		flyoutOnRight();
		if (flown) {
			flyin();
		} else {
			flyout();
		};
	};
	
    if (document.getElementById('charSheet')) {
		document.getElementById('charSheet').onclick = function() { flyin(); };
    };
	
	if (document.getElementById('phases')) {
		document.getElementById('phases').onclick = function() { flyout(); };
    };

	if (document.getElementById('clanSelect')) {
		document.getElementById('clanSelect').onchange = function() { correctForClan(); };
	};

	if (document.getElementById('Step2')) {
		phys = document.getElementsByClassName("phy");
		for (i=0,max = document.getElementsByClassName("phy").length;i<max;i++) {
			phys[i].onclick = function() { 
				leftBlocker.style.display = "none";
				dotCounter.style.left = 150;
				dotCounter.style.top = 220;
				dotCounter.style.display = "block";
				for (i=0,max = document.getElementsByClassName("phy").length;i<max;i++) {
					phys[i].style.display = "none";
				};
			};
		};
		
		soci = document.getElementsByClassName("soc");
		for (i=0,max = document.getElementsByClassName("soc").length;i<max;i++) {
			soci[i].onclick = function() { 
				centerBlocker.style.display = "none";
				dotCounter.style.left = 480;
				dotCounter.style.top = 220;
				dotCounter.style.display = "block";
				for (i=0,max = document.getElementsByClassName("soc").length;i<max;i++) {
					soci[i].style.display = "none";
				};
			};
		};
		
		ment = document.getElementsByClassName("men");
		for (i=0,max = document.getElementsByClassName("men").length;i<max;i++) {
			ment[i].onclick = function() { 
				rightBlocker.style.display = "none";
				dotCounter.style.left = 800;
				dotCounter.style.top = 220;
				dotCounter.style.display = "block";
				for (i=0,max = document.getElementsByClassName("men").length;i<max;i++) {
					ment[i].style.display = "none";
				};
			};
		};
	
	};

	if (document.getElementsByClassName("dot").length >= 255) {
		allDots = document.getElementsByClassName("dot");
		for (i=0,max = document.getElementsByClassName("dot").length;i<max;i++) {
			allDots[i].onclick = function() { decrementCounter(); };
		};
	};

});
