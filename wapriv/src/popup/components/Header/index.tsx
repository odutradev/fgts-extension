import { Shield } from 'lucide-react'

import './styles.css'

export const Header = () => {
    return (
        <header className="header-container">
            <Shield size={20} />
            <h1 className="header-title">Privacidade WA</h1>
        </header>
    )
}