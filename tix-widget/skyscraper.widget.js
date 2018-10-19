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
    el.setAttribute(
      'style',
      `width:200;height:400px;color:${this.opts.color};background:${
        this.opts.background
      }`
    );

    el.insertAdjacentHTML('afterbegin', `<p>${this.opts.content}</p>`);
    
    const btn = document.createElement('button');
    btn.onclick = this.onBtnClick;
    btn.innerHTML = 'Click Me';

    el.appendChild(btn);


    this.parent.appendChild(el);
  }
}
