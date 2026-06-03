export type SystemFeatures = {
  monochromatic: boolean
  monochromaticTimerEnabled: boolean
  monochromaticTimerDuration: number
  monochromaticExpiration: number
  blurImages: boolean
}

export type SystemStore = {
  features: SystemFeatures
}
