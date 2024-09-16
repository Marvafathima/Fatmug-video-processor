const htmlData = '<div id="superplay" title="Play"><svg class="icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17.804 17.804" style="enable-background:new 0 0 17.804 17.804;" xml:space="preserve"><g><g id="c98_play"><path d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z"/></g><g id="Capa_1_78_"></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
+
'</div><div id="unlock" title="UnLock"><svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg></div>'
+
'<div id="speed-list"><p class="speed-item" data-speed="0.5">0.5x</p><p class="speed-item" data-speed="0.75">0.75x</p><p class="speed-item" data-speed="1" class="active">1x</p><p class="speed-item" data-speed="1.5">1.5x</p><p class="speed-item" data-speed="2">2x</p>'
+
'</div><div id="video-controls"><div class="progress"><span class="current-time">00/00</span><input class="seek" id="seek" value="0" min="0" type="range" step="1"><span class="total-time">00/00</span></div><div class="controls-main"><div class="controls-left"><div class="volume"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"/></svg>'
+
'</div><div class="volume"><input id="volumeSeek" value="1" type="range" max="1" min="0" step="0.01"></div></div></div><div id="center_p"><div class="icon" id="rew"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm-1.1 11h-.85v-3.26l-1.01.31v-.69l1.77-.63h.09V16zm4.28-1.76c0 .32-.03.6-.1.82s-.17.42-.29.57-.28.26-.45.33-.37.1-.59.1-.41-.03-.59-.1-.33-.18-.46-.33-.23-.34-.3-.57-.11-.5-.11-.82v-.74c0-.32.03-.6.1-.82s.17-.42.29-.57.28-.26.45-.33.37-.1.59-.1.41.03.59.1.33.18.46.33.23.34.3.57.11.5.11.82v.74zm-.85-.86c0-.19-.01-.35-.04-.48s-.07-.23-.12-.31-.11-.14-.19-.17-.16-.05-.25-.05-.18.02-.25.05-.14.09-.19.17-.09.18-.12.31-.04.29-.04.48v.97c0 .19.01.35.04.48s.07.24.12.32.11.14.19.17.16.05.25.05.18-.02.25-.05.14-.09.19-.17.09-.19.11-.32.04-.29.04-.48v-.97z"/></svg>'
+
'</div><div class="plybtn" id="play"><button class="player-btn toggle-play icon" title="Toggle Play"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17.804 17.804" style="enable-background:new 0 0 17.804 17.804;" xml:space="preserve"><g><g id="c98_play"><path d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z"/></g><g id="Capa_1_78_"></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></button></div><div class="icon" id="for"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M18,13c0,3.31-2.69,6-6,6s-6-2.69-6-6s2.69-6,6-6v4l5-5l-5-5v4c-4.42,0-8,3.58-8,8c0,4.42,3.58,8,8,8s8-3.58,8-8H18z"/><polygon points="10.9,16 10.9,11.73 10.81,11.73 9.04,12.36 9.04,13.05 10.05,12.74 10.05,16"/><path d="M14.32,11.78c-0.18-0.07-0.37-0.1-0.59-0.1s-0.41,0.03-0.59,0.1s-0.33,0.18-0.45,0.33s-0.23,0.34-0.29,0.57 s-0.1,0.5-0.1,0.82v0.74c0,0.32,0.04,0.6,0.11,0.82s0.17,0.42,0.3,0.57s0.28,0.26,0.46,0.33s0.37,0.1,0.59,0.1s0.41-0.03,0.59-0.1 s0.33-0.18,0.45-0.33s0.22-0.34,0.29-0.57s0.1-0.5,0.1-0.82V13.5c0-0.32-0.04-0.6-0.11-0.82s-0.17-0.42-0.3-0.57 S14.49,11.85,14.32,11.78z M14.33,14.35c0,0.19-0.01,0.35-0.04,0.48s-0.06,0.24-0.11,0.32s-0.11,0.14-0.19,0.17 s-0.16,0.05-0.25,0.05s-0.18-0.02-0.25-0.05s-0.14-0.09-0.19-0.17s-0.09-0.19-0.12-0.32s-0.04-0.29-0.04-0.48v-0.97 c0-0.19,0.01-0.35,0.04-0.48s0.06-0.23,0.12-0.31s0.11-0.14,0.19-0.17s0.16-0.05,0.25-0.05s0.18,0.02,0.25,0.05 s0.14,0.09,0.19,0.17s0.09,0.18,0.12,0.31s0.04,0.29,0.04,0.48V14.35z"/></g></g></svg>'
+
'</div></div><div class="controls-right"><div id="lock" title="Lock"><svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg></div><div id="speedbtn" title="Playback Speed"><svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z"/><path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"/></svg></div><div class="fullscreen" title="FullScreen"><svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>'
+
'</div></div></div></div>';
const video = document.querySelector('.xdPlayer');
video.insertAdjacentHTML("afterend", htmlData);

