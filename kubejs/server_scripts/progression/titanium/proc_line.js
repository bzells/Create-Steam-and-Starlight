ServerEvents.recipes(event => 
  {

    let air = 'minecraft:air';


	//Titanium line/Desh
	event.remove({ output: 'ad_astra:desh_ingot' })
	//Desh
	event.recipes.create.crushing(['kubejs:crushed_desh',Item.of('kubejs:crushed_titanium').withChance(0.12),Item.of('kubejs:crushed_desh').withChance(0.5),Item.of('kubejs:moon_dust').withChance(0.4)], ['ad_astra:raw_desh'])
	event.recipes.create.crushing(['kubejs:dirty_desh_dust',Item.of('kubejs:crushed_titanium').withChance(0.05),Item.of('kubejs:moon_dust').withChance(0.4)], ['kubejs:crushed_desh'])
	event.recipes.create.splashing(['kubejs:desh_dust',Item.of('kubejs:dirty_titanium_dust').withChance(0.05)], ['kubejs:dirty_desh_dust'])
	event.recipes.create.compacting(['kubejs:hot_desh_ingot'], ['kubejs:desh_dust',Fluid.of('ad_astra:fuel',100),]).superheated()
	event.recipes.create.mixing(['6x kubejs:desh_nugget'], ['kubejs:hot_desh_ingot',Fluid.of('minecraft:water',100)])
	event.recipes.create.mixing(['kubejs:desh_ingot'], ['kubejs:hot_desh_ingot',Fluid.of('ad_astra:cryo_fuel',50)])
	//Titanium
	event.recipes.create.crushing(['kubejs:dirty_titanium_dust',Item.of('kubejs:aluminum_nugget').withChance(0.24),Item.of('kubejs:moon_dust').withChance(0.4)], ['kubejs:crushed_titanium'])
	event.recipes.create.splashing(['kubejs:titanium_dust',Item.of('kubejs:aluminum_nugget').withChance(0.12)], ['kubejs:dirty_titanium_dust'])
	event.recipes.create.compacting(['kubejs:hot_titanium_ingot'], ['kubejs:titanium_dust',Fluid.of('ad_astra:fuel',100),]).superheated()
	event.recipes.create.mixing(['kubejs:titanium_ingot'], ['kubejs:hot_titanium_ingot',Fluid.of('ad_astra:cryo_fuel',50)])
	//Moon Dust
	event.recipes.create.splashing([Item.of('kubejs:dirty_titanium_dust').withChance(0.02),Item.of('kubejs:dirty_desh_dust').withChance(0.08),Item.of('create:zinc_nugget',2).withChance(0.24)], ['kubejs:moon_dust'])


  }
)