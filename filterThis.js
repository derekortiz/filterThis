;(function($, undefined) {
  function escapeRegExp(string){
    return string.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  }

  /* PLUGIN CLASS AND FUNCTIONS */
  var filterThis = function( elem, options ) {
    this.elem = elem;
    this.$elem = $(elem);
    this.options = options;
    this.html5Data = this.$elem.data("filter-options");
  }

  filterThis.prototype = { 
    defaults: {
      shouldHighlight: true,
      highlightColor: "yellow",
      filterTarget: "",
      filterHide: "",
      shouldHide: true,
      flags: "i"
    },

    init: function() {
      var instance = this;
      instance.config = $.extend({}, instance.defaults, instance.options, instance.html5Data);
      var $target = $(instance.config.filterTarget),
          regEx,
          oldString,
          newString,
          inputText;
      instance.$elem.on('input', function(event) {
        inputText = event.currentTarget.value;  
        // if there is input search for and highlight string
        regEx = new RegExp(escapeRegExp(inputText), 'i');
        $target.each(function(iteration) {
          $element = $(this);
          oldString = $.trim($element.text());
          if (inputText != '') {
            newString = oldString.replace(regEx, "<span class='filter-this-highlighter'>"+'$&'+"</span>");
            $element.html(newString);
            if (oldString === newString) {
              // case when no match is found on target
              $element.closest(instance.config.filterHide).hide();
            }
            else {
              // when match if found make sure it is visible
              $element.closest(instance.config.filterHide).show();
              if (instance.config.shouldHighlight === true) {
                $element.children(".filter-this-highlighter").css("background", instance.config.highlightColor);
              }
            }
          }
          else {
            // nothing searched: replace to clear highlight and show element
            $element.html(oldString);
            $element.closest(instance.config.filterHide).show();
          }
        });
      });
      return instance;
    }
  }

  $.fn.filterThis = function(options) {
    return this.each(function() {
      new filterThis(this, options).init();
    });
  }
}(jQuery));