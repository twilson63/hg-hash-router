var window = require('global/window');
var Event = require('geval');
var HashRouter = require('hash-router');

EventRouter.update = Update;
module.exports = EventRouter;

function EventRouter() {
  var router = HashRouter();
  window.addEventListener('hashchange', router);
  return Event(function (emit) {
    router.on('hash', emit);
  });
}

function Update(state, route) {
  state.route.set(route.substr(2)  || '#/');
}
