const removeFromArray = function(lst, ...args) {
    let newArray = [];
    for (let i = 0; i < lst.length; i++) {
        if (!lst[i] in args) {
            console.log(args);
            newArray.push(lst[i]);
        }
        console.log(newArray);
        return newArray;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
