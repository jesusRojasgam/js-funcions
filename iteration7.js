const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(paramArray, search) {
      for (let i = 0; i < paramArray.length; i++) {
       if (paramArray[i] === search){
           return i
       }
  }      return " no hay";
}
console.log(finderName(nameFinder, "marc"));
