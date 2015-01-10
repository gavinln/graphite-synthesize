(function() {
  var description;
  description = {
    "Foo Work2": {
        refresh_interval: 500,
      source: "https://localhost:8443/render?from=-15minutes&until=now&width=400&height=250&target=collectd.graphite.memory.memory-used&_uniq=0.1386598352054219&title=collectd.graphite.memory.memory-used&format=json&jsonp=jQuery17107642692232038826_1420783564912&_=1420785309889",
      TimeSeries: {
        title: 'Foo Work2',
        parent: '#g2-3',
        padding: [35, 15, 45, 45],
      }
    }

  };


  var g = new Graphene;
  //g.demo();
  g.build(description);


}).call(this);
