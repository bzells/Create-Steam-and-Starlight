/*ServerEvents.recipes(event => 
  {

    let air = 'minecraft:air';

    event.custom({
          type: "tfmg:distillation",
      ingredients: [
        {
          amount: 1,
          fluid: "kubejs:liquid_rubber",
          nbt: {}
        }
      ],
      results: [
        {
          amount: 80,
          fluid: "tfmg:heavy_oil"
        },
        {
          amount: 60,
          fluid: "tfmg:diesel"
        },
        {
          amount: 40,
          fluid: "tfmg:kerosene"
        },
        {
          amount: 40,
          fluid: "tfmg:naphtha"
        },
        {
          amount: 80,
          fluid: "tfmg:gasoline"
        },
        {
          amount: 60,
          fluid: "tfmg:lpg"
        }
      ]
    })


  }
)
  */