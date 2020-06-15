function Counter() {
  this.a = 1;
  this.notify = null;
  this.inc = function () {
    this.a++;

    if(this.notify != null) {
      this.notify(this.a);
    }
  };
  this.count = function() {
    return this.a;
  };
  this.setNotify = function(funcionRecibida) {
    this.notify = funcionRecibida;
  };
}


o3 = new Counter();
o3.inc();
o3.setNotify(function (a) { console.log(a) });
o3.count();
o3.inc();
