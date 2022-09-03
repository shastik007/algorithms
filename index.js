var list = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30,
];

var binary_search = function (list, target) {
    var start = 0;
    var end = list.length - 1;
    var middle;
    for (var index = 0; start <= end; index++) {
        middle = Math.floor((end - start) / 2) + start;
        if (target < list[middle]) {
            end = middle - 1;
        }
        else if (target > list[middle]) {
            start = middle + 1;
        }
        else if (target === list[middle]) {
            return middle;
        }
    }
    
};
console.log(binary_search(list, 3));