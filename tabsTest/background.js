let activeTabId;
chrome.tabs.create({ url: 'https://www.jackandamydev.com' }, function (tab) {
    chrome.tabs.executeScript(tab.id, { code: 'alert(location.href); debugger;' })
});
setTimeout(() => {
    const match = "https://www.jackandamydev.com/*";
    chrome.tabs.query({ url: match }, (tabs) => {
        debugger
    });
}, 3000);
setTimeout(() => {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        debugger
        //   if(activeTabId == tabId) {
        //     getTabInfo(tabId);
        //   }
    });
}, 4000);

chrome.tabs.onActivated.addListener(function (activeInfo) {
    getTabInfo(activeTabId = activeInfo.tabId);
});





// let activeTabId, lastUrl, lastTitle;


// function getTabInfo(tabId) {
//   chrome.tabs.get(tabId, function(tab) {
//     if(lastUrl != tab.url || lastTitle != tab.title)
//       console.log(lastUrl = tab.url, lastTitle = tab.title);
//   });
// }

// chrome.tabs.onActivated.addListener(function(activeInfo) {
//   getTabInfo(activeTabId = activeInfo.tabId);
// });

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   if(activeTabId == tabId) {
//     getTabInfo(tabId);
//   }
// });