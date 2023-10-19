function sum(a = 2, b = 3) {
    return a + b;
  }
  
  function main(a, b, cb) {
    if (typeof a === 'undefined') {
      a = 2;
    }
    if (typeof b === 'undefined') {
      b = 3;
    }
  
    const result = sum(a, b);
  
    if (typeof cb === 'function') {
      return cb(result);
    }
  
    return result;
  }
  

  function showAlert(result) {
    alert(result);
  }
  
  const a = 4;
  const b = 5;
  
  const result1 = main(a, b); 
  const result2 = main(a, b, showAlert);