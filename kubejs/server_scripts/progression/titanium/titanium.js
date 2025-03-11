ServerEvents.recipes(event => 
  {

    let air = 'minecraft:air';

	event.shaped(
		Item.of('create:shaft', 64), // arg 1: output
		[
		  'XAX',
		  'XAX', // arg 2: the shape (array of strings)
		  'XXX'
		],
		{
		  A: 'kubejs:titanium_ingot',
		  X: air
		}
	  )

	event.recipes.create.splashing([Item.of('kubejs:crushed_desh').withChance(0.06),
		Item.of('kubejs:moon_dust').withChance(0.24),
		Item.of('6x minecraft:gold_nugget').withChance(0.24),
		Item.of('5x minecraft:iron_nugget').withChance(0.48),
		Item.of('7x create:zinc_nugget').withChance(0.72),
		Item.of('8x create:copper_nugget').withChance(0.72)],
		['kubejs:moon_gravel'])

	event.recipes.create.splashing([Item.of('ad_astra:ice_shard').withChance(0.06),
		Item.of('kubejs:moon_dust').withChance(0.24),
		Item.of('6x minecraft:gold_nugget').withChance(0.24),
		Item.of('5x minecraft:iron_nugget').withChance(0.48),
		Item.of('7x create:zinc_nugget').withChance(0.72),
		Item.of('8x create:copper_nugget').withChance(0.72)],
		['kubejs:martian_gravel'])

	event.recipes.create.mixing([Item.of('kubejs:moon_gravel').withChance(.88),
		Item.of('kubejs:moon_dust').withChance(.20),
		Fluid.of('kubejs:brew_of_luna',1000)
	],
		['kubejs:aluminum_gravel',Fluid.of('kubejs:brew_of_luna',1000)])

		event.recipes.create.mixing([Fluid.of('kubejs:brew_of_luna',100)
		],
			['8x kubejs:titanium_dust','8x kubejs:desh_dust',Fluid.of('ad_astra:fuel',50),Fluid.of('minecraft:water',100)]).superheated();


    event.remove({output: 'ad_astra:cryo_freezer'})
	let inter = 'kubejs:incomplete_desh_component' // making a variable to store the transitional item makes the code more readable
	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:desh_component').withChance(50.0), // this is the item that will appear in JEI as the result
		Item.of('kubejs:desh_sheet').withChance(10.0), // the rest of these items will be part of the scrap
		Item.of('create:brass_sheet').withChance(10.0)
	], 'kubejs:desh_sheet', [ // 'minecraft:flowering_azalea_leaves' is the input
		// the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
		event.recipes.createPressing(inter, inter),
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying(inter, [inter, 'create:brass_sheet']),
		event.recipes.createPressing(inter, inter),
		event.recipes.createDeploying(inter, [inter, 'kubejs:rubber_sheet']),
		event.recipes.createPressing(inter, inter),
		event.recipes.createDeploying(inter, [inter, 'kubejs:advanced_electron_tube']),
		event.recipes.createDeploying(inter, [inter, 'create:electron_tube'])
	]).transitionalItem(inter).loops(3) // set the transitional item and the number of loops

	event.shaped(
		Item.of('ad_astra:cryo_freezer', 1), // arg 1: output
		[
		  'CCC',
		  'BAB', // arg 2: the shape (array of strings)
		  'CCC'
		],
		{
		  A: 'kubejs:desh_casing',
		  B: 'kubejs:desh_component',
		  C: 'kubejs:desh_sheet',
		  X: air
		}
	  )
	  event.custom({
		type: 'create:item_application',
		ingredients: [
		  { item: 'kubejs:obsidian_steel_casing' },
		  { item: 'kubejs:desh_ingot' }
		],
		results: [
		  { item: 'kubejs:desh_casing' }
		]
	  })

	  event.remove({input: 'ad_astra:ice_shard'})
	  event.custom({
		type: 'ad_astra:cryo_freezing',
		cookingtime: 10,
		energy: 250,
		ingredient: 
		  { item: 'ad_astra:ice_shard' }
		,
		result: 
		  { fluid: 'ad_astra:cryo_fuel',
			millibuckets: 50,
		   }
		
	  })

// cryo freezer
  }
)