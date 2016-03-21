output = function() {
  if(state.mc) {
    state.destroy();
    state.mc = null;
  }

  state.mc = new hammerjs($.element);
  state.on($.event.join(' '), function(event) {
    output({event: $.create(event)});
    done(); // to indicate completion.
  });
};
