
var videoElement = document.createElement('video');

videoElement.setAttribute('controls', true);  
videoElement.setAttribute('width', '600');    
videoElement.setAttribute('height', '400');   
videoElement.setAttribute('src', 'video.mp4'); 


videoElement.innerHTML = 'Your browser does not support the video tag.'
document.getElementById('video-container').appendChild(videoElement);