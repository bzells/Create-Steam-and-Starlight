ServerEvents.recipes(event => 
    {
  
      let air = 'minecraft:air';
  
        let tiers = ['aluminum','steel','obsidian_steel','desh','titanium']

        for(let i = 0; i < tiers.length; i++)
        {
            event.shapeless(
                Item.of('9x kubejs:'+ tiers[i] + '_nugget'),
                [
                  'kubejs:'+ tiers[i] + '_ingot'
                ]
              )
        }


        // add all blocks
        event.shapeless(
            Item.of('9x kubejs:redstone_alloy_ingot'),
            [
              'kubejs:redstone_alloy_block'
            ]
          )
          event.shapeless(
            Item.of('kubejs:redstone_alloy_block'),
            [
              '9x kubejs:redstone_alloy_ingot'
            ]
          )

        for(let i = 0; i < tiers.length; i++)
        {
            event.shapeless(
                Item.of('kubejs:'+ tiers[i] + '_ingot'),
                [
                    '9x kubejs:'+ tiers[i] + '_nugget'
                ]
                )
        }
        for(let i = 0; i < tiers.length; i++)
        {
            event.recipes.create.pressing('kubejs:'+tiers[i]+'_sheet', 'kubejs:'+tiers[i]+'_ingot')
        }

        event.remove({type: 'ad_astra:compressing'})

        let adastratiers = ['steel','desh','etrium','calorite','ostrum']
        for(let i = 0; i < adastratiers.length; i++)
        {
            event.remove({output: 'ad_astra:' +adastratiers[i] + '_plate'})
            event.remove({output: 'ad_astra:' +adastratiers[i] + '_nugget'})
        }
      
        /*
        for(let i = 0; i < adastratiers.length; i++)
        {
            event.replaceInput({
                input: 'ad_astra:' + adastratiers[i] + '_plate'
            },
                'ad_astra:' + adastratiers[i] + '_plate',
                'kubejs:' + adastratiers[i] + '_sheet',  )
        }
        */
    }
  )