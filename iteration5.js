const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(paramArray) {
let counter = 0;
 
for (let i = 0; i < paramArray.length; i++) {
    if(typeof paramArray[i] === "string"){
        counter += paramArray[i].length};

        if(typeof paramArray[i] === "number"){
            counter += paramArray[i];
        }   
}
return console.log (counter/paramArray.length)
}
averageWord(mixedElements)

