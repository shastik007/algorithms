const array = [1,4,2,5,3,6,4,7,5,8,6,9,7,0,9,10,15,12,11]


const find_smallest = (arr) => {
    let smallest_index = 0
    let smallest = arr[smallest_index]
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] < smallest) {
            smallest = arr[index]
            smallest_index = index
        }
    }
    return smallest_index
}

const selected_sort = (arr) => {
   const array_copy = [...arr]
   const new_filtered_array = []

   for (let index = 0; index < arr.length; index++) {
       const smallest_index =  find_smallest(array_copy)
       new_filtered_array.push(array_copy[smallest_index])
       array_copy.splice(smallest_index,1)
   }

   return new_filtered_array
}



console.log(selected_sort(array));