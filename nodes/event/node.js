// copies all the keys to ports
var keys = Object.keys($.event)
output = {}
for (var i = 0; i < keys.length; i++) {
  output[keys[i]] = $.create($.event[keys[i]])
}
