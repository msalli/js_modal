$(document).ready(function() {

  triggerSearchModal();
  triggerBuyModal();
  hideModal();
  handleOutsideClick();

  function triggerSearchModal() {
    $('#search-link').click(function() {
      $('.modal-overlay').fadeIn('fast');
    })
  }

  function triggerBuyModal() {
    $('.buy-button').click(function() {
      $('.modal-overlay').fadeIn('fast');
      $('.modal').fadeIn('fast');
    })
  }

  function hideModal() {
    $('.close-modal').click(function() {
      $('.modal-overlay').fadeOut('fast');
      $('.modal').fadeOut('fast');
    });
  }

  function handleOutsideClick() {
    $(document).mouseup(function(event) {
      var container = $('.search-form');

      // if the target of click is not the container div
        // and the target is not a descendent of the container dic
      if (!container.is(event.target) && container.has(event.target).length === 0) {
        $('.modal-overlay').fadeOut('fast');
        $('.modal').fadeOut('fast');
      }
    })
  }

});