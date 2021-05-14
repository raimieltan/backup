class Forge:   

    def __init__(self, name ):
        self.name = name
        self.required_materials = []
        self.item_ratio = []

    def add_materials(self, material):
            self.required_materials.append(material)
            self.required_materials.sort(key=lambda x: x.get_name(), reverse=True)
            self.item_ratio.append(material.get_amount())

    def check_item(self, item):
        for mat_item in self.required_materials:
            if item.get_name() == mat_item.get_name():
                return True
        return False


    def compute_quality(self, materials):
        materials.sort(key=lambda x: x.get_name(), reverse=True)
        quality_points = 0

        for item in materials:
            quality_points = quality_points + item.get_quality()
        
        if quality_points >= 5000:
            return "Legendary"
        
        elif quality_points >= 3000:
            return "Rare"
        
        else:
            return "Basic"


    def check_quantity(self,array):
        for item in array:
            if item < 1:
                return False
        
        return True
        
    
    def compute_quantity(self,materials):
        materials.sort(key=lambda x: x.get_name(), reverse=True)

        item_stack = []

        for avail_item in materials:
            for req_item in self.required_materials:
                if avail_item.get_name() == req_item.get_name():
                    item_stack.append(avail_item.get_amount() + 1)
        
        total_items = 0
        
        while(self.check_quantity(item_stack)):
            for i in range(len(item_stack)):
                if(self.check_quantity(item_stack) == False):
                    return total_items
                item_stack[i] = item_stack[i] - self.item_ratio[i]

            if(self.check_quantity(item_stack)):
                total_items+=1

        return total_items

    def craft(self, materials):
        materials.sort(key=lambda x: x.get_name(), reverse=True)

        if(len(materials) < len(self.required_materials)):
            raise ValueError("You lack the amount of materials needed to craft this item")

        for item in materials:
            if self.check_item(item) == False:
                raise ValueError(f"{item.get_name()} is a wrong material for this recipe")

        quantity = self.compute_quantity(materials)

        if quantity <= 0:
            raise ValueError("You lack the amount of materials needed to craft this item")

        quality_text = self.compute_quality(materials)

        return f"Successfully crafted a {quality_text} {self.name}"
        
class Material:

    def __init__(self, name, amount, quality):
        self.name = name
        self.amount = amount
        self.quality = quality
    
    def get_name(self):

        return self.name
    
    def get_amount(self):

        return self.amount
    
    def get_quality(self):

        return self.quality


# wood = Material('wood', 3, 1500)    
# iron = Material('iron', 1, 1500)    
 

# sword = Forge('Sword')

# materials = [wood, iron]

# sword.add_materials(wood)
# sword.add_materials(iron)


wood = Material('wood', 3, 1500)    
iron = Material('iron', 1, 1500)  

wood_2 = Material('wood', 3, 1500)    
iron_2 = Material('iron', 1, 1500)  

sword = Forge('Pan')

materials = [wood_2, iron_2]

sword.add_materials(wood)
sword.add_materials(iron)


# wood = Material('wood', 3, 1500)    
# iron = Material('iron', 1, 1500)    
# berries = Material('berries', 2, 1500)   


# wood1 = Material('wood', 9, 1500)    
# iron1 = Material('iron', 10, 1500)    
# berrie1 = Material('berries', 6, 1500)  
# sword = Forge('Sword')

# materials = [wood1, iron1, berrie1]

# sword.add_materials(wood)
# sword.add_materials(iron)
# sword.add_materials(berries)

print(sword.compute_quality(materials))
