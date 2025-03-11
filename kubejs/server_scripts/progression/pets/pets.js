ServerEvents.recipes(event => 
    {
  
      let air = 'minecraft:air';
  
        event.remove({mod: 'inventorypets'})

  let inter = 'kubejs:mechanical_doll' // making a variable to store the transitional item makes the code more readable
	event.recipes.create.sequenced_assembly([
		Item.of('kubejs:mechanical_doll').withChance(16.0), // this is the item that will appear in JEI as the result
		Item.of('kubsjs:steel_sheet').withChance(16.0), // the rest of these items will be part of the scrap
		Item.of('create:electron_tube').withChance(2.0),
	], 'kubejs:aluminum_casing', [ // 'minecraft:flowering_azalea_leaves' is the input
		// the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
		event.recipes.createCutting(inter, inter),
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying(inter, [inter, 'create:electron_tube']),
		event.recipes.createDeploying(inter, [inter, 'create:cogwheel']),
    event.recipes.createDeploying(inter, [inter, 'kubejs:aluminum_sheet']),
    event.recipes.createPressing(inter, inter),
	]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops

        // enderman pet
        event.shaped(
          Item.of('inventorypets:pet_enderman', 1), // arg 1: output
          [
            'BAB',
            'ACA', // arg 2: the shape (array of strings)
            'BAB'
          ],
          {
            A: 'minecraft:ender_eye',
            B: 'minecraft:end_stone',  //arg 3: the mapping object
            C: 'kubejs:mechanical_doll'
          }
        )

    }
  )