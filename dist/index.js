//contoh widget consumer yg pake API utk bikin widget
var int = setInterval(function() {
  if (window.WidgetCore) {
    clearInterval(int);
    window.WidgetCore.create('w1', window.WidgetCore.types.SQUARE, {
      color: 'white',
      background: 'purple',
      content: 'Halo, aku SQUARE widget.'
    });

    window.WidgetCore.create('w2', window.WidgetCore.types.BANNER, {
      color: 'white',
      background: 'lightblue',
      content: 'Halo, aku BANNER widget.'
    });

    window.WidgetCore.create('w3', window.WidgetCore.types.BANNER, {
      css: './tix-widget/styles/lime-banner.css',
      className: 'tix-widget lime-banner',
      content: 'Halo, aku LIME-BANNER widget.'
    });
  }
}, 100);
