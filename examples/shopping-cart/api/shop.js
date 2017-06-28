/**
 * Mocking client-server processing
 */
const _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
]

const schoolyears = [
  {"label": "2016-2017上学期", "value": "1"},
  {"label": "2016-2017下学期", "value": "2"},
  {"label": "2015-2016上学期", "value": "3"},
  {"label": "2015-2016下学期", "value": "4"},
];

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 1000)
  },
  getSchoolyears (cb) {
    setTimeout(() => cb(schoolyears), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
