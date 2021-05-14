import java.util.ArrayList;
import java.util.Comparator;



import java.util.*;

class Forge {
    public String name;
    List<Integer> itemRatio = new ArrayList<Integer>();
    public List<Material> requiredMaterials = new ArrayList<Material>();

    public Forge(String name) {
        this.name = name;

    }

    public void addMaterials(Material material) {
        this.requiredMaterials.add(material);
        Collections.sort(this.requiredMaterials, Material.MatName);

        this.itemRatio.add(material.getAmount());


    }

    public boolean checkItem(Material item) {

        for (Material itemMaterial : this.requiredMaterials) {
            if (item.getName() == itemMaterial.getName()) {
                return true;
            }
        }

        return false;
    }

    public String computeQuality(List<Material> materials) {

        Collections.sort(materials, Material.MatName);
        int qualityPoints = 0;

        for (Material item : materials) {
            qualityPoints = qualityPoints + item.getQuality();
        }

        if (qualityPoints >= 5000) {
            return "Legendary";
        } else if (qualityPoints >= 3000) {
            return "Rare";
        }

        else {
            return "Basic";
        }

    }

    public boolean checkQuantity(List<Integer> array) {

        for (Integer x : array) {
            if (x < 1) {
                return false;
            }
        }
        return true;

    }

    public Integer computeQuantity(List<Material> materials) {
        Collections.sort(materials, Material.MatName);
        List<Integer> itemStack = new ArrayList<Integer>();

        for (Material availItem : materials) {
            for (Material reqItem : this.requiredMaterials) {
                if (availItem.getName() == reqItem.getName()) {
                    itemStack.add(availItem.getAmount() + 1);
                }
            }
        }

   

        Integer totalItems = 0;

        while(this.checkQuantity(itemStack)) {

            // System.out.println(itemStack.size());
            for (int i = 0; i < itemStack.size(); i++) {
              
                if (!this.checkQuantity(itemStack)) {
                    return totalItems;
                }
                
                itemStack.set(i, itemStack.get(i) - this.itemRatio.get(i));
            };

            if (this.checkQuantity(itemStack)) {
                totalItems++;
            }

        }       

        return totalItems;
    }

    public String craft(List<Material> materials){
        Collections.sort(materials, Material.MatName);

        if(materials.size() < this.requiredMaterials.size()){
            throw new IllegalArgumentException("You lack the amount of materials needed to craft this item");
        }

        for(Material item: materials){
            if(!this.checkItem(item)){
                throw new IllegalArgumentException(String.format("%s is a wrong material for this recipe", item.getName()));
            }
        }

        Integer quantity = this.computeQuantity(materials);

        if(quantity <= 0){
            throw new IllegalArgumentException("You lack the amount of materials needed to craft this item");

        }

        String qualityText = this.computeQuality(materials);

        return String.format("Successfully crafted a %s %s", qualityText, this.name);
    }

    // public static void main(String[] args) {
        // List<Material> availMaterial = new ArrayList<Material>();

        // Material stone = new Material("Stone", 3, 0);
        // Material wood = new Material("Wood", 1, 0);
       

        // Material stoneAvail = new Material("Stone", 12, 0);
        // Material woodAvail = new Material("Wood", 50,0);

        // availMaterial.add(stoneAvail);
        // availMaterial.add(woodAvail);


        // Forge sword = new Forge("Sword Cake");

        // sword.addMaterials(stone);
        // sword.addMaterials(wood);


        // System.out.println(sword.computeQuantity(availMaterial));
    // }
}

class Material {
    public String name;
    public Integer amount;
    public Integer quality;

    public Material(String name, Integer amount, Integer quality) {
        this.name = name;
        this.amount = amount;
        this.quality = quality;
    }

    public static Comparator<Material> MatName = new Comparator<Material>() {

        public int compare(Material i1, Material i2) {

            String nameNo1 = i1.getName();
            String nameNo2 = i2.getName();

            /* For ascending order */
            return nameNo1.compareTo(nameNo2);

            /* For descending order */
            // rollno2-rollno1;
        }
    };

    public String getName() {
        return name;
    }

    public Integer getAmount() {
        return amount;
    }

    public Integer getQuality() {
        return quality;
    }

}