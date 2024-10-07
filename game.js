window.onload = pageLoad;

function pageLoad(){
	var startButton = document.getElementById("start");
    startButton.onclick = startGame;

}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById("clock");
	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK);
	
	function timeCount(){
		second--;  // Decrease time by 1 second
        x.textContent = second;  // Display time in the clock element

        var allbox = document.querySelectorAll("#layer div");

        // Check if there are still boxes left
        if (allbox.length == 0 && second > 0) {
            alert("You win!");
            clearInterval(timer);  // Stop the timer
            clearScreen();  // Clear the screen
        } else if (second <= 0) {
            alert("Game over");
            clearInterval(timer);  // Stop the timer
            clearScreen();  // Clear the screen
        }
    }
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("layer") ;
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i < numbox; i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square " + colorDrop;
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box); 
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#layer div");

	//delete all  div
	for (var i=0;i < allbox.length; i++){
		allbox[i].parentNode.removeChild(allbox[i]);  
	}
}




