 const array = [1,2,3,4,5,6,7,8,1]


 const sum = (arr = []) => {
    let current_index = 0
    const total = arr[current_index]
    arr.splice(current_index,1)
    if (arr.length > 0) {
        current_index += 1
        return total + sum(arr)
    }
   
    return total
 }


//  console.log(sum(array));


const count_trecker = (arr = []) => {
    let current_index = 0
    arr.splice(current_index,1)
    if (arr.length > 0) {
        current_index =+ 1
        return current_index + count_trecker(arr)
    }
    return current_index
}


console.log(count_trecker(array));


