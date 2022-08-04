import { Input } from './Input';

type Props = {
    title: string;
    name: string;
    value: string;
    onChange: any;
    icon?: string;
}

export const Fieldset = ({ title, name, value, onChange, icon }: Props) => {
    return (
        <div className="fieldset">
            <h4>{ title }</h4>
            <Input
                placeholder="0"
                icon={ icon }
                value={ value }
                name={ name }
                onChange={ onChange }
            />
        </div>
    )
}
