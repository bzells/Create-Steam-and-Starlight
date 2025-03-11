ServerEvents.recipes(event => 
  {

    let air = 'minecraft:air';

    
    event.recipes.create.mixing(['kubejs:obsidian_steel_dust'], ['2x kubejs:steel_dust', '2x create:powdered_obsidian']).heated()

	event.recipes.create.mixing([Fluid.of('ad_astra:oil',100),'kubejs:crushed_rare_earth','19x kubejs:grain_of_carbon',Item.of('kubejs:grain_of_carbon', 3).withChance(0.3),Item.of('kubejs:crushed_rare_earth', 2).withChance(0.03)], ['kubejs:oil_gravel']).heated()
	event.recipes.create.mixing([Fluid.of('ad_astra:oil',120),'2x kubejs:crushed_rare_earth','22x kubejs:grain_of_carbon',Item.of('kubejs:grain_of_carbon', 3).withChance(0.5),Item.of('kubejs:crushed_rare_earth', 3).withChance(0.08)], ['kubejs:oil_gravel']).superheated()

    event.recipes.create.mixing('kubejs:hot_obsidian_steel_ingot', ['kubejs:obsidian_steel_dust', Fluid.lava(100)]).heated()
    event.recipes.create.mixing('2x kubejs:hot_obsidian_steel_ingot', ['kubejs:steel_ingot','minecraft:obsidian', Fluid.lava(25)]).superheated()
    event.recipes.create.splashing('kubejs:obsidian_steel_ingot', 'kubejs:hot_obsidian_steel_ingot')
    // rocket fuel

	event.recipes.create.mixing(Fluid.of('ad_astra:fuel',100), ['create:blaze_cake','minecraft:obsidian', Fluid.of('ad_astra:oil',1000)]).superheated()

    event.recipes.create.compacting(Fluid.of('kubejs:liquid_rubber', 150), ['kubejs:tree_sap','minecraft:slime_block']).heated()

    event.recipes.create.mixing(['kubejs:oil_gravel'], ['kubejs:aluminum_gravel', 'minecraft:diamond', '2x kubejs:carbon_dust']).superheated()
    

    let inter = 'kubejs:incomplete_advanced_electron_tube' // making a variable to store the transitional item makes the code more readable
	event.recipes.create.sequenced_assembly([
		Item.of('2x kubejs:advanced_electron_tube').withChance(50.0), // this is the item that will appear in JEI as the result
		Item.of('kubejs:obisdian_steel_dust').withChance(10.0), // the rest of these items will be part of the scrap
		Item.of('kubejs:diamond').withChance(2.0)
	], 'kubejs:obsidian_steel_sheet', [ // 'minecraft:flowering_azalea_leaves' is the input
		// the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
		event.recipes.createPressing(inter, inter),
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying(inter, [inter, 'kubejs:carbon_ingot']),
		event.recipes.createFilling(inter, [inter, Fluid.lava(100)]),
		event.recipes.createDeploying(inter, [inter, 'kubejs:rubber_sheet']),
		event.recipes.createPressing(inter, inter),
		event.recipes.createDeploying(inter, [inter, 'minecraft:glass_pane'])
	]).transitionalItem(inter).loops(3) // set the transitional item and the number of loops

	event.shaped(
		Item.of('create:shaft', 32), // arg 1: output
		[
		  'XAX',
		  'XAX', // arg 2: the shape (array of strings)
		  'XXX'
		],
		{
		  A: 'kubejs:obsidian_steel_ingot',
		  X: air
		}
	  )
	  event.shaped(
		Item.of('onlyhammersandexcavators:obsidian_hammer', 1), // arg 1: output
		[
		  'BBX',
		  'BBA', // arg 2: the shape (array of strings)
		  'BBX'
		],
		{
		  A: 'minecraft:stick',
		  B: 'kubejs:obsidian_steel_sheet',
		  X: air
		}
	  )

	  event.remove({output: ['endertanks:ender_tank','enderchests:ender_chest']
	  })

	  event.shaped(
		Item.of('endertanks:ender_tank', 2), // arg 1: output
		[
		  'BEB',
		  'ACA', // arg 2: the shape (array of strings)
		  'BDB'
		],
		{
		  A: '#minecraft:wool',
		  B: 'kubejs:obsidian_steel_sheet',
		  C: 'kubejs:obsidian_steel_casing',
		  D: 'inventorypets:pet_enderman',
		  E: 'create:fluid_tank',
		  X: air
		}
	)
	event.shaped(
		Item.of('enderchests:ender_chest', 2), // arg 1: output
		[
		  'BEB',
		  'ACA', // arg 2: the shape (array of strings)
		  'BDB'
		],
		{
		  A: '#minecraft:wool',
		  B: 'kubejs:obsidian_steel_sheet',
		  C: 'kubejs:desh_casing',
		  D: 'inventorypets:pet_enderman',
		  E: 'create:item_vault',
		  X: air
		}
	  )

  }
)