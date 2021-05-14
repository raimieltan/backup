<?php
  class Forge {

    public $name;


    function __construct($name){
        $this->name = $name;
        $this->required_materials = [];
        $this->item_ratio = [];

    }

    function add_materials($material){
        array_push($this->required_materials, $material);
        usort($this->required_materials, function($a, $b) {return strcmp($a->get_name(), $b->get_name());});
        array_push($this->item_ratio, $material->get_amount());
    }

    function check_item($item){
        foreach ($this->required_materials as $mat_item){
            if($item->get_name() == $mat_item->get_name()){
                return true;
            }
        }

        return false;
    }

    function compute_quality($materials){
        usort($materials, function($a, $b) {return strcmp($a->get_name(), $b->get_name());});
        
        $quality_points = 0;

        foreach($materials as $item){
            $quality_points  = $quality_points + $item->get_quality();
        }

        if($quality_points >= 5000){
            return "Legendary";
        }
        else if($quality_points >= 3000){
            return "Rare";
        }
        else {
            return "Basic";
        }


    }

    function check_quantity($array) {
        foreach($array as $x){
            if($x < 1){
                return false;
            }

        }

        return true;
    }

    function compute_quantity($materials){
        usort($materials, function($a, $b) {return strcmp($a->get_name(), $b->get_name());});
        
        $item_stack = [];

        foreach($materials as $avail_item){
            foreach($this->required_materials as $req_item){
                if($avail_item->get_name() == $req_item->get_name()){
                    array_push($item_stack, $avail_item->get_amount() + 1);
                }
            }
        }

        $total_items = 0;

        while($this->check_quantity($item_stack) == true){

            for ($i = 0; $i < count($item_stack); $i++) {
                if($this->check_quantity($item_stack) == false){
                    return $total_items;
                }

                $item_stack[$i] = $item_stack[$i] - $this->item_ratio[$i];

            }

            if($this->check_quantity($item_stack)){
                $total_items = $total_items+1;
            }


        }

        return $total_items;
    }

    function craft($materials){
        usort($materials, function($a, $b) {return strcmp($a->get_name(), $b->get_name());});
        
        if(count($materials) < count($this->required_materials)){
            throw new Exception("You lack the amount of materials need to craft this item");
        }

        foreach($materials as $item){
            if($this->check_item($item) == false){
                $item_name = $item->get_name();
                throw new Error("${item_name} is a wrong material for this recipe");
            }
        } 

        $quantity = $this->compute_quantity($materials);

        if($quantity <= 0){
            throw new Error("You lack the amount of materials needed to craft this item");
        }

        $quality_text = $this->compute_quality($materials);
        $crafted_name = $this->name;

        return "Successfully crafted a ${quality_text} ${crafted_name}";
    }

  }


  class Material {
      public $name;
      public $amount;
      public $quality;

      function __construct($name, $amount, $quality) {
          $this->name = $name;
          $this->amount = $amount;
          $this->quality = $quality;
      }

      function get_name(){
          return $this->name;
      }

      function get_amount(){
          return $this->amount;
      }

      function get_quality(){
          return $this->quality;
      }


  }

  $apple = new Material("Apple", 5, 10);
  $banana = new Material("Banana", 5, 10);
  $carrot = new Material("carrot", 5, 10);

  $salad = new Forge("Fruit salad");

  $materials = array(
    new Material("Apple", 20, 121312310),
    new Material("Banana", 323, 10),
    new Material("carrot", 2131, 10)
);
  
  $salad->add_materials($banana);

  $salad->add_materials($carrot);
  $salad->add_materials($apple);





  echo $salad->craft($materials)


  ?>