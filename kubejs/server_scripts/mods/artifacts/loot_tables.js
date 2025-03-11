LootJS.modifiers((event) =>{
    event
        .addEntityLootModifier("artifacts:mimic")
        .modifyLoot(Ingredient.all, (itemStack) => {
            itemStack.setCount(itemStack.getCount() * 0)
            return itemStack;
        })
    event
        .removeGlobalModifier('artifacts:artifact')
})