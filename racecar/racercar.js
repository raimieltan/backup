class Car {
    constructor(brand, model, acceleration, addOns, budget){
        this.brand = brand;
        this.model = model;
        this.acceleration = acceleration;
        this.addOns = addOns
        this.requirements = []
        this.budget = budget
    }

    addRequirements = (addOn) => {
        this.requirements.push(addOn)
        this.budget -= 100
    }
    
    tune = () => {
        let addBoost = 0

        for(let addOn of this.addOns){
            addBoost += addOn.getBoost()
        }

        this.acceleration += (addBoost * 0.05)
        this.budget -= 500
    }

}



class Addons {
    constructor(brand, type, minBoost, maxBoost){
        this.brand = brand
        this.type = type
        this.minBoost = minBoost
        this.maxBoost = maxBoost
    }

    getBrand = () => {
        return this.brand
    }

    getType = () => {
        return this.type
    }

    getBoost = () => {
        return Math.floor(Math.random() * this.maxBoost) + this.minBoost;
    }
}
