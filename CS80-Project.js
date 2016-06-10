var show = '';
var episodes = 0;
var minutes = 0;

var totalTime = 0;
var totalHours = 0;
var minutesRemainder = 0;


var addTime = function(){
	show = show + document.getElementById('showTitle').value + "<br>";
	if(document.getElementById('numOfEpisodes').value === ''){
		episodes = 0;
	} else {
		episodes = parseInt(document.getElementById("numOfEpisodes").value);
	}
	if(document.getElementById('minPerEpisode').value === ''){
		minutes = 0;
	} else {
		minutes = parseInt(document.getElementById('minPerEpisode').value);
	}

	document.getElementById('listDisplay').innerHTML = show;
	calculateTime(episodes, minutes);
	clearFields();
	updateComments();
}


var calculateTime = function(episodeCount, minuteCount){
	totalTime += episodes * minutes;
	if(totalTime < 60){
		document.getElementById('timeDisplay').innerHTML = totalTime + ' minutes';
	} else {
		totalHours = Math.floor(totalTime/60);
		minutesRemainder = totalTime%60;
		if(totalHours === 1){
		document.getElementById('timeDisplay').innerHTML = totalHours + ' hour and ' + minutesRemainder + ' minutes';
			
		} else {
			document.getElementById('timeDisplay').innerHTML = totalHours + ' hours and ' + minutesRemainder + ' minutes';
		}
	}
}


var clearFields = function(){
	document.getElementById('showTitle').value = '';
	document.getElementById('numOfEpisodes').value = '';
	document.getElementById('minPerEpisode').value = '';
}


var resetList = function(){
	show = '';
	episodes = 0;
	minutes = 0;
	totalTime = 0;
	document.getElementById('listDisplay').innerHTML = show;
	document.getElementById('timeDisplay').innerHTML = '';
	document.getElementById('commentDisplay').innerHTML = '';
}


var updateComments = function(){
	if(totalTime < 30){
		document.getElementById('commentDisplay').innerHTML = 'You haven\'t watched much TV, have you?';
		document.getElementById('commentDisplay').style.color = 'red';
	}
	else if (totalTime < 60)
		document.getElementById('commentDisplay').innerHTML = 'That\'s one episode of a drama... WITH COMMERCIALS!';
	else if (totalTime < 250)
		document.getElementById('commentDisplay').innerHTML = 'Have you ever completed an entire show?';
	else if (totalTime < 1000)
		document.getElementById('commentDisplay').innerHTML = 'It\'s always nice to meet an amateur couch potato';
	else if (totalTime < 2500)
		document.getElementById('commentDisplay').innerHTML = 'Nice! Onto the next episode!';
	else if (totalTime < 5000)
		document.getElementById('commentDisplay').innerHTML = 'Have you considered becoming a TV critic?';
	else if (totalTime < 10000)
		document.getElementById('commentDisplay').innerHTML = 'You\'ve almost spent about a weeks worth of your life on television';	
	else if (totalTime < 40000)
		document.getElementById('commentDisplay').innerHTML = 'A month of your life in front of the tube. Well worth it?';
	else if (totalTime < 100000)
		document.getElementById('commentDisplay').innerHTML = 'Who do you think you are? ME?!';
}