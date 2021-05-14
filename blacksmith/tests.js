describe('Scored Tests', () => {
    it('test___OO___Craft_sword', () => {
        const swordRecipe = new Forge('Iron Sword')

        swordRecipe.addMaterials(new Material('Iron', 3, 0))
        swordRecipe.addMaterials(new Material('Wood', 1, 0))

        const availMats = [

            new Material('Wood', 1, 200),
            new Material('Iron', 3, 300)
        ]

        assert.deepStrictEqual(swordRecipe.craft(availMats), 'Successfully crafted a Basic Iron Sword')
    }),


    it('test___OO___Craft_Pan', () => {
        const swordRecipe = new Forge('Iron Pan')

        swordRecipe.addMaterials(new Material('Iron', 3, 0))
        swordRecipe.addMaterials(new Material('Wood', 1, 0))
        swordRecipe.addMaterials(new Material('Brass', 4, 0))

        const availMats = [

            new Material('Wood', 1, 200),
            new Material('Iron', 3, 300),
            new Material('Brass', 4, 0)
            
        ]

        assert.deepStrictEqual(swordRecipe.craft(availMats), 'Successfully crafted a Basic Iron Pan')
    })

    it('test___OO_EH___Craft_Pan_Error', () => {
        const swordRecipe = new Forge('Iron Pan')

        swordRecipe.addMaterials(new Material('Iron', 3, 0))
        swordRecipe.addMaterials(new Material('Wood', 1, 0))


        const availMats = [

            new Material('Wood', 1, 200),
            new Material('Iron', 3, 300),
            new Material('Brass', 4, 0)
            
        ]

        assert.throws(() => {
            swordRecipe.craft(availMats)
          }, 'Brass is a wrong material for this recipe')
    })

    it('test___OO_EH___Craft_Pan_Error_item_amount', () => {
        const swordRecipe = new Forge('Iron Pan')

        swordRecipe.addMaterials(new Material('Iron', 3, 0))
        swordRecipe.addMaterials(new Material('Wood', 1, 0))


        const availMats = [

            new Material('Wood', 1, 200),
            new Material('Iron', 1, 300)
            
        ]

        assert.throws(() => {
            swordRecipe.craft(availMats)
          }, 'You lack the amount of materials needed to craft this item')
    })

    it('test___CS_DS___Craft_sword_quality_1', () => {
        const swordRecipe = new Forge('Iron Sword')

        swordRecipe.addMaterials(new Material('Iron', 3, 0))
        swordRecipe.addMaterials(new Material('Wood', 1, 0))

        const availMats = [

            new Material('Wood', 1, 200),
            new Material('Iron', 3, 300)
        ]

        assert.deepStrictEqual(swordRecipe.computeQuality(availMats), 'Basic')
    }),

    it('test___CS_DS___Craft_sword_quality_2', () => {
        const swordRecipe = new Forge('Iron Sword')

        swordRecipe.addMaterials(new Material('Iron', 3, 0))
        swordRecipe.addMaterials(new Material('Wood', 1, 0))

        const availMats = [

            new Material('Wood', 1, 9000),
            new Material('Iron', 3, 300)
        ]

        assert.deepStrictEqual(swordRecipe.computeQuality(availMats), 'Legendary')
    }),

    it('test___SE_DS___Craft_sword_quantity', () => {
        const swordRecipe = new Forge('Iron Sword')

        swordRecipe.addMaterials(new Material('Iron', 3, 0))
        swordRecipe.addMaterials(new Material('Wood', 1, 0))

        const availMats = [

            new Material('Wood', 3, 200),
            new Material('Iron', 9, 300)
        ]

        assert.deepStrictEqual(swordRecipe.computeQuantity(availMats), 3)
    })


    

})