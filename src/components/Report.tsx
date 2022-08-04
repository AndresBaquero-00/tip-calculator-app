
type Props = {
    value: number;
    text: string;
}

export const Report = ({ value, text }: Props) => {
    return (
        <div className="report">
            <label>
                <h3>{ text }</h3>
                <p>/ person</p>
            </label>
            <strong>
                <small>$</small> 
                { value.toFixed(2) }
            </strong>
        </div>
    )
}
