f2 = function(a) {
  if(a >= 0) {
    return 2*a;
  } else {
    return -1
  }
};

f5 = function(a, b, c) {
  c(b(a));
};

f5(1, f2, function(r) {
  console.log(r);
});
