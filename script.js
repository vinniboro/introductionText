$(document).ready(function() {
  // Initialize animation
  $('.type-places').each(function() {
    $(this).find('.type-place').each(function(index) {
      // Animation options
      $(this).css({
        'transition': 'opacity 0.4s ease-in-out',
        'transition-delay': index * 0.8 + 's',
        'transform': 'translateY(0)',
        'transition-duration': $(this).data('duration'),
        'transition-timing-function': $(this).data('ease-function'),
        'opacity': 1
      });
    });
  });
});
