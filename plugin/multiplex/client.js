(function(){var t=Reveal.getConfig().multiplex,o=t.id
io.connect(t.url).on(t.id,function(t){t.socketId===o&&"localhost:1947"!==window.location.host&&Reveal.setState(t.state)})})()