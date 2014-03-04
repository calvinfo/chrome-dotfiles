window.onload = function(){
  var button = document.getElementById("add_snippet");
  button.addEventListener('click', function () {
    chrome.extension.getBackgroundPage().addSnippet();
  });
}
