(function(){

let countervalue = 0;
const buttons = document.querySelectorAll(".counterBtn");
const counter = document.getElementById("counter");
buttons.forEach(function(btn){
btn.addEventListener("click",function(event){

	//element that we click
	const value = event.target;
	//console.log(value);

	if(value.classList.contains('prevBtn')){
		countervalue--;
	}
	else if(value.classList.contains("nextBtn")){
		countervalue++;

	}
	counter.textContent = countervalue;

	//change color
	if(countervalue === 0)
	{
		counter.style.color = "#333333";
	}
	else if(countervalue < 0)
	{
		counter.style.color = "#F6511d";	
	}
	else if(countervalue > 0){
		counter.style.color = "#7fb800";
	}
});
});

})();