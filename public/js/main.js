(function() {
  require.config({
    paths: {
      jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min'
    }
  });

  require(['jquery'], function($) {
    console.log('jquery loaded (via assets/js/main.coffee)');
    return $('.banner .hide').click(function() {
      return $(this).parent().slideUp();
    });
  });

}).call(this);
