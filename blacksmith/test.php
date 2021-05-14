<?php
public function test___OO___craft_a_salad()
{
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


    $this->assertEquals(
        "Successfully crafted a Legendary Fruit salad",
         $salad->craft($materials)
    );
}

public function test___OO___craft_a_pan()
{
  $apple = new Material("Iron", 5, 10);
  $banana = new Material("Wood", 5, 10);
  $carrot = new Material("Brass", 5, 10);

  $pan = new Forge("Pan");

  $materials = array(
    new Material("Iron", 20, 121312310),
    new Material("Wood", 323, 10),
    new Material("Brass", 2131, 10)
);
  
  $pan->add_materials($banana);

  $pan->add_materials($carrot);
  $pan->add_materials($apple);


    $this->assertEquals(
        "Successfully crafted a Legendary Pan",
         $pan->craft($materials)
    );
}


public function test___OO_EH___Craft_Salad_Error_1()
{
  $apple = new Material("Apple", 5, 10);
  $banana = new Material("Banana", 5, 10);

  $salad = new Forge("Fruit salad");

  $materials = array(
    new Material("Apple", 20, 121312310),
    new Material("Banana", 323, 10),
    new Material("Carrot", 2131, 10)
);
  
  $salad->add_materials($banana);

  $salad->add_materials($carrot);
  $salad->add_materials($apple);


  $this->expectExceptionMessage('Carrot is a wrong material for this recipe');
  $salad->craft($materials);
}

public function test___OO_EH___Craft_Salad_Error_2()
{
  $apple = new Material("Apple", 5, 10);
  $banana = new Material("Banana", 5, 10);

  $salad = new Forge("Fruit salad");

  $materials = array(
    new Material("Apple", 1, 121312310),
    new Material("Banana", 1, 10)
);
  
  $salad->add_materials($banana);
  $salad->add_materials($apple);


  $this->expectExceptionMessage('You lack the amount of materials needed to craft this item');
  $salad->craft($materials);
}



public function test___CS_DS___Craft_salad_quality_1()
{
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


    $this->assertEquals(
        "Legendary",
         $salad->compute_quality($materials)
    );
}

public function test___CS_DS___Craft_sword_quality_2()
{
  $apple = new Material("Apple", 5, 10);
  $banana = new Material("Banana", 5, 10);
  $carrot = new Material("carrot", 5, 10);

  $salad = new Forge("Fruit salad");

  $materials = array(
    new Material("Apple", 20, 0),
    new Material("Banana", 323, 1),
    new Material("carrot", 2131, 3)
);
  
  $salad->add_materials($banana);

  $salad->add_materials($carrot);
  $salad->add_materials($apple);


    $this->assertEquals(
        "Basic",
         $salad->compute_quality($materials)
    );
}

public function test___SE_DS___Craft_sword_quantity()
{
  $apple = new Material("Apple", 5, 10);
  $banana = new Material("Banana", 5, 10);
  $carrot = new Material("carrot", 5, 10);

  $salad = new Forge("Fruit salad");

  $materials = array(
    new Material("Apple", 15, 121312310),
    new Material("Banana", 15, 10),
    new Material("carrot", 15, 10)
);
  
  $salad->add_materials($banana);

  $salad->add_materials($carrot);
  $salad->add_materials($apple);


    $this->assertEquals(
        3,
         $salad->compute_quantity($materials)
    );

}
?>