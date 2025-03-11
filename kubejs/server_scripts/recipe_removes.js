// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => 
{

// hammers
event.remove(['onlyhammersandexcavators:iron_hammer','onlyhammersandexcavators:gold_hammer','onlyhammersandexcavators:lapis_hammer'
  ,'onlyhammersandexcavators:redstone_hammer','onlyhammersandexcavators:emerald_hammer','onlyhammersandexcavators:obsidian_hammer','onlyhammersandexcavators:netherite_hammer'
])

event.remove('tfmg:aluminum_ingot')
event.remove('tfmg:steel_ingot')

event.remove('create:crafting/appliances/slime_ball')
event.recipes.create.mixing(['2x kubejs:grass_clippings','2x minecraft:stick',Fluid.water(10)],['#minecraft:saplings'])
event.recipes.create.mixing(['2x minecraft:slime_ball'],['create:dough', 'kubejs:grass_clippings'])


event.remove('create:crafting/materials/andesite_alloy')
event.remove('create:crafting/materials/andesite_alloy_from_zinc')
event.remove('create:mixing/andesite_alloy')
event.remove('create:mixing/andesite_alloy_from_zinc')

event.remove('minecraft:stone_pickaxe')
event.shaped(
  Item.of('minecraft:stone_pickaxe', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'CDC'
  ],
  {
    A: 'kubejs:stone_alloy_ingot',
    B: 'minecraft:cobblestone',  //arg 3: the mapping object
    C: 'minecraft:air',
    D: 'minecraft:stick'
  }
)
event.remove('minecraft:iron_pickaxe')
event.shaped(
  Item.of('minecraft:iron_pickaxe', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'CDC'
  ],
  {
    A: 'create:iron_sheet',
    B: 'create:andesite_alloy',  //arg 3: the mapping object
    C: 'minecraft:air',
    D: 'minecraft:stick'
  }
)


event.shaped(
  Item.of('kubejs:stone_alloy_ingot', 2), // arg 1: output
  [
    'ABX',
    'BAX', // arg 2: the shape (array of strings)
    'XXX'
  ],
  {
    A: 'minecraft:cobblestone',
    B: 'minecraft:gravel',
    X: 'minecraft:air'  //arg 3: the mapping object
  }
)
event.remove('minecraft:chest')
event.shaped(
    Item.of('minecraft:chest', 2), // arg 1: output
    [
      'ABA',
      'BCB', // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: '#minecraft:planks',
      B: 'minecraft:stick',  //arg 3: the mapping object
      C: 'kubejs:stone_alloy_ingot'
    }
)

event.remove('create:crafting/kinetics/hand_crank')
event.shaped(
    Item.of('create:hand_crank', 1), // arg 1: output
    [
      'CCC',
      'BAA', // arg 2: the shape (array of strings)
      'BCC'
    ],
    {
      A: '#minecraft:planks',
      B: 'kubejs:stone_alloy_ingot',  //arg 3: the mapping object
      C: 'minecraft:air'

    }
)

event.remove('create:crafting/kinetics/depot')
event.shaped(
  Item.of('create:depot', 1), // arg 1: output
  [
    'BBB',
    'AAA', // arg 2: the shape (array of strings)
    'CCC'
  ],
  {
    A: '#minecraft:planks',
    B: 'kubejs:stone_alloy_ingot',  //arg 3: the mapping object
    C: 'minecraft:air'

  }
)
event.remove('create:crafting/kinetics/basin')
event.shaped(
  Item.of('create:basin', 1), // arg 1: output
  [
    'XXX',
    'AXA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'create:iron_sheet',
    X: 'minecraft:air',  //arg 3: the mapping object

  }
)
event.remove('create:crafting/kinetics/encased_fan')
event.shaped(
  Item.of('create:encased_fan', 1), // arg 1: output
  [
    'ABA',
    'ADA', // arg 2: the shape (array of strings)
    'ACA'
  ],
  {
    A: 'kubejs:stone_alloy_ingot',
    B: 'create_sa:fan_component',  //arg 3: the mapping object
    C: 'kubejs:redstone_alloy_ingot',
    D: 'create:andesite_casing'

  }
)
//MISC
event.remove(['sophisticatedstorage:acacia_chest','sophisticatedstorage:dark_oak_chest','sophisticatedstorage:birch_chest','sophisticatedstorage:oak_chest','sophisticatedstorage:cherry_chest','sophisticatedstorage:mangrove_chest','sophisticatedstorage:crimson_chest','sophisticatedstorage:warped_chest','sophisticatedstorage:spruce_chest','sophisticatedstorage:jungle_chest','sophisticatedstorage:bamboo_chest','sophisticatedstorage:mangrove_chest'])

event.remove('sophisticatedbackpacks:backpack')
event.shaped(
  Item.of('sophisticatedbackpacks:backpack', 1), // arg 1: output
  [
    'XCX',
    'ABA', // arg 2: the shape (array of strings)
    'CXC'
  ],
  {
    A: 'minecraft:leather',
    B: '#forge:chests',  //arg 3: the mapping object
    C: 'create:andesite_alloy',
    X: 'minecraft:air'

  }
)
event.recipes.create.mixing('create:andesite_alloy',['kubejs:stone_alloy_ingot','minecraft:andesite','2x minecraft:iron_nugget'])
event.recipes.create.mixing('4x kubejs:stone_alloy_ingot',['minecraft:cobblestone','minecraft:gravel'])
event.recipes.create.mixing('2x kubejs:crushed_rare_earth',['minecraft:clay_ball','minecraft:redstone'])
//CREATE MISC KINETICS
event.remove(['create:crafting/kinetics/belt_connector','create:crafting/logistics/andesite_funnel','create:crafting/kinetics/gearbox','create:crafting/kinetics/vertical_gearbox'])
event.shaped(
  Item.of('create:belt_connector', 8), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'XXX'
  ],
  {
    A: 'minecraft:dried_kelp',  //arg 3: the mapping object
    B: 'kubejs:redstone_alloy_ingot',
    X: 'minecraft:air'

  }
)
event.shaped(
  Item.of('create:andesite_funnel', 3), // arg 1: output
  [
    'ACA',
    'ABA', // arg 2: the shape (array of strings)
    'XXX'
  ],
  {
    A: 'create:andesite_alloy',  //arg 3: the mapping object
    B: 'minecraft:dried_kelp',
    C: 'kubejs:redstone_alloy_ingot',
    X: 'minecraft:air'

  }
)
event.shaped(
  Item.of('create:gearbox', 2), // arg 1: output
  [
    'ACA',
    'CBC', // arg 2: the shape (array of strings)
    'ACA'
  ],
  {
    A: 'create:andesite_alloy',  //arg 3: the mapping object
    B: 'create:andesite_casing',
    C: 'create:cogwheel',
    X: 'minecraft:air'

  }
)
//CREATE STRESS UNIT MAKERS
event.remove(['create:crafting/kinetics/water_wheel','create:crafting/kinetics/large_water_wheel'])
event.shaped(
  Item.of('create:large_water_wheel', 1), // arg 1: output
  [
    'ACA',
    'CDC', // arg 2: the shape (array of strings)
    'ACA'
  ],
  {
    A: 'create:andesite_alloy',  //arg 3: the mapping object
    C: '#minecraft:planks',
    D: 'create:andesite_casing'

  }
)
// ALL WASHING


event.smelting('kubejs:chicken_nugget', 'kubejs:raw_chicken_nugget')
event.recipes.create.milling(['2x kubejs:ground_chicken','minecraft:bone_meal'], 'minecraft:chicken')
event.recipes.create.milling('4x kubejs:bread_crumbs', 'minecraft:bread')
event.recipes.create.mixing('8x kubejs:raw_chicken_nugget', ['kubejs:ground_chicken','kubejs:bread_crumbs'])

}
)