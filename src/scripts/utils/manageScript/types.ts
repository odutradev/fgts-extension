export type ScriptFeatureKey = 'monochromatic' | 'blurImages' | 'shortcutImage'

export type ManageScriptData = {
  name: ScriptFeatureKey
  run: () => Promise<boolean>
  reactive?: boolean
}