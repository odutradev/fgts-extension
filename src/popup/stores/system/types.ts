export type SystemFeatures = Record<string, boolean>

export type SystemStore = {
  features: SystemFeatures
  toggleFeature: (key: string) => void
}
