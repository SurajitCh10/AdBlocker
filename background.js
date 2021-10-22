const filters = [
    "*://*.adbrite.com/*",
    "*://*.doubleclick.net/*",
    "*://googleadservices.com/*",
    "*://*.google-analytics.com/*",
    "*://*.googlesyndication.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
    "*://i.ytimg.com/generate_204",
    "*://google.com/pagead/*",
    "*://youtube.com/pagead/*",
    "*://youtube.com/api/stats/*",
    "*://google.co.in/pagead/*",
    "*://youtube.com/youtubei/*",
    "*://suggestqueries-clients6.youtube.com/*",
    "*://r3---sn-o3o-jj0e.googlevideo.com/*",

]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {return {cancel: true}},
    {urls: filters},
    ["blocking"]
)

