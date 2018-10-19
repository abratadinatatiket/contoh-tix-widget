export default class SkyscraperWidget {
  constructor(opts, parent) {
    this.opts = opts;
    this.parent = parent;
    this.onBtnClick = this.onBtnClick.bind(this);
    this.render();
  }

  onBtnClick(e){
    alert('SKYSCRAPER WIDGET!');
  }


  render() {
    const el = document.createElement('div');
    el.setAttribute('class', this.opts.className || 'tix-widget banner');
    if(!this.opts.css){
      el.setAttribute(
        'style',
        `width:200px;height:400px;color:${this.opts.color};background:${
          this.opts.background
        }`
      );
    }else{
      
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = this.opts.css;
      document.head.appendChild(link);
    }

    el.insertAdjacentHTML('afterbegin', `<p>${this.opts.content}</p>`);
    
    const btn = document.createElement('button');
    btn.onclick = this.onBtnClick;
    btn.innerHTML = 'Click Me';

    el.appendChild(btn);


    this.parent.appendChild(el);
  }
}
