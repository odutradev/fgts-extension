export const PRIVACY_OPTIONS = [
    { key: 'blurMessages', label: 'Borrar Mensagens do Chat' },
    { key: 'blurPreviews', label: 'Borrar Prévias (Lista Lateral)' },
    { key: 'blurNames', label: 'Borrar Nome dos Contatos' },
    { key: 'blurPhotos', label: 'Borrar Fotos de Perfil' },
    { key: 'blurStickers', label: 'Borrar Figurinhas' }
] as const

export const defaultSettings = {
    blurMessages: true,
    blurPreviews: true,
    blurNames: false,
    blurPhotos: false,
    blurStickers: true
}

export type PrivacySettingsKey = 'blurMessages' | 'blurPreviews' | 'blurNames' | 'blurPhotos' | 'blurStickers'

export type PrivacySettings = Record<PrivacySettingsKey, boolean>