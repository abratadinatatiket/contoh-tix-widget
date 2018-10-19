//import './styles/banner.scss';

export default class BannerWidget {
  constructor(opts, parent) {
    this.opts = opts;
    this.parent = parent;
    this.render();
  }
  render() {
    const el = document.createElement('div');
    el.setAttribute(
      'style',
      `width:100%;height:100px;color:${this.opts.color};background:${
        this.opts.background
      }`
    );
    el.innerHTML = this.opts.content;
    this.parent.appendChild(el);
  }
}
