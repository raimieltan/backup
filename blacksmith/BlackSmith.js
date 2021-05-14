class Forge {
    
    constructor(name){
        this.name = name
        this.requiredMaterials = []
        this.itemRatio = []
    }

    addMaterials(material){
        this.requiredMaterials.push(material)
        this.requiredMaterials.sort( (a,b) => {
            return a.getName().localeCompare(b.getName())
        })


        
    }



    checkItem(item){
        for(let matItem of this.requiredMaterials){
            if(item.getName() === matItem.getName()){
                return true
            }
        }
        return false
    }


    computeQuality(materials){
        materials.sort( (a,b) => {
            return a.getName().localeCompare(b.getName())
        })

        let qualityPoints = 0

        for(let item of materials){
            qualityPoints += item.getQuality()
        }

        if(qualityPoints >= 5000){
            return 'Legendary'
        }
        else if(qualityPoints >= 3000){
            return 'Rare'
        }
        else{
            return 'Basic'
        }

    }

    computeQuantity(materials){
        materials.sort( (a,b) => {
            return a.getName().localeCompare(b.getName())
        })

        for(let x of this.requiredMaterials){
            this.itemRatio.push(x.getAmount())
        }

        let itemStack = [

        ]

        for(let availItem of materials){
            for(let reqItem of this.requiredMaterials){
                if(availItem.getName() === reqItem.getName()){
                    
                    itemStack.push(availItem.getAmount() + 1)
                    
                }
            }
          
        }

       


        let totalItems = 0

        const checkQuantity = (array) => {
            for(let x of array){
                if(x < 1){
                    return false
                }
            }
            return true
        }

        
        while(checkQuantity(itemStack)){
     
   
            for(let i = 0; i < itemStack.length; i++){
         
              
                itemStack[i] = itemStack[i] - this.itemRatio[i]
       
              
            }
            
            if(checkQuantity(itemStack)){
                totalItems++
            }


        }

        return totalItems
    }


    craft(materials){
        materials.sort( (a,b) => {
            return a.getName().localeCompare(b.getName())
        })
        
        if (materials.length < this.requiredMaterials.length){
            throw new Error('You lack the amount of materials needed to craft this item') 
        }
        
        for(let item of materials){
            if(!this.checkItem(item)){
                throw new Error(`${item.getName()} is a wrong material for this recipe`)
            }
        }

        let quantity = this.computeQuantity(materials)

        if(quantity <= 0) {
            throw new Error('You lack the amount of materials needed to craft this item') 
        }
        let qualityText = this.computeQuality(materials)
        

        return `Successfully crafted a ${qualityText} ${this.name}`

    }
}



class Material {
    constructor(name, amount, quality) {
        this.name = name
        this.amount = amount
        this.quality = quality
    }

    getName(){
        return this.name
    }

    getAmount(){
        return this.amount
    }

    getQuality(){
        return this.quality
    }
}


const swordRecipe = new Forge('Iron Sword')

swordRecipe.addMaterials(new Material('Iron', 3, 0))
swordRecipe.addMaterials(new Material('Wood', 1, 0))

const availMats = [

    new Material('Wood', 3, 200),
    new Material('Iron', 9, 300)
]
console.log(swordRecipe.computeQuantity(availMats))

console.log(availMats)
