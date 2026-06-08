export type SystemFeatures = {
  monochromatic: boolean
  monochromaticTimerEnabled: boolean
  monochromaticTimerDuration: number
  monochromaticExpiration: number
  blurImages: boolean
  blurImagesMinSize: number
  waBlurMessages: boolean
  waBlurPreviews: boolean
  waBlurNames: boolean
  waBlurPhotos: boolean
  waBlurStickers: boolean
}

export type SystemStore = {
  features: SystemFeatures
}
