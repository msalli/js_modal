$(document).ready(function() {

  triggerModal();
  hideModal();
  handleOutsideClick();

  function triggerModal() {
    $('#search-link').click(function() {
      $('.search-modal-overlay').fadeIn('fast');
    })
  }

  function hideModal() {
    $('.close-modal').click(function() {
      $('.search-modal-overlay').fadeOut('fast');
    });
  }

  function handleOutsideClick() {
    $(document).mouseup(function(event) {
      var container = $('.search-form');

      // if the target of click is not the container div
        // and the target is not a descendent of the container dic
      if (!container.is(event.target) && container.has(event.target).length === 0) {
        $('.search-modal-overlay').fadeOut('fast');
      }
    })
  }

});