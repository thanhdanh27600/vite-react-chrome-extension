import { ExtensionOptions, Message } from "../types/extension";

const Options: ExtensionOptions = {
	data: true,
};

function injectScript(file?: string) {
	if (!file) return;
	const script = document.createElement("script");
	script.src = chrome.runtime.getURL(file);

	const doc = document.head || document.documentElement;

	// doc.appendChild(script);
	doc.insertBefore(script, doc.firstElementChild);

	script.onload = function () {
		script.remove();
	};
}

chrome.runtime.onMessage.addListener(function (
	request
	// sender,
	// sendResponse
) {
	// pass the event to injected script
	window.dispatchEvent(
		new CustomEvent("MyExtensionUpdateOptions", {detail: request.data})
	);
});

window.addEventListener("MyExtensionGetOptions", function (evt) {
	chrome.storage.sync.get(Options, function (opts) {
		const request = (evt as Message).detail;
		const response = {requestId: request.id, data: opts};
		window.dispatchEvent(
			new CustomEvent("MyExtensionSendOptions", {detail: response})
		);
	});
});

injectScript(/* js/... */);
