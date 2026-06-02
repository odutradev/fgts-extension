import { Toggle } from '../../../components/Toggle'
import type { PrivacySettings } from '../../../types/settings'

type SettingsListProps = {
    settings: PrivacySettings
    onUpdate: (key: keyof PrivacySettings, value: boolean) => void
}

export const SettingsList = ({ settings, onUpdate }: SettingsListProps) => {
    const options: Array<{ key: keyof PrivacySettings; label: string }> = [
        { key: 'blurMessages', label: 'Borrar Mensagens do Chat' },
        { key: 'blurPreviews', label: 'Borrar Prévias (Lista Lateral)' },
        { key: 'blurNames', label: 'Borrar Nome dos Contatos' },
        { key: 'blurPhotos', label: 'Borrar Fotos de Perfil' },
        { key: 'blurStickers', label: 'Borrar Figurinhas' }
    ]

    return (
        <main>
            {options.map(({ key, label }) => (
                <Toggle
                    key={key}
                    id={key}
                    label={label}
                    checked={settings[key]}
                    onChange={(val) => onUpdate(key, val)}
                />
            ))}
        </main>
    )
}