import { defaultSettings } from '../types/settings'
import './styles.css'

import type { PrivacySettings } from '../types/settings'

const applyClasses = (settings: PrivacySettings) => {
    const { body } = document

    settings.blurMessages ? body.classList.add('wa-blur-msgs') : body.classList.remove('wa-blur-msgs')
    settings.blurPreviews ? body.classList.add('wa-blur-previews') : body.classList.remove('wa-blur-previews')
    settings.blurStickers ? body.classList.add('wa-blur-stickers') : body.classList.remove('wa-blur-stickers')
    settings.blurPhotos ? body.classList.add('wa-blur-photos') : body.classList.remove('wa-blur-photos')
    settings.blurNames ? body.classList.add('wa-blur-names') : body.classList.remove('wa-blur-names')
}

chrome.storage.local.get(defaultSettings, (result) => {
    applyClasses(result as PrivacySettings)
})

chrome.storage.onChanged.addListener(() => {
    chrome.storage.local.get(null, (fullResult) => {
        applyClasses(fullResult as PrivacySettings)
    })
})