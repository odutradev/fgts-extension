export type ScriptFeatureKey = 'monochromatic' | 'blurImages'

export type ManageScriptData = {
  name: ScriptFeatureKey
  run: () => Promise<boolean>
  reactive?: boolean
}
