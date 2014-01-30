var proxy = {
  hammer: function (el, cb) {

    hammerjs(el, function (event) {

      var startEvent = event.startEvent;
      delete event.startEvent;

      cb(startEvent, event);

    });
  }
};

output = [proxy, 'hammer', input.element];
