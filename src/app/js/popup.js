// Popup script
console.log('sdf1');
var webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    // the id/element dom element that will hold remote videos
    // immediately ask for camera access
    media:{ audio: true },
    autoRequestMedia: true
});
console.log('sdf');
webrtc.on('readyToCall', function () {
	console.log('sdfsdf1');
    webrtc.joinRoom('sdf');
});