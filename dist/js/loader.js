const i = {
  data: !0
};
function s(t) {
  if (!t)
    return;
  const e = document.createElement("script");
  e.src = chrome.runtime.getURL(t);
  const n = document.head || document.documentElement;
  n.insertBefore(e, n.firstElementChild), e.onload = function() {
    e.remove();
  };
}
chrome.runtime.onMessage.addListener(function(t) {
  window.dispatchEvent(
    new CustomEvent("MyExtensionUpdateOptions", { detail: t.data })
  );
});
window.addEventListener("MyExtensionGetOptions", function(t) {
  chrome.storage.sync.get(i, function(e) {
    const o = { requestId: t.detail.id, data: e };
    window.dispatchEvent(
      new CustomEvent("MyExtensionSendOptions", { detail: o })
    );
  });
});
s(
  /* js/... */
);
