const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(paramArray) {
   let noduplicates = []

   for (let i = 0; i < paramArray.length; i++) {
       if(!noduplicates.includes(paramArray[i])){
           noduplicates.push(paramArray[i]);
       }
       
   }
   return console.log(noduplicates);
  }
  removeDuplicates(duplicates)