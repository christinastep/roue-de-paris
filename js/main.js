var waypoint = new Waypoint({
  element: document.getElementById('trigger'),
  handler: function(direction) {
    document.getElementById('intro').classList.toggle('is-reached');
  }
})
