import { List, ListItem, ListItemText, Switch } from '@mui/material'

import { ListContainer, listItemStyles } from '@/popup/App/subcomponents/SettingsList/styles'
import { useWhatsAppStore } from '@/store/useWhatsAppStore'
import { PRIVACY_OPTIONS } from '@/types/whatsapp'

export const SettingsList = () => {
    const settings = useWhatsAppStore((state) => state.settings)
    const updateSetting = useWhatsAppStore((state) => state.updateSetting)

    return (
        <ListContainer elevation={0}>
            <List disablePadding>
                {PRIVACY_OPTIONS.map(({ key, label }) => (
                    <ListItem key={key} sx={listItemStyles}>
                        <ListItemText primary={label} primaryTypographyProps={{ fontSize: 14 }} />
                        <Switch
                            edge="end"
                            checked={settings[key]}
                            onChange={(e) => updateSetting(key, e.target.checked)}
                        />
                    </ListItem>
                ))}
            </List>
        </ListContainer>
    )
}