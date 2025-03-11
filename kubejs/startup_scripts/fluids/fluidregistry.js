StartupEvents.registry('fluid', event => {
    // Basic "thick" (looks like lava) fluid with red tint
    event.create('liquid_rubber')
      .thickTexture(0x7c2500)
      .bucketColor(0x7c2500)
      .displayName('Liquid Rubber')

    event.create('brew_of_luna')
    .thickTexture(0xb6fffd)
    .bucketColor(0x749bca)
    .displayName('Brew of Luna')
                   
  })