import './styles.css'

type ToggleProps = {
    id: string
    label: string
    checked: boolean
    onChange: (checked: boolean) => void
}

export const Toggle = ({ id, label, checked, onChange }: ToggleProps) => {
    return (
        <div className="toggle-wrapper">
            <label htmlFor={id} className="toggle-label">
                {label}
            </label>
            <label className="switch">
                <input
                    type="checkbox"
                    id={id}
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                />
                <span className="slider" />
            </label>
        </div>
    )
}