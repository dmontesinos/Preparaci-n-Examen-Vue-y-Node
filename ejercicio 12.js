o1 = {
  notify: null,
  count: 0,
  inc: function() {
    this.count++;

    if(this.notify != null){
      this.notify();
    }
  },
}

o1.count = 1;
o1.notify = function(a) { console.log(this.count) };
o1.inc();
