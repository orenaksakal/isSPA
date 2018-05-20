//default state
chrome.browserAction.setBadgeText({text: 'none'});
chrome.browserAction.setBadgeBackgroundColor({color: 'gray'});

//Set listener for stateChange message
chrome.runtime.onMessage.addListener(function(request, sender) {
	//set badge for current tab
	if(/hash/i.test(request.type)){
		chrome.browserAction.setTitle({tabId: sender.tab.id, title: "Hash change"});
	} else {
		chrome.browserAction.setTitle({tabId: sender.tab.id, title: "History.state change"});
	}
	chrome.browserAction.setBadgeText({tabId: sender.tab.id, text: 'SPA'});
	chrome.browserAction.setBadgeBackgroundColor({tabId: sender.tab.id, color: 'red'});
	chrome.browserAction.setIcon({path: request.newIconPath, tabId: sender.tab.id,});
	});
