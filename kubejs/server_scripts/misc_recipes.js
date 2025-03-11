ServerEvents.recipes(event => 
  {

    let air = 'minecraft:air';

    //enchanted books
    event.custom({
      type: 'create:mixing',
      ingredients:[
        {item: 'minecraft:lapis_lazuli', count: 7},
        {item: 'minecraft:diamond',count: 7},
        {item: 'minecraft:book',count: 1}
      ],
      results:[{
        type: "minecraft:item_nbt",
        item: "minecraft:enchanted_book",
        nbt: {
          StoredEnchantments: [
            {
              id: 'minecraft:fortune',
              lvl: 5
            }
          ]
        }
    }]
    })




    //artifacts
    
    event.shaped(
      Item.of('artifacts:lucky_scarf', 1), // arg 1: output
      [
        'ABA',
        'BCB', // arg 2: the shape (array of strings)
        'ABA'
      ],
      {
        A: 'minecraft:emerald',
        B: 'minecraft:gold_ingot',  //arg 3: the mapping object
        C: 'minecraft:diamond_block'
      }
    )

    //hammers

    event.remove(['onlyhammersandexcavators:wooden_hammer','onlyhammersandexcavators:stone_hammer','onlyhammersandexcavators:diamond_hammer'])

    event.shaped(
      Item.of('onlyhammersandexcavators:iron_hammer', 1), // arg 1: output
      [
        'AAX',
        'AAD', // arg 2: the shape (array of strings)
        'AAX'
      ],
      {
        A: 'create:iron_sheet',  //arg 3: the mapping object
        D: 'minecraft:stick',
        X: air
      }
    )
    event.shaped(
      Item.of('onlyhammersandexcavators:diamond_hammer', 1), // arg 1: output
      [
        'AAX',
        'AAD', // arg 2: the shape (array of strings)
        'AAX'
      ],
      {
        A: 'kubejs:diamond_sheet',  //arg 3: the mapping object
        D: 'minecraft:stick',
        X: air
      }
    )
  }
)