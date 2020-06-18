fs = require("fs");

function asyncToEnhancedFuture(f){
  return (filename) => {
    var callback = null;
    var enhancedFuture = {
      isDone: false,
      result: null,
      registerCallback: function(p) {
        if (enhancedFuture.isDone == true) {
          p(enhancedFuture);
        } else {
          callback = p;
        }
      }
    };

    f(filename, (err, contenido) => {
      enhancedFuture.result = contenido;
      enhancedFuture.isDone = true;

      if (callback != null) {
        callback(enhancedFuture);
      }
    });

    return enhancedFuture;
  }
}



readIntoEnhancedFuture = asyncToEnhancedFuture(fs.readFile);
enhancedFuture = readIntoEnhancedFuture('a1.txt');
enhancedFuture.registerCallback( function(ef) {console.log(ef) } )
