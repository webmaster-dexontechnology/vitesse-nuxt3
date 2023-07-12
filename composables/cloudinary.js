// import { quality } from '@cloudinary/url-gen/actions/delivery'
// import { auto } from '@cloudinary/url-gen/qualifiers/quality'
import { Cloudinary } from '@cloudinary/url-gen'
import { useRuntimeConfig } from '#imports'

export const cloudinary = () => {
  const config = useRuntimeConfig()

  const cld = new Cloudinary({
    cloud:
            {
              cloudName: 'dfovim3lo',
              apiKey: '729273561675473',
              apiSecret: '-_ZOKS2ul9PFo6fKFMxKLgSrwUs',
            },
    // url: {
    //   secureDistribution: 'www.maddeveloper.xyz',
    //   secure: true,
    // },
  })

  // const testImage = cld.image('cld-sample-5.jpg').delivery(quality(80))

  const myCld = cld

  // Upload

  return {
    myCld,
  }
}
