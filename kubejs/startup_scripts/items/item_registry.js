StartupEvents.registry('item', event => {
    
    //sheets
    event.create('diamond_sheet')
        .displayName('Diamond Sheet')
        .texture('kubejs:item/diamond_sheet')

        event.create('aluminum_ingot')
        .displayName('Aluminum Ingot')
        .texture('kubejs:item/aluminum_ingot')
        .tag('forge:ingots/aluminum')
        .tag('forge:ingots')

        event.create('aluminum_nugget')
        .displayName('Aluminum Nugget')
        .texture('kubejs:item/aluminum_nugget')
        .tag('forge:nuggets')

        event.create('aluminum_sheet')
        .displayName('Aluminum Sheet')
        .texture('kubejs:item/aluminum_sheet')
        .tag('forge:plates')

        event.create('steel_ingot')
        .displayName('Steel Ingot')
        .texture('kubejs:item/steel_ingot')
        .tag('forge:ingots')
        .tag('forge:ingots/steel')
        

        event.create('steel_dust')
        .displayName('Steel Dust')
        .texture('kubejs:item/steel_dust')
        .tag('forge:dusts')

        event.create('titanium_ingot')
        .displayName('Titanium Ingot')
        .texture('kubejs:item/titanium_ingot')
        .tag('forge:ingots/titanium')
        .tag('forge:ingots')

        event.create('hot_titanium_ingot')
        .displayName('Hot Titanium Ingot')
        .texture('kubejs:item/hot_titanium_ingot')
        .tag('forge:ingots')

        event.create('crushed_titanium')
        .displayName('Crushed Titanium')
        .texture('kubejs:item/crushed_titanium')

        event.create('dirty_titanium_dust')
        .displayName('Dirty Titanium Dust')
        .texture('kubejs:item/dirty_titanium_dust')

        event.create('titanium_dust')
        .displayName('Titanium Dust')
        .texture('kubejs:item/titanium_dust')

        event.create('desh_ingot')
        .displayName('Desh Ingot')
        .texture('kubejs:item/desh_ingot')
        .tag('forge:ingots/desh')
        .tag('forge:ingots')

        event.create('hot_desh_ingot')
        .displayName('Hot Desh Ingot')
        .texture('kubejs:item/hot_desh_ingot')
        .tag('forge:ingots')

        event.create('crushed_desh')
        .displayName('Crushed Desh')
        .texture('kubejs:item/crushed_desh')

        event.create('dirty_desh_dust')
        .displayName('Dirty Desh Dust')
        .texture('kubejs:item/dirty_desh_dust')

        event.create('desh_dust')
        .displayName('Desh Dust')
        .texture('kubejs:item/desh_dust')

        event.create('desh_nugget')
        .displayName('Desh Nugget')
        .texture('kubejs:item/desh_nugget')

        event.create('desh_sheet')
        .displayName('Desh Sheet')
        .texture('kubejs:item/desh_sheet')
        .tag('forge:plates')
        .tag('forge:plates/desh')

        event.create('titanium_sheet')
        .displayName('Titanium Sheet')
        .texture('kubejs:item/titanium_sheet')
        .tag('forge:plates')


        event.create('titanium_nugget')
        .displayName('Titanium Nugget')
        .texture('kubejs:item/titanium_nugget')
        .tag('forge:nuggets/titanium')
        .tag('forge:nuggets')

        event.create('grain_of_steel')
        .displayName('Grain of Steel')
        .texture('kubejs:item/grain_of_steel')
        .tag('forge:dusts')

        event.create('steel_nugget')
        .displayName('Steel Nugget')
        .texture('kubejs:item/steel_nugget')
        .tag('forge:nuggets')

        event.create('steel_sheet')
        .displayName('Steel Sheet')
        .texture('kubejs:item/steel_sheet')
        .tag('forge:plates')
        .tag('forge:plates/steel')

        event.create('grain_of_iron')
        .displayName('Grain of Iron')
        .texture('kubejs:item/grain_of_iron')
        .tag('forge:dusts')

        event.create('grain_of_carbon')
        .displayName('Grain of Carbon')
        .texture('kubejs:item/grain_of_carbon')
        .tag('forge:dusts')

        event.create('carbon_dust')
        .displayName('Carbon Dust')
        .texture('kubejs:item/carbon_dust')
        .tag('forge:dusts')

        event.create('hot_carbon_ingot')
        .displayName('Hot Carbon Ingot')
        .texture('kubejs:item/hot_carbon_ingot')
        .tag('forge:ingot')

        event.create('carbon_ingot')
        .displayName('Refined Carbon')
        .texture('kubejs:item/refined_carbon')
        .tag('forge:ingots')

        event.create('redstone_alloy_ingot')
        .displayName('Redstone Alloy Ingot')
        .texture('kubejs:item/redstone_alloy_ingot')
        .tag('forge:ingots')

        event.create('stone_alloy_ingot')
        .displayName('Stone Alloy Ingot')
        .texture('kubejs:item/stone_alloy_ingot')
        .tag('forge:ingots')

        event.create('crushed_rare_earth')
        .displayName('Crushed Rare Earth')
        .texture('kubejs:item/crushed_rare_earth')

        event.create('moon_dust')
        .displayName('Moon Dust')
        .texture('kubejs:item/moon_dust')

        event.create('earth_penny')
        .displayName('¢1 Coupon')
        .texture('kubejs:item/earth_penny')

        event.create('earth_nickel')
        .displayName('¢5 Coupon')
        .texture('kubejs:item/earth_nickel')

        event.create('earth_quarter')
        .displayName('¢25 Coupon')
        .texture('kubejs:item/earth_quarter')

        event.create('earth_dollar')
        .displayName('$1 Coupon')
        .texture('kubejs:item/earth_dollar')

        event.create('grass_clippings')
        .displayName('Grass Clippings')
        .texture('kubejs:item/grass_clippings')
        .tag('forge:dyes/lime')

        event.create('raw_slime_rubber')
        .displayName('Raw Slime Rubber')
        .texture('kubejs:item/raw_slime_rubber')
        .tag('forge:dyes/black')

        event.create('slime_rubber_ball')
        .displayName('Slime Rubber Ball')
        .texture('kubejs:item/slime_rubber_ball')

        event.create('slime_rubber_sheet')
        .displayName('Slime Rubber Sheet')
        .texture('kubejs:item/slime_rubber_sheet')
        .tag('forge:rubber_sheet')

        event.create('slime_rubber_ring')
        .displayName('Slime Rubber Ring')
        .texture('kubejs:item/slime_rubber_ring')
        .tag('forge:rubber_ring')

        event.create('chicken_nugget').food(food => {
            food
            .hunger(5)
            .saturation(1)
            .fastToEat()
            .meat()
        })
        .displayName('Chicken Nugget')
        .texture('kubejs:item/chicken_nugget')

        event.create('raw_chicken_nugget')
        .displayName('Raw Chicken Nugget')
        .texture('kubejs:item/raw_chicken_nugget')

        event.create('ground_chicken')
        .displayName('Ground Chicken')
        .texture('kubejs:item/ground_chicken')

        event.create('bread_crumbs')
        .displayName('Bread Crumbs')
        .texture('kubejs:item/bread_crumbs')

        event.create('hot_obsidian_steel_ingot')
        .displayName('Hot Obsidian Steel Ingot')
        .texture('kubejs:item/hot_obsidian_steel_ingot')

        event.create('obsidian_steel_dust')
        .displayName('Obsidian Steel Dust')
        .texture('kubejs:item/obsidian_steel_dust')

        event.create('obsidian_steel_ingot')
        .displayName('Obsidian Steel Ingot')
        .texture('kubejs:item/obsidian_steel_ingot')

        event.create('obsidian_steel_nugget')
        .displayName('Obsidian Steel Nugget')
        .texture('kubejs:item/obsidian_steel_nugget')

        event.create('obsidian_steel_sheet')
        .displayName('Obsidian Steel Sheet')
        .texture('kubejs:item/obsidian_steel_sheet')

        event.create('advanced_electron_tube')
        .displayName('Advanced Electron Tube')
        .texture('kubejs:item/advanced_electron_tube')

        event.create('incomplete_advanced_electron_tube')
        .displayName('Incomplete Advanced Electron Tube')
        .texture('kubejs:item/incomplete_advanced_electron_tube')

        event.create('tree_sap')
        .displayName('Tree Sap')
        .texture('kubejs:item/tree_sap')
        
        event.create('rubber_sheet')
        .displayName('Rubber Sheet')
        .texture('kubejs:item/rubber_sheet')
        .tag('forge:rubber_sheet')

        event.create('rubber_ring')
        .displayName('Rubber Ring')
        .texture('kubejs:item/rubber_ring')
        .tag('forge:rubber_ring')

        event.create('rocket1_part_a')
        .displayName('Obsidian Steel Rocket Plate') // change
        .texture('kubejs:item/rocket1_part_a')

        event.create('desh_component')
        .displayName('Desh Smart Component') 
        .texture('kubejs:item/desh_component')

        event.create('incomplete_desh_component')
        .displayName('Desh Smart Component') 
        .texture('kubejs:item/incomplete_desh_component')

        event.create('mechanical_doll')
        .displayName('Mechanical Doll')
        .texture('kubejs:item/mechanical_doll')
        .tooltip(' #3a3a3a Is it cool or creepy...?')
})