const pageScripts = document.getElementsByTagName('script');
for (let i = 0, len = pageScripts.length; i < len; i++) {
  const scr = pageScripts[i];
  console.log(i, scr);
  if(/widget\.embed\./.test(scr.src)){
    const thisScript = scr;
    const type = thisScript.getAttribute('data-type');
    const opts = {
      color: thisScript.getAttribute('data-color'),
      background: thisScript.getAttribute('data-background'),
      content: thisScript.getAttribute('data-content')
    }    
    window.WidgetCore.create(thisScript.parentNode, type, opts);
  }
}