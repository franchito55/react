import './Trait.css'

export function Trait( { trait, traitThresholds } ) {
    const traitInitial = trait[0].slice(0, 1).toUpperCase();
    const traitAmount = trait[1];
    const nextThreshold = calculateNextThreshold()[0];
    const hexStyle = calculateNextThreshold()[1];
    const imageSource = `src/assets/${trait[0]}_emblem.svg`;

    function calculateNextThreshold(){
        var nextThreshold = 0;
        var hexStyle = 'traitHex';
        if (Object.keys(traitThresholds).length == 1) {
            hexStyle = hexStyle.concat(' ', Object.keys(traitThresholds)[0]);
            nextThreshold = 1;
        } else {
            for (var i = 0; i < Object.keys(traitThresholds).length; i++) {
                if (traitAmount < traitThresholds[Object.keys(traitThresholds)[i]]) {
                    nextThreshold = traitThresholds[Object.keys(traitThresholds)[i]];
                    if (i >= 1) {
                        hexStyle = hexStyle.concat(' ', Object.keys(traitThresholds)[i-1]);
                    }
                    break;
                }
            }
        }
        return [nextThreshold, hexStyle];
    }

    return(
        <div className='trait'>
            <div className='traitHex-hexagonalBorder'>
                <div className={hexStyle}>
                    <img src={imageSource} className='emblemIcon'></img>
                </div>
            </div>
            <strong>{traitAmount}/{nextThreshold}</strong>
        </div>
    )
}