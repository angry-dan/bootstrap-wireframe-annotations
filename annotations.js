jQuery(function($){
  $('#annotations').hide()

  var allTooltips = $();

  $('<button>Toggle annotations</button>')
    .css({
      position: 'absolute',
      right: '1em',
      top: '1em'
    })
    .prependTo('body')
    .click(function(){
      allTooltips.tooltip('toggle');
    });


  $('#annotations>[data-ref]').each(function(){
    var tooltip = $($(this).data('ref')).tooltip({
      trigger: 'manual',
      html: true,
      title: $(this).html(),
      placement: $(this).data('placement') || 'bottom'
    });
    allTooltips = allTooltips.add(tooltip);
  });
});
