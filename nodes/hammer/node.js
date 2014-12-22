output = function() {

  if(state.mc) {
    state.destroy();
    state.mc = null;
  }

  state.mc = new hammerjs(data);
  state.on(input.event.join(' '), function(event) {
    output({event: event});
    done(); // to indicate completion.
  });

};
