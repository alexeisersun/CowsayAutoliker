var currentLikes = 0;
var enabled = false;

var autoLikerConfig = {
  "isRunning": true,
  "totalLikes": 5
  };

function getFilters(callback) {
  let filter1 = true;
  let filter2 = false;
  let filter3 = false;

  callback({
    "filter": [
      {"postsFilter": filter1},
      {"commentsFilter": filter2},
      {"addsFilter": filter3}
    ]
  });
}

function getStatus(callback){
  callback({"status": enabled})
}

function updateCallback(callback){
  let foo = true

  if (foo != null){
    callback(true);
  }else{
    callback(false);  
  }
}

function onRequest(request, sender, callback) {
  console.log("request");
  console.log(request);
  console.log(sender);
  switch (request.action){
    case "get_filters":
      getFilters(callback);
      break;
    case "is_enabled":
      getStatus(callback);
    case "update_popup":
      updatePopup(callback);
  }
}

function onMessage(request, sender, sendResponse) {
  if( request.message === "is_enabled" ) {
    chrome.tabs.create({"url": request.url});
  }
}

chrome.extension.onRequest.addListener(onRequest);
chrome.runtime.onMessage.addListener(onMessage);