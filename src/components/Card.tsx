
type Props = {
    children: JSX.Element[]
}

export const Card = ({ children }: Props) => {    
    return (
        <div className="card">
            <div className="card-left">{ children.at(0) }</div>
            <div className="card-right">{ children.at(1) }</div>
        </div>
    )
}
