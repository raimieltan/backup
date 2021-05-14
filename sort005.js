let array = [6,5,2,1,19,4,3,11]


for(let i = 0; i < array.length; i++){

    for(let j = i + 1; j < array.length; j++){
        let next = array[j]
        let prev = array[i]
       
        if(next < prev){
            console.log(array)
            array[array.indexOf(next)] = prev
          
            array[i] = next

         
          
          
        }



    }
}

console.log(array)
