let path1 = [
    [0, 2], // 0
    [2, 1], // 1
    [1, 0], // 2
    [3, 4], // 3
    [3, 0], // 4
    [3, 1], // 5
    [2, 4], // 6
    [4, 5], // 7
    [5, 6], // 8
    [6, 3]  // 9
]

let path2 = [
    [0, 1],
    [1, 2]
]

// for (let i = 0; i < path1.length; i++) {
//     console.log(path1[i][0] + "," + path1[i][1])
// }



function shortestPath(starting, goal, path) {
    let counter = starting;
    let total = 0


    while (true) {

        console.log(path[counter][0], path[counter][1])
       
        if (path[counter][1] === goal) {
     
            return total
        
        }

     
        total += path[counter][1]
     
        for (let i = 0; i < path.length; i++) {
            if (path[i][0] === path[counter][1]) {
                console.log(path[counter][0], path[counter][1])
                counter = i
                total += path[counter][1]
               
            
            }
        }


        if (counter + 1 >= path.length) {
            
            if(path[counter][1] === goal){
                return total
            }
            else{   
        
                return path.length
            }
           
            
        }
       
  

    }

}

//input the index the goal number and the path
console.log(shortestPath(0, 0, path1))


