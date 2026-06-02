export type PrivacySettings = {
    blurMessages: boolean
    blurPreviews: boolean
    blurNames: boolean
    blurPhotos: boolean
    blurStickers: boolean
}

export const defaultSettings: PrivacySettings = {
    blurMessages: true,
    blurPreviews: true,
    blurNames: false,
    blurPhotos: false,
    blurStickers: true
}