//ELEMENT SELECTORS
const player = document.querySelector('.xdContainer');
const fullscreenBtn = document.querySelector('.fullscreen'); 
const seek = document.getElementById('seek');
const speedbtn = document.getElementById('speedbtn');
const playButton = document.getElementById('play');
const playbackIcons = document.querySelectorAll('.playback-icons use');
const togglePlayBtn = document.querySelector('.toggle-play');
const speedBtns = document.querySelectorAll('.speed-item');
const volumeSeek = document.getElementById('volumeSeek');
const lock = document.getElementById('lock');
const unlock = document.getElementById('unlock');
const videocontrols = document.getElementById('video-controls');
const superplay = document.getElementById('superplay');
const rewbtn = document.getElementById('rew');
const forbtn = document.getElementById('for');


var textCurrent = document.querySelector('.current-time');
var duration = document.querySelector('.total-time');
var speedlist = document.querySelector('#speed-list');


//GLOBAL VARS
let lastVolume = 1;
let isMouseDown = false;
let isSpeedSheet = false;
let isMax = false;
let selectedLanguage = '';
let searchResults = [];
//PLAYER FUNCTIONS





// Play/Pause Function
function togglePlay() {

	// For Firest Play Btn
	if(superplay.style.display != 'none'){
		superplay.style.display = 'none';
	}

	if (video.paused || video.ended) {
	  video.play();
	} 
	else {
	  video.pause();
	}

  }

  // Function For Time Making
  function neatTime(time) {
  let minutes = Math.floor((time % 3600)/60);
  let seconds = Math.floor(time % 60);
	seconds = seconds>9?seconds:`0${seconds}`;
	return `${minutes}:${seconds}`;
}

// Function For Makeing Seconds Into Minutes formet
function formatTime(timeInSeconds) {
	const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
  
	return {
	  minutes: result.substr(3, 2),
	  seconds: result.substr(6, 2),
	};
  };

// Play Button Image Update
  function updatePlayButton() {

	if (video.paused) {
		togglePlayBtn.innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		viewBox="0 0 17.804 17.804" style="enable-background:new 0 0 17.804 17.804;" xml:space="preserve"><g><g id="c98_play"><path d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313
			   c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04
			   c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z"/></g><g id="Capa_1_78_"></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
   `;  
	  } else {
		togglePlayBtn.innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		viewBox="0 0 47.607 47.607" style="enable-background:new 0 0 47.607 47.607;" xml:space="preserve"><g><path d="M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0
		   l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/><path d="M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631
		   C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
   `;
	  }

  }


  // Updateing Seekbar
  function updateProgress() {
	seek.value = Math.floor(video.currentTime);
	textCurrent.innerHTML = `${neatTime(video.currentTime)}`;
	// isMax Is For Set Max For Seekbar Only 1 Time
	if(isMax){

	}
	else{
		const time = formatTime(Math.round(video.duration))
		duration.innerHTML = `${time.minutes}:${time.seconds}`;
		seek.setAttribute('max', Math.round(video.duration));
		console.log(video.lenth);
		isMax = true;
	}
  }

  // Function For Change Volume 
  function changevolume(){
	if (video.muted) {
		video.muted = false;
	  }
	  video.volume = volumeSeek.value;
	}

	// Function For Skip Video By Seekbar
  function skipAhead(event) {
	const skipTo = event.target.dataset.seek
	  ? event.target.dataset.seek
	  : event.target.value;
	video.currentTime = skipTo;
	seek.value = skipTo;
  }
  
//Function For Fullscreen
function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

