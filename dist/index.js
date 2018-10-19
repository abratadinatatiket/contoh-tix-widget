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
  }
}, 100);
