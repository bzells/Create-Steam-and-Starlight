StartupEvents.registry('block', event => {
   
   
    event.create('aluminum_casing') // Create a new block
      .displayName('Aluminum Casing') // Set a custom name
      .soundType('wool') // Set a material (affects the sounds and some properties)
      .hardness(1.0) // Set hardness (affects mining time)
      .resistance(1.0) // Set resistance (to explosions, etc)
      //.tagBlock('my_custom_tag') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
      .requiresTool(false) // Requires a tool or it won't drop (see tags below)
      //.tagBlock('my_namespace:my_other_tag') // Tag the block with `#my_namespace:my_other_tag`
      .tagBlock('minecraft:mineable/axe') //can be mined faster with an axe
      .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
      //.tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
  
    event.create('aluminum_gravel')
        .displayName('Aluminum Gravel')
        .soundType('wool')
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(false)
        .tagBlock('minecraft:mineable/shovel')

      event.create('desh_casing')
      .displayName('Desh Casing')
      .soundType('wool')
      .hardness(1.0)
      .resistance(1.0)
      .requiresTool(false)
      .tagBlock('minecraft:mineable/pickaxe')
      .tagBlock('minecraft:mineable/axe')
  
    event.create('bewitched_gravel')
      .displayName('Bewitched Gravel')
      .soundType('wool')
      .hardness(1.0)
      .resistance(1.0)
      .requiresTool(false)
      .tagBlock('minecraft:mineable/shovel')

      event.create('oil_gravel')
      .displayName('Oil Gravel')
      .soundType('wool')
      .hardness(1.0)
      .resistance(1.0)
      .requiresTool(false)
      .tagBlock('minecraft:mineable/shovel')

      event.create('moon_gravel')
      .displayName('Moon Gravel')
      .soundType('wool')
      .hardness(1.0)
      .resistance(1.0)
      .requiresTool(false)
      .tagBlock('minecraft:mineable/shovel')

      event.create('martian_gravel')
      .displayName('Martian Gravel')
      .soundType('wool')
      .hardness(1.0)
      .resistance(1.0)
      .requiresTool(false)
      .tagBlock('minecraft:mineable/shovel')

      event.create('titanium_gravel')
      .displayName('Titanium Gravel')
      .soundType('wool')
      .hardness(1.0)
      .resistance(1.0)
      .requiresTool(false)
      .tagBlock('minecraft:mineable/shovel')

    event.create('steel_casing')
      .displayName('Steel Casing')
      .soundType('wool')
      .hardness(1.0)
      .resistance(1.0)
      .requiresTool(false)
      .tagBlock('minecraft:mineable/pickaxe')
      .tagBlock('minecraft:mineable/axe')

      event.create('obsidian_steel_casing')
      .displayName('Obsidian Steel Casing')
      .soundType('wool')
      .hardness(1.0)
      .resistance(1.0)
      .requiresTool(false)
      .tagBlock('minecraft:mineable/pickaxe')
      .tagBlock('minecraft:mineable/axe')

      event.create('tree_rubber_block')
        .displayName('Tree Rubber Block')
        .soundType('wool')
        .hardness(2.0)
        .resistance(2.0)
        .requiresTool(false)
        .tagBlock('minecraft:mineable/shovel')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:mineable/axe')

      event.create('redstone_alloy_block')
      .displayName('Redstone Alloy Block')
      .soundType('wool')
      .hardness(2.0)
      .resistance(2.0)
      .requiresTool(false)
      .tagBlock('minecraft:mineable/pickaxe')

    })

    