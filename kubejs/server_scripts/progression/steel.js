ServerEvents.recipes(event => 
  {

    let air = 'minecraft:air';

    event.recipes.create.mixing('kubejs:steel_ingot', ['kubejs:carbon_dust', Fluid.lava(100),'minecraft:iron_ingot']).heated()
    event.remove({output: 'create:blaze_burner'})
    event.recipes.create.crushing(['8x kubejs:grain_of_carbon'], 'minecraft:charcoal')
    event.recipes.create.milling(['8x kubejs:grain_of_carbon'], 'minecraft:coal')
    event.recipes.create.milling(['8x kubejs:grain_of_iron'], 'minecraft:iron_ingot')
    event.recipes.create.milling(['kubejs:steel_dust'], 'kubejs:steel_ingot')
    event.smelting('kubejs:steel_ingot', 'kubejs:steel_dust')
    event.recipes.create.pressing('kubejs:steel_sheet', 'kubejs:steel_ingot')

    event.recipes.create.compacting(['minecraft:diamond',Item.of('minecraft:diamond').withChance(.20)], Item.of('kubejs:carbon_dust',64)).heated()
    event.recipes.create.compacting(['minecraft:diamond',Item.of('minecraft:diamond').withChance(.60)], Item.of('kubejs:carbon_dust',32)).superheated()

    event.recipes.create.compacting(['kubejs:tree_sap', Item.of('5x kubejs:tree_sap').withChance(.5), Fluid.of('minecraft:water', 50)], '8x #minecraft:logs').superheated()

    event.recipes.create.filling('kubejs:rubber_sheet', [Fluid.of('kubejs:liquid_rubber', 250), 'kubejs:slime_rubber_sheet'])
    event.recipes.create.filling('kubejs:rubber_ring', [Fluid.of('kubejs:liquid_rubber', 150), 'kubejs:slime_rubber_ring'])

    event.recipes.create.compacting('kubejs:carbon_dust', '9x kubejs:grain_of_carbon')
    event.recipes.create.mixing('kubejs:hot_carbon_ingot', ['kubejs:carbon_dust', Fluid.lava(100)]).superheated()
    event.recipes.create.splashing('kubejs:carbon_ingot', ['kubejs:hot_carbon_ingot'])

    event.remove('createaddition:crafting/small_connector_copper')
    event.remove('createaddition:crafting/large_connector_electrum')
    event.remove('createaddition:crafting/large_connector_gold')
    event.remove('createaddition:crafting/spool')
    event.remove('createaddition:mechanical_crafting/alternator')
    event.remove('create_new_age:shaped/basic_motor')
    event.remove('create_new_age:shaped/basic_motor_extension')
    event.remove('create:crafting/kinetics/cart_assembler')
    event.remove('create:crafting/kinetics/super_glue')
    event.shaped(
      Item.of('create:super_glue', 1), // arg 1: output
      [
        'ABX',
        'CAX', // arg 2: the shape (array of strings)
        'XXX'
      ],
      {
        A: 'minecraft:slime_ball',
        B: 'kubejs:steel_sheet',
        C: 'kubejs:steel_nugget',
        X: air
      }
    )
    event.shaped(
      Item.of('create:cart_assembler', 1), // arg 1: output
      [
        'ABA',
        'CXC', // arg 2: the shape (array of strings)
        'XXX'
      ],
      {
        A: 'kubejs:steel_sheet',
        B: 'kubejs:redstone_alloy_ingot',
        C: 'create:brass_ingot',
        X: air
      }
    )
    event.shaped(
      Item.of('createaddition:spool', 8), // arg 1: output
      [
        'XAX',
        'XBX', // arg 2: the shape (array of strings)
        'XAX'
      ],
      {
        A: 'kubejs:slime_rubber_sheet',
        B: 'kubejs:slime_rubber_ring',
        X: air
      }
    )
    event.shaped(
      Item.of('createaddition:spool', 24), // arg 1: output
      [
        'XAX',
        'XBX', // arg 2: the shape (array of strings)
        'XAX'
      ],
      {
        A: 'kubejs:rubber_sheet',
        B: 'kubejs:rubber_ring',
        X: air
      }
    )
    event.shaped(
      Item.of('create_new_age:basic_motor_extension', 1), // arg 1: output
      [
        'CCC',
        'DDD', // arg 2: the shape (array of strings)
        'CCC'
      ],
      {
        C: 'kubejs:steel_sheet',
        D: 'createaddition:copper_spool',
      }
    )
    event.shaped(
      Item.of('create_new_age:basic_motor', 1), // arg 1: output
      [
        'CCC',
        'ABD', // arg 2: the shape (array of strings)
        'CCC'
      ],
      {
        A: 'kubejs:redstone_alloy_ingot',
        B: 'kubejs:steel_casing',
        C: 'kubejs:steel_sheet',
        D: 'createaddition:copper_spool',
      }
    )
    event.shaped(
      Item.of('createaddition:alternator', 1), // arg 1: output
      [
        'XCX',
        'DBD', // arg 2: the shape (array of strings)
        'XAX'
      ],
      {
        A: 'create:shaft',
        B: 'kubejs:steel_casing',
        C: 'kubejs:redstone_alloy_ingot',
        D: 'createaddition:copper_spool',
        X: '#forge:rubber_sheet'
      }
    )
    
    event.shaped(
      Item.of('createaddition:connector', 2), // arg 1: output
      [
        'XCX',
        'XBX', // arg 2: the shape (array of strings)
        'XAX'
      ],
      {
        A: 'kubejs:aluminum_sheet',
        B: 'kubejs:redstone_alloy_ingot',
        C: '#forge:rubber_ring',
        X: air
      }
    )
    
    
    event.recipes.create.mixing([Item.of('kubejs:grain_of_steel').withChance(0.9)], ['kubejs:grain_of_carbon', 'kubejs:grain_of_iron'])

    event.recipes.create.mixing('4x kubejs:redstone_alloy_ingot', ['kubejs:aluminum_ingot', 'minecraft:redstone','minecraft:copper_ingot']).heated()
    event.recipes.create.mixing('4x create:andesite_alloy', ['kubejs:aluminum_ingot', 'minecraft:andesite','2x minecraft:iron_nugget']).heated()

    event.custom({
      type: 'createaddition:charging',
          input: {
            item: "minecraft:gravel",
        count: 1
      },
      result:  {
        item: "kubejs:aluminum_gravel",
        count: 1,
      },
      energy: 1000,
      maxChargeRate: 500
    })


    event.recipes.create.splashing([Item.of('1x kubejs:aluminum_nugget').withChance(0.12),Item.of('3x minecraft:iron_nugget').withChance(0.24), Item.of('minecraft:flint').withChance(0.4)], 'kubejs:aluminum_gravel')

    event.shaped(
      Item.of('kubejs:steel_dust', 1), // arg 1: output
      [
        'AAA',
        'AAA', // arg 2: the shape (array of strings)
        'AAA'
      ],
      {
        A: 'kubejs:grain_of_steel',
      }
    )

    event.recipes.create.haunting('kubejs:bewitched_gravel', 'kubejs:aluminum_gravel')
    event.recipes.create.splashing([Item.of('1x minecraft:redstone').withChance(0.12),Item.of('2x minecraft:glowstone_dust').withChance(0.12), Item.of('minecraft:flint').withChance(0.4),Item.of('minecraft:blaze_powder', 2).withChance(0.3)], 'kubejs:bewitched_gravel')

    
    event.remove('create:crafting/kinetics/steam_engine')
    event.shaped(
      Item.of('create:steam_engine', 1), // arg 1: output
      [
        'XCX',
        'XBX', // arg 2: the shape (array of strings)
        'XAX'
      ],
      {
        A: 'create:mechanical_pump',
        B: 'kubejs:steel_sheet',
        C: 'create:golden_sheet',
        X: air
      }
    )

    event.shaped(
      Item.of('create:shaft', 16), // arg 1: output
      [
        'XAX',
        'XAX', // arg 2: the shape (array of strings)
        'XXX'
      ],
      {
        A: 'kubejs:steel_ingot',
        X: air
      }
    )

 
    event.remove('create:crafting/kinetics/brass_hand')
    event.remove('create:crafting/kinetics/deployer')
    event.remove('create:crafting/materials/electron_tube');
    event.shaped(
      Item.of('create:deployer', 1), // arg 1: output
      [
        'XCX',
        'XAX', // arg 2: the shape (array of strings)
        'XBX'
      ],
      {
        A: 'create:brass_casing',
        B: 'create:brass_hand',
        C: 'kubejs:redstone_alloy_ingot',
        X: air
      }
    )
    event.shaped(
      Item.of('create:electron_tube', 2), // arg 1: output
      [
        'XCX',
        'XAX', // arg 2: the shape (array of strings)
        'XBX'
      ],
      {
        A: '#forge:rubber_ring',
        B: 'kubejs:aluminum_sheet',
        C: 'create:polished_rose_quartz',
        X: air
      }
    )
    event.shaped(
      Item.of('create:electron_tube', 1), // arg 1: output
      [
        'XCX',
        'XAX', // arg 2: the shape (array of strings)
        'XBX'
      ],
      {
        A: '#forge:rubber_ring',
        B: 'create:iron_sheet',
        C: 'create:polished_rose_quartz',
        X: air
      }
    )
    event.shaped(
      Item.of('create:brass_hand', 1), // arg 1: output
      [
        'XAX',
        'BBB', // arg 2: the shape (array of strings)
        'XBX'
      ],
      {
        A: '#forge:rubber_ring',
        B: 'create:brass_sheet',
        X: air
      }
    )

    event.remove({output:  'create:empty_blaze_burner'})
    event.shaped(
      Item.of('create:empty_blaze_burner', 1), // arg 1: output
      [
        'XBX',
        'BAB', // arg 2: the shape (array of strings)
        'XBX'
      ],
      {
        A: 'minecraft:netherrack',
        B: 'kubejs:steel_sheet',
        X: air
      }
    )

    event.shaped(
      Item.of('minecraft:blaze_spawn_egg', 2), // arg 1: output
      [
        '   ',
        'BAB', // arg 2: the shape (array of strings)
        '   '
      ],
      {
        A: 'inventorypets:pet_blaze',
        B: 'minecraft:egg'
      }
    )

    event.remove({output: 'createaddition:tesla_coil'})
    event.shaped(
      Item.of('createaddition:tesla_coil', 1), // arg 1: output
      [
        'DBD',
        'BAB', // arg 2: the shape (array of strings)
        'DCD'
      ],
      {
        A: 'createaddition:connector',
        B: 'create:brass_sheet',
        C: 'create:brass_casing',
        D: 'kubejs:aluminum_sheet'
      }
    )
    event.recipes.create.mechanical_crafting('2x create:crushing_wheel', [
      ' DDD ',
      'DABAD',
      'DBCBD',
      'DABAD',
      ' DDD '
    ], {
      D: 'kubejs:steel_ingot',
      A: 'create:andesite_alloy',
      B: 'kubejs:aluminum_sheet',
      C: 'kubejs:steel_casing'
    })

    event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'kubejs:aluminum_casing' },
        { item: 'kubejs:steel_ingot' }
      ],
      results: [
        { item: 'kubejs:steel_casing' }
      ]
    })

    event.custom({
      type: 'create:item_application',
      ingredients: [
        { item: 'kubejs:steel_casing' },
        { item: 'kubejs:obsidian_steel_ingot' }
      ],
      results: [
        { item: 'kubejs:obsidian_steel_casing' }
      ]
    })

    // generator coil recipes
    event.remove({output: ['create_new_age:generator_coil','create_new_age:carbon_brushes','create_new_age:redstone_magnet','create_new_age:layered_magnet']})

    event.recipes.create.mechanical_crafting('create_new_age:generator_coil', [
      ' D D ',
      'DABAD',
      ' BCB ',
      'DABAD',
      ' D D '
    ], {
      D: 'kubejs:carbon_ingot',
      A: 'kubejs:steel_sheet',
      B: 'kubejs:redstone_alloy_block',
      C: 'kubejs:steel_casing'
    })

    event.recipes.create.mechanical_crafting('create_new_age:carbon_brushes', [
      '     ',
      'DAAAD',
      ' BCB ',
      'DAAAD',
      '     '
    ], {
      D: 'kubejs:carbon_ingot',
      A: 'kubejs:steel_sheet',
      B: 'createaddition:copper_spool',
      C: 'kubejs:steel_casing'
    })

    event.shaped(
      Item.of('create_new_age:redstone_magnet', 3), // arg 1: output
      [
        'AAA',
        'ABA', // arg 2: the shape (array of strings)
        'AAA'
      ],
      {
        A: 'kubejs:redstone_alloy_block',
        B: 'create_new_age:magnetite_block'  //arg 3: the mapping object
      }
    )

  }
)