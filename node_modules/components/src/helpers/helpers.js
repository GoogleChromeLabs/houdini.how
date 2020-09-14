(function() {
  module.exports.register = function(Handlebars, options) {
    var toString = function(val) {
      if (val == null) {
        return "";
      } else {
        return val.toString();
      }
    };
    var isUndefined = function(value) {
      return value === 'undefined' || toString.call(value) === '[object Function]' || (value.hash != null);
    };

    Handlebars.registerHelper('github', function(repo, size) {
      if(isUndefined(size)) {
        size = "small"
      }
      var width = 90;
      var height = 20;
      if(size === 'large') {
        width = 130;
        height = 30;
      }
      var url = '<iframe src="http://ghbtns.com/github-btn.html?user=upstage&amp;repo=' + repo + '&amp;type=watch&amp;count=true&amp;size=' + size + '" allowtransparency="true" frameborder="0" scrolling="0" width="' + width + '" height="' + height + '"></iframe> <iframe src="http://ghbtns.com/github-btn.html?user=upstage&amp;repo=' + repo + '&amp;type=fork&amp;count=true&amp;size=' + size + '" allowtransparency="true" frameborder="0" scrolling="0" width="' + width + '" height="' + height + '"></iframe>';
      return new Handlebars.SafeString(url);
    });

    Handlebars.registerHelper('componentize', function(str) {
      return str.replace('css', 'CSS').replace('-', ' ');
    });
    Handlebars.registerHelper('dashify', function(str) {
      return str.toLowerCase().replace(' ', '-');
    });

  };
}).call(this);
