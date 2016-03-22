module.exports = {
  name: "hammer",
  ns: "hammerjs",
  description: "Hammer",
  phrases: {
    active: "Hammering {input.event}"
  },
  ports: {
    input: {
      element: {
        title: "Element",
        type: "any"
      },
      event: {
        type: "array",
        title: "Event",
        items: {
          type: "string",
          "enum": ["hold",
            "tap",
            "doubletap",
            "drag",
            "dragstart",
            "dragend",
            "dragup",
            "dragdown",
            "dragleft",
            "dragright",
            "swipe",
            "swipeup",
            "swipedown",
            "swipeleft",
            "swiperight",
            "transform",
            "transformstart",
            "transformend",
            "rotate",
            "pinch",
            "pinchin",
            "pinchout",
            "touch",
            "release"
          ]
        }
      }
    },
    output: {
      event: {
        title: "Event",
        type: "object",
        description: "The Event"
      }
    }
  },
  dependencies: {
    npm: {
      hammerjs: require('hammerjs')
    }
  },
  fn: function hammer(input, $, output, state, done, cb, on, hammerjs) {
    var r = function() {
      if (state.mc) {
        state.destroy();
        state.mc = null;
      }

      state.mc = new hammerjs($.element);
      state.on($.event.join(' '), function(event) {
        output({
          event: $.create(event)
        });
        done(); // to indicate completion.
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}