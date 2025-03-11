ServerEvents.recipes(event => 
  {

    let air = 'minecraft:air';



    event.smelting('kubejs:raw_slime_rubber','minecraft:slime_ball')
    event.smelting('kubejs:slime_rubber_ball','kubejs:raw_slime_rubber')

    event.recipes.create.pressing('2x kubejs:slime_rubber_sheet', 'kubejs:slime_rubber_ball')

    

    event.recipes.create.sandpaper_polishing('3x kubejs:slime_rubber_ring', 'kubejs:slime_rubber_sheet')

    event.remove('create:crafting/kinetics/mechanical_pump')
    event.shaped(
      Item.of('create:mechanical_pump', 2), // arg 1: output
      [
        'XCX',
        'XBX', // arg 2: the shape (array of strings)
        'XAX'
      ],
      {
        A: 'create:fluid_pipe',
        B: 'create:cogwheel',
        C: '#forge:rubber_sheet',
        X: air
      }
    )

    event.shaped(
      Item.of('create:shaft', 12), // arg 1: output
      [
        'XAX',
        'XAX', // arg 2: the shape (array of strings)
        'XXX'
      ],
      {
        A: 'kubejs:aluminum_ingot',
        X: air
      }
    )

    event.remove('createaddition:crafting/rolling_mill')
    event.shaped(
      Item.of('createaddition:rolling_mill', 1), // arg 1: output
      [
        'CAC',
        'CAC', // arg 2: the shape (array of strings)
        'XBX'
      ],
      {
        A: 'create:shaft',
        B: 'kubejs:aluminum_casing',
        C: 'kubejs:aluminum_sheet',
        X: air
      }
    )

    event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'create:andesite_casing' },
        { item: 'kubejs:aluminum_ingot' }
      ],
      results: [
        { item: 'kubejs:aluminum_casing' }
      ]
    })
    event.remove({output: ['create:mechanical_drill','create:mechanical_saw','create:mechanical_harvester']})
    event.shaped(
      Item.of('create:mechanical_drill', 1), // arg 1: output
      [
        'XCX',
        'CAC', // arg 2: the shape (array of strings)
        'XBX'
      ],
      {
        A: 'create:andesite_alloy',
        B: 'kubejs:aluminum_casing',
        C: 'create:iron_sheet',
        X: air
      }
    )
    event.shaped(
      Item.of('create:mechanical_saw', 1), // arg 1: output
      [
        'XCX',
        'CAC', // arg 2: the shape (array of strings)
        'XBX'
      ],
      {
        A: 'kubejs:stone_alloy_ingot',
        B: 'kubejs:aluminum_casing',
        C: 'create:iron_sheet',
        X: air
      }
    )
    event.shaped(
      Item.of('create:mechanical_harvester', 1), // arg 1: output
      [
        'ACA',
        'CAC', // arg 2: the shape (array of strings)
        'XBX'
      ],
      {
        A: 'kubejs:stone_alloy_ingot',
        B: 'kubejs:aluminum_casing',
        C: 'create:iron_sheet',
        X: air
      }
    )

    event.shaped(
      Item.of('create:millstone', 1), // arg 1: output
      [
        'ACA',
        'DBD', // arg 2: the shape (array of strings)
        'ACA'
      ],
      {
        A: 'kubejs:stone_alloy_ingot',
        B: 'kubejs:aluminum_casing',
        C: 'create:andesite_alloy',
        D: 'create:cogwheel',
        X: air
      }
    )
  }
)