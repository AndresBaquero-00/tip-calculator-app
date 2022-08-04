
type Props = {
    type: string;
    text: string;
    onClick: (button: HTMLDivElement) => void;
}

export const Button = ({ type, text, onClick }: Props) => {
    return (
        <div 
            className="button"
            data-type={ type }
            onClick={ ({ currentTarget }) => onClick(currentTarget) }
        >
            { text }
        </div>
    )
}
