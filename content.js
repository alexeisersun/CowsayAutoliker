      
  var clicks = 10;

  var userName = "Nico Jhony";

  var likeUser = false;
  var scrollInterval, clickInterval;
  var links = {
    init: function() {
      this.cacheDom();
      this.bindEvents();
    },

    cacheDom: function() {
      this.$mainContainer = $('#contentArea');
      this.$links = this.$mainContainer.find(".UFILikeLink");
      this.$scrollElements = $("html, body");

    },

    bindEvents: function() {
      var self = this;

      // call every 10 seconds Much Wow
      // clickInterval = setInterval(function() {
      //   var links = self.$mainContainer.find(".UFILikeLink");
      //   self.postLike(links);

      // }, 3000);

      //  scrollInterval = setInterval(function() {
      //   self.scrollTimeline(self.$scrollElements);

      // }, 10000);
      clickInterval = setInterval(function() {
        var users = $(".fbUserContent");
           self.followerLike(".UFICommentActions", userName, users );
      }, 5000);
    },

    postLike: function(links) {
      this.clickLike(links, ".UFICommentActions" );
    },

    followerLike: function(targetDiv, userName, users){

      var _ = this;


      // Initial time delay
      time = 1000;
      users.each(function() {
        var self = this;
        $(self).each(function(s) {
            if ($(this).find(".fwb").find("a")[0].innerHTML == userName) {
              // console.log(this);
              if ($(this).find(".UFILikeLink")[0].attributes[0].value == "false") {
                // console.log("adadadadada");
                  // $(this).closest(users).find(".UFILikeLink")[0].click();
                  var that = this;
                  console.log($(that).find(".UFILikeLink")[0]);
                  setTimeout(function () {
                    $(that).find(".UFILikeLink")[0].click();
                  }, time);
            }
          }
          // add 1 sec delay between iterations
          time +=1000;
        })
      });
    },

    clickLike: function(links, targetDiv){
        var _ = this;
      // Initial time delay
      time = 1000;
      links.each(function() {
        var self = this;
        $(self).each(function(s) {
            if ($(this)[0].attributes[0].value == "false") {
              if(self.closest(targetDiv) == null){
                console.log(time);
                setTimeout(function () {
                  if(clicks > 0) {
                    self.click();
                    clicks --;
                    console.log("click");
                    // setLikesNumber(clicks);
                  }

                  else {
                    // Clear scroll Timeout when the click goes to zero
                    _.clearTime(scrollInterval);
                    _.clearTime(clickInterval);
                  }
                }, time);
            }
          }
          // add 1 sec delay between iterations
          time +=1000;
        })
      });
    },

    // Implement AutoScroll
    scrollTimeline: function(elem){
      // scrollInterval = setInterval(function(){
        elem.animate({scrollTop: $(document).height()}, 4000);
      // }, 10000);
    },

    clearTime: function(interval) {
      clearInterval(interval);
    }
}

links.init();

$(document).ready(function(){
   $("#contentArea").hover(setFilters, isEnabled);
 });
 
 function setFilters(){
   chrome.extension.sendRequest({'action' : 'get_filters'},
     function(response) {
       console.log(response);
     });
 }
 
 function setLikesNumber(likes) {
  console.log(likes);
  chrome.extension.sendRequest({'action': 'update_popup', currentLikes : likes},
    function(response) {
      console.log(response);
    });
 }

 function isEnabled(){
   chrome.extension.sendRequest({'action':'is_enabled'},
     function(response) {
       console.log(response);
     })
 } 