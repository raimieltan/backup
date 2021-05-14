using System;
using System.Collections.Generic;

class Forge {
    public string name;
    public List<Material> requiredMaterials { set; get; }
    public List<int> itemRatio { set; get; }

    public Forge(string RecipeName){
       this.name = RecipeName;
       this.requiredMaterials = new List<Material>();
       this.itemRatio = new List<int>();
    }

    public void AddMaterials(Material material){
        this.requiredMaterials.Add(material);
        this.requiredMaterials.Sort((x, y) => x.GetName().CompareTo(y.GetName()));
        this.itemRatio.Add(material.GetAmount());
    }

    public bool CheckItem(Material item){
        foreach (Material itemMaterial in this.requiredMaterials){
            if(item.GetName() == itemMaterial.GetName()){
                return true;
            }
        }

        return false;
    }

    public string ComputeQuality(List<Material> materials) {
        materials.Sort((x, y) => x.GetName().CompareTo(y.GetName()));
        int qualityPoints = 0;

        foreach(Material item in this.requiredMaterials){
            qualityPoints = qualityPoints + item.GetQuality();
        }



        if(qualityPoints >= 5000 ){
            return "Legendary";
        }
        else if (qualityPoints >= 3000){
            return "Rare";
        }
        else {
            return "Basic";
        }

    }

    public bool CheckQuantity(List<int> array){
        foreach(int x in array){
            if(x < 1){
                return false;
            }
        }

        return true;
    }

    public int ComputeQuantity(List<Material> materials){
        materials.Sort((x, y) => x.GetName().CompareTo(y.GetName()));
        List<int> itemStack = new List<int>();

        foreach(Material availItem in materials){
            foreach(Material reqItem in this.requiredMaterials){
                if(availItem.GetName() == reqItem.GetName()){
                    itemStack.Add(availItem.GetAmount() + 1);
                }
            }
        }

        int totalItems = 0;

        while(this.CheckQuantity(itemStack)){
            for (int i = 0; i < itemStack.Count; i++) {
                if(!this.CheckQuantity(itemStack)){
                    return totalItems;
                }

                itemStack[i] = (itemStack[i] - this.itemRatio[i]);
           
            };

            if(this.CheckQuantity(itemStack)){
                totalItems+=1;
            }
        }

        return totalItems;
    }

    public String craft(List<Material> materials){
        materials.Sort((x, y) => x.GetName().CompareTo(y.GetName()));

        if(materials.Count < this.requiredMaterials.Count){
            throw new ArgumentException("You lack the amount of materials needed to craft this item");

        }

        foreach(Material item in materials){
            if(!this.CheckItem(item)){
                string itemName = item.GetName();
                throw new ArgumentException($"{itemName} is a wrong material for this recipe");
            }
        }

        int quantity = this.ComputeQuantity(materials);

        if(quantity <= 0){
            throw new ArgumentException("You lack the amount of materials needed to craft this item");

        }

        string qualityText = this.ComputeQuality(materials);

        return $"Successfully crafted a {qualityText} {this.name}";
    }


    

    static void Main(string[] args){
        Forge sword = new Forge("Bread Sword");
        Material bread = new Material("Bread", 5, 10000);
        Material breadMat = new Material("Bread", 5, 10000);
        List<Material> materials = new List<Material>();

        materials.Add(breadMat);
        sword.AddMaterials(bread);
        Console.WriteLine(sword.craft(materials));
  
    }


}

class Material {
    public string name;
    public int amount;
    public int quality;

    public Material(String name, int amount, int quality){
        this.name = name;
        this.amount = amount;
        this.quality = quality;
    }

    public String GetName(){
        return this.name;
    }

    public int GetAmount(){
        return this.amount;
    }

    public int GetQuality(){
        return this.quality;
    }
}