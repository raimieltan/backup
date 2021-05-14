def test___OO___craft_sword(self):
    wood = Material('wood', 3, 1500)    
    iron = Material('iron', 1, 1500)    
     
    
    sword = Forge('Sword')
    
    materials = [wood, iron]
    
    sword.add_materials(wood)
    sword.add_materials(iron)


    self.assertEqual(sword.craft(materials),"Successfully crafted a Rare Sword")
    

def test___OO___craft_pan(self):
    wood = Material('wood', 3, 1500)    
    iron = Material('iron', 1, 1500)  
    brass = Material('brass', 4, 1500)  
     
    
    sword = Forge('Pan')
    
    materials = [wood, iron, brass]
    
    sword.add_materials(wood)
    sword.add_materials(iron)
    sword.add_materials(brass)


    self.assertEqual(sword.craft(materials),"Successfully crafted a Rare Pan")
    
    
def test___OO_EH___craft_1(self):
    wood = Material('wood', 3, 1500)    
    iron = Material('iron', 1, 1500)  
    brass = Material('brass', 4, 1500)  
     
    
    pan = Forge('Pan')
    
    materials = [wood, iron, brass]
    
    pan.add_materials(wood)
    pan.add_materials(iron)
    
    with self.assertRaisesRegex(ValueError, 'brass is a wrong material for this recipe'):
        pan.craft(materials)
        
def test___OO_EH___craft_2(self):
    wood = Material('wood', 3, 1500)    
    iron = Material('iron', 1, 1500)  
    
    wood_2 = Material('wood', 1, 1500)    
    iron_2 = Material('iron', 1, 1500)  
    
    sword = Forge('Pan')
    
    materials = [wood_2, iron_2]
    
    sword.add_materials(wood)
    sword.add_materials(iron)
    
    with self.assertRaisesRegex(ValueError, 'You lack the amount of materials needed to craft this item'):
        sword.craft(materials)
        
        
def test___CS_DS___craft_sword_quality(self):
    wood = Material('wood', 3, 1500)    
    iron = Material('iron', 1, 1500)  
    brass = Material('brass', 4, 1500)  
     
    
    sword = Forge('Pan')
    
    materials = [wood, iron, brass]
    
    sword.add_materials(wood)
    sword.add_materials(iron)
    sword.add_materials(brass)


    self.assertEqual(sword.compute_quality(materials),"Rare")
    
def test___CS_DS___craft_sword_quality_2(self):
    wood = Material('wood', 3, 1500)    
    iron = Material('iron', 1, 1500)  
    brass = Material('brass', 4, 99500)  
     
    
    sword = Forge('Pan')
    
    materials = [wood, iron, brass]
    
    sword.add_materials(wood)
    sword.add_materials(iron)
    sword.add_materials(brass)


    self.assertEqual(sword.compute_quality(materials),"Legendary")
    