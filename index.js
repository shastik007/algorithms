const factorial = (number) => {
  if (number === 1) return number
  return number * factorial(number - 1)
}


// console.log(factorial(5));


const nested_obj = {
    name:'Jetigen',
    count:120,
    nest:{
        name:'Tilek',
        count:100,
        nest:{
            name:'Rasul',
            count:110,
            nest:{
                name:'Kuba',
                count:1100,
                nest:false
            }
        }
    }
}


const nested_object_trecker = (object) => {
    const all_count = object.count
    if (typeof object.nest === 'object') {
       console.log('it');
       return all_count + nested_object_trecker(object.nest)
    }
    return all_count 
}


console.log(nested_object_trecker(nested_obj));




