jQuery(function($){
  $('#annotations').hide()

  var allTooltips = $();

  $('<button class="btn btn-info"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Toggle annotations</button>')
    .css({
      position: 'fixed',
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
