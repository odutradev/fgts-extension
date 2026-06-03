export type SystemFeatures = {
  monochromatic: boolean
  monochromaticTimerEnabled: boolean
  monochromaticTimerDuration: number
  monochromaticExpiration: number
}

export type SystemStore = {
  features: SystemFeatures
}