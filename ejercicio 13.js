var o2 = (function() {
  count = 0;
  notify = null;
  return {
    inc : function() {
      count++;
      if(notify != null){
        notify(count);
      }
    },
    count: function() { return count; },
    setNotify: function(funcionRecibida){
      notify = funcionRecibida;
    },
  };
})();




o2.setNotify(function (a) { console.log(a) });
o2.inc();
o2.inc();
