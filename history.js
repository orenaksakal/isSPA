//monkey-patching pushState
(function(history){
	var pushState = history.pushState;

	history.pushState = function(state) {
		if (typeof history.onpushstate === "function") {
			history.onpushstate({state: state});
		}
		return pushState.apply(history, arguments);
	};
})(window.history);

//monkey-patching for replaceState
(function(history){
	var replaceState = history.replaceState;
	history.replaceState = function(state) {
		if (typeof history.onreplacestate === "function") {
			history.onreplacestate({state: state});
		}
		return replaceState.apply(history, arguments);
	};
})(window.history);

// raise stateChange event when Push-Pop-ReplaceState captured
window.onpopstate = history.onpushstate = history.onreplacestate = function() {
	var stateChange = new CustomEvent('stateChange', {detail: stateChange});
	window.dispatchEvent(stateChange);
};
// raise hashChange event when onchashchange is captured
window.onhashchange = function() {
	var hashChange = new CustomEvent('hashChange', {detail: hashChange});
	window.dispatchEvent(hashChange);
};
