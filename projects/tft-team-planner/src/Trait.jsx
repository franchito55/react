import './Trait.css'

export function Trait( { trait } ) {
    const traitInitial = trait[0].slice(0, 1).toUpperCase();
    const traitAmount = trait[1];
    return(
        <div className="trait">
            <div className="traitHex-hexagonalBorder">
                <div className="traitHex">
                    <strong>
                        {traitInitial}
                    </strong>
                </div>
            </div>
            <strong>{traitAmount}/2</strong>
        </div>
    )
}