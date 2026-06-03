export type FeatureMetadata = {
  label: string
  description: string
}

export type FeatureLabelMap = Record<string, FeatureMetadata>

export type TimerDuration = {
  value: number
  label: string | null
}
