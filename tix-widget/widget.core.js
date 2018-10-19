import SquareWidget from "./square.widget";
import BannerWidget from "./banner.widget";
import SkyscraperWidget from "./skyscraper.widget";

const widgets = {};

const types = {
  SQUARE: "square",
  BANNER: "banner",
  SKYSCRAPER: "skyscraper"
};

const factory = (parent, type, opts ) => {
  let w;
  if (type === types.SQUARE) {
    w = new SquareWidget(opts, parent);
  } else if (type === types.BANNER) {
    w = new BannerWidget(opts, parent);
  } else if (type === types.SKYSCRAPER) {
    w = new SkyscraperWidget(opts, parent);
  } else{
    console.error('Unknown widget type');
  }
};

const create = (container, type, opts) => {
  let parent;
  if (typeof container === "string") {
    parent = document.getElementById(container);
  } else if (container instanceof Node && container.nodeType === 1) {
    parent = container;
  } else {
    console.error("container harus elemen ID atau elemen");
    return;
  }

  factory(parent, type, opts);
};

const remove = container => {
  if (typeof container === "string") {
  } else if (container instanceof Node && container.nodeType === 1) {
  } else {
    console.error("container harus elemen ID atau elemen");
  }
};

console.log("WidgetCore");

window.WidgetCore = {
  create: create,
  remove: remove,
  types: types
};
