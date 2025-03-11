JEIEvents.hideItems(event => {

    let adastratiers = ['steel','desh','etrium','calorite','ostrum']


    for(let i = 0; i < adastratiers.length; i++)
    {
        event.hide('ad_astra:'+adastratiers[i]+'_plate')
        event.hide('ad_astra:'+adastratiers[i]+'_ingot')
        event.hide('ad_astra:'+adastratiers[i]+'_nugget')
    }  
    
  

})