var fullscreen = false;
function toggleFullscreen() {
	fullscreen? exitFullscreen() : launchIntoFullscreen(player)
	fullscreen = !fullscreen;
}

// function For Playback Speed
function setSpeed(e) {
	console.log(parseFloat(this.dataset.speed));
	video.playbackRate = this.dataset.speed;
	speedBtns.forEach(speedBtn =>	speedBtn.classList.remove('active'));
	this.classList.add('active');
}

function showSpeedSheet(){
	if(isSpeedSheet){
		speedlist.style.display = 'none';
		isSpeedSheet = false;
	}
	else{
		speedlist.style.display = 'block';
		isSpeedSheet = true;
	}
}

// Keyboard Controll
function handleKeypress(e) {
	switch (e.key) {
		case 'p':
			togglePlay();
			break;
		  case 'm':
			  volumeSeek.value = 0;
			video.volume = volumeSeek.value;
			break;
		  case 'f':
			toggleFullscreen();
			break;
		  case 's':
			showSpeedSheet();
			break;
		  case 'p':
			togglePip();
			break;
		}
}

// Functions For Lock & UnLock
function lockControls(){
	unlock.style.display = 'block';
	videocontrols.style.opacity = '0';
}
function unLockControls(){
	unlock.style.display = 'none';
	videocontrols.style.opacity = '.9';
}

function createLanguageDropdown(languages) {
    const dropdown = document.createElement('select');
    dropdown.id = 'language-select';
    languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = lang;
        dropdown.appendChild(option);
    });
    dropdown.addEventListener('change', (e) => {
        selectedLanguage = e.target.value;
        console.log(selectedLanguage, "this is the selected language");
    });
    const languageContainer = document.getElementById('language-container');
    languageContainer.appendChild(dropdown);
}

function createSearchInput(videoId) {
    const searchContainer = document.getElementById('search-container');
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'search-input';
    searchInput.placeholder = 'Search subtitles...';
    
    const searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    searchButton.addEventListener('click', () => performSearch(videoId));
    
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);
}

function performSearch(videoId) {
    const keyword = document.getElementById('search-input').value;
    if (!selectedLanguage || !keyword) {
        alert('Please select a language and enter a search term.');
        return;
    }
    
    fetch(`search-subtitles/?language=${selectedLanguage}&keyword=${keyword}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('An error occurred while searching.');
            }
            return response.json();
        })
        .then(data => {
            if (data.message) {
                console.log(data.message);
                alert(data.message);
                return;
            }
            searchResults = data;
            displaySearchResults();
        })
        .catch(error => {
            console.error('Error:', error);
            alert("An error occurred while searching. Please try again.");
        });
}

function displaySearchResults() {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (!searchResults.length) {
        resultsContainer.textContent = 'No results found.';
        return;
    }

    searchResults.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.textContent = `${neatTime(result.start)} - ${result.text}`;
        
        resultItem.addEventListener('click', () => {
            const video = document.querySelector('.xdPlayer');
            video.currentTime = result.start;
            video.play();
        });

        resultsContainer.appendChild(resultItem);
    });
}




//EVENT LISTENERS
playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('ended', togglePlay);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);
superplay.addEventListener('click', function(){
	superplay.style.display = 'none';
	togglePlay();
})

seek.addEventListener('input', skipAhead);
volumeSeek.addEventListener('input', changevolume);
lock.addEventListener('click', lockControls);
unlock.addEventListener('click', unLockControls);
rewbtn.addEventListener('click', function(){
	let skip = video.currentTime - 10;
	video.currentTime = skip;
	seek.value = skip;
});
forbtn.addEventListener('click', function(){
	let skip = video.currentTime + 10;
	video.currentTime = skip;
	seek.value = skip;
});


window.addEventListener('mousedown', () => isMouseDown = true)
window.addEventListener('mouseup', () => isMouseDown = false)

fullscreenBtn.addEventListener('click', toggleFullscreen);
speedbtn.addEventListener('click', showSpeedSheet);

speedBtns.forEach(speedBtn => {
	speedBtn.addEventListener('click', setSpeed);
});

window.addEventListener('keyup', handleKeypress);

	function initializePlayer(languages,videoId) {
		createLanguageDropdown(languages);
		createSearchInput(videoId);
		
	
	}
	
	