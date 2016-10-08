var s = [1, 2, 3, 4, 5];
s.map(function(value, index, arr) {
    return value * 2
})
var listOfFriends = [{
    id: 1,
    name: 'afre',
    numFriends: 1
}, {
    id: 2,
    name: 'berq',
    numFriends: 1
}, {
    id: 3,
    name: '3g1',
    numFriends: 1
}, {
    id: 4,
    name: 'afsdd',
    numFriends: 1
}];

listOfFriends.map(function(value) {
    return value.name
})

[1, 2, 3, 4].filter(function(value) {
    return value % 2 == 0;
})

listOfFriends.filter(function(value) {
        return value.id >= 3;
    }).map(function(value) {
        return value.name;
    })
    //filter and map take (value, index, arr), and can take any number of arguments, but only in this order

listOfFriends.sort(function(first, second) {
    if (first.name < second.name) return -1;
    else return 1;
})

listOfFriends.reduce(function(acc, curr) {
    if (curr.id % 2 == 0) {
        return acc + curr.numFriends;
    }
    return acc;
}, 0);
