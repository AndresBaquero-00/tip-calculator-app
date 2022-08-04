
type Props = {
    placeholder: string;
    value: string;
    name: string;
    onChange: (data: { name: string, value: string }) => void;
    icon: string | undefined;
}

export const Input = ({ placeholder, value, name, onChange, icon }: Props) => {
    return (
        <div 
            className="input"
            data-error={ value == '0' }
            data-icon={ icon !== undefined } 
            onFocus={ ({ currentTarget }) => currentTarget.classList.add('focus') }
            onBlur={ ({ currentTarget }) => currentTarget.classList.remove('focus') }
        >
            { icon && <i><span className="material-icons">{ icon }</span></i> }
            <input 
                type="number" 
                placeholder={ placeholder }
                value={ value }
                onChange={ ({ currentTarget }) => onChange({ name: name, value: currentTarget.value }) }
            />
        </div>
    )
}
