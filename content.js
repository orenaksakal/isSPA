// append history.js (monkey patchings) to dom
var script = document.createElement('script');
script.src = chrome.extension.getURL('history.js');
(document.head || document.documentElement).appendChild(script);

//capture history.state changes and send message with icon path and type of the change
function sendMessage(type) {
	chrome.runtime.sendMessage({'newIconPath': '/img/icon-single.png', 'type': type});
}

window.addEventListener('hashChange', function() {sendMessage('hashChange');});
window.addEventListener('stateChange', function() {sendMessage('stateChange');});
