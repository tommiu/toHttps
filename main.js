chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return redirect(details);
    },
    {
        urls : ["http://fritz.box/"]
    },
    ["blocking"]
);

function redirect(request) {
    return {redirectUrl: "https://fritz.box/"}
}
