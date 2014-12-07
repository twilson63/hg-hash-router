# Mercury EventHashRouter

This module attaches HashRouter to the mercury Event Loop system 
so that when the hash location changes an event is triggered in mecury 
to modify state and re-render:

example:

    
    var EventRouter = require('hg-event-router');
    var state = hg.state({
      title: hg.value('Foo - Home'),
      route: hg.value('#/'),
      events: {
        setRoute: EventRouter()
      }
    });
    state.events.setRoute(EventRouter.Update.bind(null, state));

    hg.app(document.body, state, render);  
