ServerEvents.recipes(event => 
  {

    let air = 'minecraft:air';

	//t1 rocket
	event.remove({type: "ad_astra:nasa_workbench"})
	event.remove({ output: ['ad_astra:rocket_nose_cone','ad_astra:rocket_fin','ad_astra:steel_tank','ad_astra:rocket_fin','ad_astra:steel_engine','ad_astra:nasa_workbench'] })

	event.recipes.create.mechanical_crafting('ad_astra:nasa_workbench', [
		' D D ',
		' ABA ',
		' BCB ',
		' ABA ',
		'     '
	  ], {
		D: 'kubejs:advanced_electron_tube',
		A: 'kubejs:steel_sheet',
		B: 'create:mechanical_crafter',
		C: 'kubejs:steel_casing'
	  })

	event.custom({type: "ad_astra:nasa_workbench",
  	ingredients: [
    {
      item: "ad_astra:rocket_nose_cone"
    },
    {
      item: "kubejs:rocket1_part_a"
    },
    {
      item: "kubejs:rocket1_part_a"
    },
    {
      item: "kubejs:rocket1_part_a"
    },
    {
      item: "kubejs:rocket1_part_a"
    },
    {
      item: "kubejs:rocket1_part_a"
    },
    {
      item: "kubejs:rocket1_part_a"
    },
    {
      item: "ad_astra:rocket_fin"
    },
    {
      item: "ad_astra:steel_tank"
    },
    {
      item: "ad_astra:steel_tank"
    },
    {
      item: "ad_astra:rocket_fin"
    },
    {
      item: "ad_astra:rocket_fin"
    },
    {
      item: "ad_astra:steel_engine"
    },
    {
      item: "ad_astra:rocket_fin"
    }
  ],
  result: {
    count: 1,
    id: "ad_astra:tier_1_rocket"
  }})

  let inter = 'kubejs:incomplete_advanced_electron_tube' // making a variable to store the transitional item makes the code more readable
	

	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:rocket1_part_a'), // this is the item that will appear in JEI as the result
	], 'create:railway_casing', [ // 'minecraft:flowering_azalea_leaves' is the input
		// the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
		event.recipes.createPressing(inter, inter),
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying(inter, [inter, 'kubejs:carbon_ingot']),
		event.recipes.createPressing(inter, inter),
		event.recipes.createDeploying(inter, [inter, 'kubejs:obsidian_steel_sheet']),
		event.recipes.createPressing(inter, inter),
	]).transitionalItem(inter).loops(10) // set the transitional item and the number of loops

	event.recipes.create.sequenced_assembly([
		Item.of('ad_astra:rocket_nose_cone'), // this is the item that will appear in JEI as the result
	], 'kubejs:steel_casing', [ // 'minecraft:flowering_azalea_leaves' is the input
		// the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
		event.recipes.createPressing(inter, inter),
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying(inter, [inter, 'kubejs:obsidian_steel_sheet']),
		event.recipes.createPressing(inter, inter),
		event.recipes.createDeploying(inter, [inter, 'kubejs:obsidian_steel_sheet']),
		event.recipes.createPressing(inter, inter),
		event.recipes.createDeploying(inter, [inter, 'kubejs:obsidian_steel_sheet']),
		event.recipes.createPressing(inter, inter),
		event.recipes.createDeploying(inter, [inter, 'kubejs:advanced_electron_tube']),
		event.recipes.createPressing(inter, inter),
	]).transitionalItem(inter).loops(1) // set the transitional item and the number of loops

	event.recipes.create.sequenced_assembly([
		Item.of('ad_astra:steel_tank'), // this is the item that will appear in JEI as the result
	], 'kubejs:obsidian_steel_casing', [ // 'minecraft:flowering_azalea_leaves' is the input
		// the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying(inter, [inter, 'create_sa:large_fueling_tank']),
		event.recipes.createDeploying(inter, [inter, 'create_sa:large_fueling_tank']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:obsidian_steel_sheet']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:obsidian_steel_sheet']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:obsidian_steel_sheet']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:obsidian_steel_sheet']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:obsidian_steel_sheet']),
		event.recipes.createPressing(inter, inter),
	]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops

	event.recipes.create.sequenced_assembly([
		Item.of('ad_astra:rocket_fin'), // this is the item that will appear in JEI as the result
	], 'kubejs:steel_sheet', [ // 'minecraft:flowering_azalea_leaves' is the input
		// the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying(inter, [inter, 'kubejs:carbon_ingot']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:obsidian_steel_sheet']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:steel_sheet']),
		event.recipes.createPressing(inter, inter),
	]).transitionalItem(inter).loops(3) // set the transitional item and the number of loops

	event.recipes.create.sequenced_assembly([
		Item.of('ad_astra:steel_engine'), // this is the item that will appear in JEI as the result
	], 'create:steam_engine', [ // 'minecraft:flowering_azalea_leaves' is the input
		// the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying(inter, [inter, 'kubejs:obsidian_steel_sheet']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:obsidian_steel_sheet']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:obsidian_steel_sheet']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:obsidian_steel_sheet']),
		event.recipes.createDeploying(inter, [inter, 'kubejs:obsidian_steel_sheet']),
		event.recipes.createDeploying(inter, [inter, 'create:blaze_burner']),
		event.recipes.createDeploying(inter, [inter, 'create:encased_fan']),
		event.recipes.createPressing(inter, inter),
	]).transitionalItem(inter).loops(3) // set the transitional item and the number of loops

  }


)