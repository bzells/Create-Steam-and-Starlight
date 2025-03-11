ItemEvents.modification(event => {

  // food
    event.modify('artifacts:everlasting_beef', item => {
      item.foodProperties = food => {
          food.hunger(0)
          food.saturation(0)
          food.fastToEat()
          
      }
    })
  
    event.modify('artifacts:eternal_steak', item => {
      item.foodProperties = food => {
          food.hunger(0)
          food.saturation(0)
          food.fastToEat()
          
      }
    })

    event.modify('minecraft:cooked_porkchop', item => {
      item.foodProperties = food => {
          food.hunger(4)
          food.saturation(1)

          
      }
    })

    event.modify('minecraft:cooked_beef', item => {
      item.foodProperties = food => {
          food.hunger(4)
          food.saturation(1)

          
      }
    })

    event.modify('minecraft:golden_carrot', item => {
      item.foodProperties = food => {
          food.hunger(2)
          food.saturation(2)
          food.fastToEat()
          
      }
    })

    event.modify('minecraft:cooked_mutton', item => {
      item.foodProperties = food => {
          food.hunger(3)
          food.saturation(1)

          
      }
    })

    event.modify('minecraft:cookie', item => {
      item.foodProperties = food => {
          food.hunger(4)
          food.saturation(1)
          food.fastToEat()
          
      }
    })

    event.modify('minecraft:cooked_chicken', item => {
      item.foodProperties = food => {
          food.hunger(3)
          food.saturation(1)
          
      }
    })

    event.modify('minecraft:cooked_cod', item => {
      item.foodProperties = food => {
          food.hunger(3)
          food.saturation(1)
          
      }
    })

    event.modify('minecraft:cooked_salmon', item => {
      item.foodProperties = food => {
          food.hunger(3)
          food.saturation(1)

          
      }
    })

    event.modify('minecraft:baked_potato', item => {
      item.foodProperties = food => {
          food.hunger(3)
          food.saturation(1)

          
      }
    })

  })