// Content script
var file = document.createElement('script')
file.setAttribute("type","text/javascript")
file.setAttribute("src", "https://simplewebrtc.com/latest-v2.js");
document.getElementsByTagName("head")[0].appendChild(file);