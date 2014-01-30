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
		document.getElementById('clanSelect').onchange = function() { Step1(); };
	};

	if (document.getElementById('Step2')) {
		phys = document.getElementsByClassName("phy");
		for (i=0,max = document.getElementsByClassName("phy").length;i<max;i++) {
			phys[i].onclick = function() { 
				leftBlocker.remove();
				dotCounter.style.left = 170;
				dotCounter.style.top = 260;
				dotCounter.style.display = "block";
				for (i=0,max = document.getElementsByClassName("phy").length;i<max;i++) {
					phys[i].style.display = "none";
				};
			};
		};
		
		soci = document.getElementsByClassName("soc");
		for (i=0,max = document.getElementsByClassName("soc").length;i<max;i++) {
			soci[i].onclick = function() { 
				centerBlocker.remove();
				dotCounter.style.left = 475;
				dotCounter.style.top = 260;
				dotCounter.style.display = "block";
				for (i=0,max = document.getElementsByClassName("soc").length;i<max;i++) {
					soci[i].style.display = "none";
				};
			};
		};
		
		ment = document.getElementsByClassName("men");
		for (i=0,max = document.getElementsByClassName("men").length;i<max;i++) {
			ment[i].onclick = function() { 
				rightBlocker.remove();
				dotCounter.style.left = 785;
				dotCounter.style.top = 260;
				dotCounter.style.display = "block";
				for (i=0,max = document.getElementsByClassName("men").length;i<max;i++) {
					ment[i].style.display = "none";
				};
			};
		};
	
	};
	
	if (document.getElementById('Step5')) {
		tale = document.getElementsByClassName("tal");
		for (i=0,max = document.getElementsByClassName("tal").length;i<max;i++) {
			tale[i].onclick = function() { 
				leftBlocker.remove();
				dotCounter.style.left = 150;
				dotCounter.style.top = 390;
				dotCounter.style.display = "block";
				for (i=0,max = document.getElementsByClassName("tal").length;i<max;i++) {
					tale[i].style.display = "none";
				};
			};
		};
		
		skil = document.getElementsByClassName("ski");
		for (i=0,max = document.getElementsByClassName("ski").length;i<max;i++) {
			skil[i].onclick = function() { 
				centerBlocker.remove();
				dotCounter.style.left = 460;
				dotCounter.style.top = 390;
				dotCounter.style.display = "block";
				for (i=0,max = document.getElementsByClassName("ski").length;i<max;i++) {
					skil[i].style.display = "none";
				};
			};
		};
		
		know = document.getElementsByClassName("kno");
		for (i=0,max = document.getElementsByClassName("kno").length;i<max;i++) {
			know[i].onclick = function() { 
				rightBlocker.remove();
				dotCounter.style.left = 775;
				dotCounter.style.top = 390;
				dotCounter.style.display = "block";
				for (i=0,max = document.getElementsByClassName("kno").length;i<max;i++) {
					know[i].style.display = "none";
				};
			};
		};
	
	};

	if (document.getElementsByClassName("dot").length >= 255) {
		allDots = document.getElementsByClassName("dot");
		for (i=0,max = document.getElementsByClassName("dot").length;i<max;i++) {
			allDots[i].onclick = function() { 
				if (this.checked) {
					decrementCounter();
				} else {
					incrementCounter();
				};
			};
		};
	};

});
