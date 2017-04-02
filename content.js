  var links = {
    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render();
    },

    cacheDom: function() {
      this.$mainContainer = $('#mainContainer');
      this.$links = this.$mainContainer.find(".UFILikeLink")
    },

    bindEvents: function() {
     
    },

    render: function() {
      console.log(this.$mainContainer);
      console.log(this.$links);
      this.setClick(this.$links);
    },

    setClick: function(links) {
      links.each(function() {
        console.log(this);
        this.click();
      });
    },
    
  };
  
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

function isEnabled(){
  chrome.extension.sendRequest({'action':'is_enabled'},
    function(response) {
      console.log(response);
    })
}