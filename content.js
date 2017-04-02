      
  var clicks = 5;
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
      setInterval(function() {
        var links = self.$mainContainer.find(".UFILikeLink");
        self.setClick(links);
        console.log("CALL");
      }, 10000);

      // this.scrollTimeline(this.$scrollElements);
    },

    setClick: function(links) {
      console.log(links);

      // Initial time delay
      time = 1000;
      links.each(function() {
        var self = this;
        $(self).each(function(s) {
            if ($(this)[0].attributes[0].value == "false") {
              if(self.closest(".UFICommentActions") == null){
                setTimeout(function () {
                  if(clicks > 0) {
                    self.click();
                    clicks --;
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
      setInterval(function(){
          let button = $(".UFILikeLink");
          let counter = 0;
          button.each(function(){

            if(this.closest(".UFICommentActions") == null){
              counter ++;
              self = this;
              setTimeout(function () { 
                self.click();
                // console.log("click");
              }, 2000);
            }
          });
        elem.animate({scrollTop: $(document).height()}, 1000);
      }, 6000);
    },

links.init();



