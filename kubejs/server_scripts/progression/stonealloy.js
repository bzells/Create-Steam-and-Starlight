ServerEvents.recipes(event => 
  {

    let air = 'minecraft:air';

    event.recipes.create.mixing('kubejs:redstone_alloy_ingot', ['create:andesite_alloy', 'minecraft:redstone','minecraft:copper_ingot'])

    event.recipes.create.splashing([Item.of('3x minecraft:gold_nugget').withChance(0.4),Item.of('2x minecraft:iron_nugget').withChance(0.8)
      ,Item.of('1x kubejs:aluminum_nugget').withChance(0.2)
    ],'kubejs:crushed_rare_earth')

    event.shaped(
      Item.of('create:shaft', 1), // arg 1: output
      [
        'XAX',
        'XAX', // arg 2: the shape (array of strings)
        'XAX'
      ],
      {
        A: 'kubejs:stone_alloy_ingot',
        X: air
      }
    )

    event.remove({output: 'minecraft:furnace'})
    event.shaped(
      Item.of('minecraft:furnace', 1), // arg 1: output
      [
        'AAA',
        'AXA', // arg 2: the shape (array of strings)
        'AAA'
      ],
      {
        A: 'kubejs:stone_alloy_ingot',
        X: air
      }
    )

    event.remove({mod: 'functionalstorage'})

    let woodlist = ['oak','spruce','birch','jungle','acacia','dark_oak','crimson','warped','mangrove','cherry'];

    for(let i = 0; i < woodlist.length; i++)
    {
      event.shaped(
        Item.of('functionalstorage:' + woodlist[i] + '_1', 2), // arg 1: output
        [
          'ABA',
          'BCB', // arg 2: the shape (array of strings)
          'ABA'
        ],
        {
          A: 'kubejs:stone_alloy_ingot',
          B: 'minecraft:'+ woodlist[i] +'_planks',
          C: 'minecraft:chest',
          X: air
        }
      )
    }

    for(let i = 0; i < woodlist.length; i++)
      {
        event.shaped(
          Item.of('functionalstorage:' + woodlist[i] + '_2', 4), // arg 1: output
          [
            'ACA',
            'BBB', // arg 2: the shape (array of strings)
            'ACA'
          ],
          {
            A: 'kubejs:stone_alloy_ingot',
            B: 'minecraft:'+ woodlist[i] +'_planks',
            C: 'minecraft:chest',
            X: air
          }
        )
      }

      for(let i = 0; i < woodlist.length; i++)
        {
          event.shaped(
            Item.of('functionalstorage:' + woodlist[i] + '_4', 4), // arg 1: output
            [
              'ACA',
              'CBC', // arg 2: the shape (array of strings)
              'ACA'
            ],
            {
              A: 'kubejs:stone_alloy_ingot',
              B: 'minecraft:'+ woodlist[i] +'_planks',
              C: 'minecraft:chest',
              X: air
            }
          )
        }

      let drawerTiers = ['stone_alloy','aluminum','steel','obsidian_steel']
      let drawerTiersunMod = ['copper','gold','diamond','netherite']

      for(let i = 0; i < drawerTiers.length; i++)
      {
        event.shaped(
          Item.of('functionalstorage:' + drawerTiersunMod[i] + '_upgrade', 2), // arg 1: output
          [
            'ACA',
            'CBC', // arg 2: the shape (array of strings)
            'ACA'
          ],
          {
            B: 'functionalstorage:' + drawerTiersunMod[i-1] + '_upgrade',
            A: 'kubejs:'+ drawerTiers[i] +'_ingot',
            C: '#functionalstorage:drawer',
            X: air
          }
        )
      }

      for(let i = 0; i < woodlist.length; i++)
        {
          event.shaped(
            Item.of('functionalstorage:framed_1', 1), // arg 1: output
            [
              'AAA',
              'ABA', // arg 2: the shape (array of strings)
              'AAA'
            ],
            {
              A: 'minecraft:iron_nugget',
              B: 'functionalstorage:'+ woodlist[i] +'_1',
              X: air
            }
          )
        }
      for(let i = 0; i < woodlist.length; i++)
        {
          event.shaped(
            Item.of('functionalstorage:framed_2', 1), // arg 1: output
            [
              'AAA',
              'ABA', // arg 2: the shape (array of strings)
              'AAA'
            ],
            {
              A: 'minecraft:iron_nugget',
              B: 'functionalstorage:'+ woodlist[i] +'_2',
              X: air
            }
          )
        }
        for(let i = 0; i < woodlist.length; i++)
          {
            event.shaped(
              Item.of('functionalstorage:framed_4', 1), // arg 1: output
              [
                'AAA',
                'ABA', // arg 2: the shape (array of strings)
                'AAA'
              ],
              {
                A: 'minecraft:iron_nugget',
                B: 'functionalstorage:'+ woodlist[i] +'_4',
                X: air
              }
            )
          }

        event.shaped(
          Item.of('create:gearbox', 1), // arg 1: output
          [
            'XBX',
            'BAB', // arg 2: the shape (array of strings)
            'XBX'
          ],
          {
            A: 'create:andesite_casing',
            B: 'create:cogwheel',
            X: air
          }
        )
  }
)