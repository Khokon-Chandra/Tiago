var colups = true;
document.querySelector(".fa-bars").addEventListener('click',function(event){
	
	if(colups){
		colups = false;
		document.querySelector(".large-device").setAttribute("style","height:auto;transition:0.2s")
	}else{
		colups = true;
		document.querySelector(".large-device").setAttribute("style","height:0;transition:0.2s")
	}
});