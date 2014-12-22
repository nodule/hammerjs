module.exports = {
  name: "event",
  ns: "hammerjs",
  description: "Takes a hammer event and spreads it to the ports",
  phrases: {
    active: "Splitting event"
  },
  ports: {
    input: {
      event: {
        title: "Event",
        type: "object",
        required: true
      }
    },
    output: {
      timestamp: {
        title: "Timestamp",
        type: "number",
        description: "Time the event occurred"
      },
      target: {
        title: "Target",
        type: "any",
        description: "Target element"
      },
      touches: {
        title: "Touches",
        type: "array",
        description: "touches (fingers, mouse) on the screen"
      },
      pointerType: {
        title: "Pointer Type",
        type: "string",
        description: "kind of pointer that was used. matches Hammer.POINTER_MOUSE|TOUCH"
      },
      center: {
        title: "Center",
        type: "object",
        description: "center position of the touches. contains pageX and pageY"
      },
      deltaTime: {
        title: "Delta Time",
        type: "number",
        description: "the total time of the touches in the screen"
      },
      deltaX: {
        title: "Delta X",
        type: "number",
        description: "the delta on x axis we haved moved"
      },
      deltaY: {
        title: "Delta Y",
        type: "number",
        description: "the delta on y axis we haved moved"
      },
      velocityX: {
        title: "Velocity X",
        type: "number",
        description: "the velocity on the x axis"
      },
      velocityY: {
        title: "Velocity Y",
        type: "number",
        description: "the velocity on the y axis"
      },
      angle: {
        title: "Angle",
        type: "number",
        description: "the angle we are moving"
      },
      direction: {
        title: "Direction",
        type: "string",
        description: "the direction we are moving. matches Hammer.DIRECTION_UP|DOWN|LEFT|RIGHT"
      },
      distance: {
        title: "Distance",
        type: "number",
        description: "the distance we haved moved"
      },
      scale: {
        title: "Scale",
        type: "number",
        description: "scaling of the touches, needs 2 touches"
      },
      rotation: {
        title: "Rotation",
        type: "number",
        description: "rotation of the touches, needs 2 touches"
      },
      eventType: {
        title: "Event Type",
        type: "string",
        description: "matches Hammer.EVENT_START|MOVE|END"
      },
      srcEvent: {
        title: "Source Event",
        type: "object",
        description: "the source event, like TouchStart or MouseDown"
      }
    }
  },
  fn: function event(input, output, state, done, cb, on) {
    var r = function() {
      output = input.event
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}