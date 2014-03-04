var checkForGist = function(tab){
  if(tab.url.match(/gist.github.com/)){ // TODO: will URLs always match this? What about raw urls?
    chrome.pageAction.show(tab.id);
  } else {
    chrome.pageAction.hide(tab.id);
  }
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    checkForGist(tab);
  }
})

var addSnippet = function(){
  var url = chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    storeUrl(tabs[0].url);
  })
}

var storeUrl = function(url){
  chrome.storage.local.get("snippets", function(results) { // TODO: This is sort of gross! Refactor
    snippets = results.snippets;
    snippets.push(url);
    chrome.storage.local.set({"snippets": snippets});
  });
}

var init = function(){
  chrome.storage.local.get("snippets", function(object){
    if(typeof object.snippets === 'undefined'){
      chrome.storage.local.set({"snippets": []});
    }
  })
}

// ---------------------

init();
