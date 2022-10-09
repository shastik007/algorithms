 const array = [1,2,3,4,5,6,7,8,1]
 const array_2 = [1,3,2,4,5,3,6,4,7,4,8,5,9,7,12,11,14,12]

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


// console.log(count_trecker(array));




const get_less = (arr = [],target) => {
    let less = []
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < target) {
            less.push(arr[index])
        }
    }

    return less
}

const get_greater = (arr = [],target) => {
    let greater = []
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > target) {
            greater.push(arr[index])
        }
    }
    return greater
}


const quick_sort = (arr = []) => {
  if (arr.length < 2) {
      return arr
  }else{
      const pivot = arr[0]
      const less = get_less(arr,pivot)
      const greater =  get_greater(arr,pivot)
      console.log(less,'less');
      console.log(greater,'greater');
      return [...quick_sort(less),pivot,...quick_sort(greater)]
  }
}


console.log(quick_sort(array_2));




//quick sort work with time Obig(n * logn)




