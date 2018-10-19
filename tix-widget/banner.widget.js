//import './styles/banner.scss';

export default class BannerWidget {
  constructor(opts, parent) {    
    this.opts = opts;
    this.parent = parent;
    console.log('[banner.widget ctor] opts', opts);
    this.render();
  }
  render() {
    const el = document.createElement('div');
    el.setAttribute('class', this.opts.className || 'tix-widget banner');
    if(!this.opts.css){
      el.setAttribute(
        'style',
        `width:100%;height:100px;color:${this.opts.color};background:${
          this.opts.background
        }`
      );
    }else{
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = this.opts.css;
      document.head.appendChild(link);
    }
    el.innerHTML = this.opts.content;
    this.parent.appendChild(el);
  }
}
