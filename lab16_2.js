var mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 },
];
function findNameOfTallestMountain(mountain) {
    var biggestMountain = 0;
    var currentname = '';
    for (var i = 0; i < mountain.length; i++) {
        if (mountain[i].height > biggestMountain) {
            biggestMountain = mountain[i].height;
            currentname = mountain[i].name;
        }
    }
    return currentname;
}
var findName = findNameOfTallestMountain(mountains);
console.log(findName);
