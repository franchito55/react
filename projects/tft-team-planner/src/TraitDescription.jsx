import './TraitDescription.css'
import { useContext, useState } from 'react'
import { oneCosts, twoCosts, threeCosts, fourCosts, fiveCosts, items } from './ChampionsContext'
import { TraitDescriptionChampListChamp } from './TraitDescriptionChampListChamp';

export function TraitDescription( { traitName, position, onMouseLeave } ) {

    const listOfChamps = calcChampList();

    function calcChampList() {
        var champList = [];
        const localOneCosts = useContext(oneCosts);
        const localTwoCosts = useContext(twoCosts);
        const localThreeCosts = useContext(threeCosts);
        const localFourCosts = useContext(fourCosts);
        const localFiveCosts = useContext(fiveCosts);
        const localItems = useContext(items);

        for (var i = 0; i < Object.keys(localOneCosts).length; i++) {
            const currentChampTraits = Object.values(localOneCosts[i]['traits']);
            for (var j = 0; j < currentChampTraits.length; j++) {
                if (traitName === currentChampTraits[j]) {
                    champList = [...champList, Object.values(localOneCosts)[i]];
                }
            }
        }
        
        for (var i = 0; i < Object.keys(localTwoCosts).length; i++) {
            const currentChampTraits = Object.values(localTwoCosts[i]['traits']);
            for (var j = 0; j < currentChampTraits.length; j++) {
                if (traitName == currentChampTraits[j]) {
                    champList = [...champList, Object.values(localTwoCosts)[i]];
                }
            }
        }

        for (var i = 0; i < Object.keys(localThreeCosts).length; i++) {
            const currentChampTraits = Object.values(localThreeCosts[i]['traits']);
            for (var j = 0; j < currentChampTraits.length; j++) {
                if (traitName == currentChampTraits[j]) {
                    champList = [...champList, Object.values(localThreeCosts)[i]];
                }
            }
        }

        for (var i = 0; i < Object.keys(localFourCosts).length; i++) {
            const currentChampTraits = Object.values(localFourCosts[i]['traits']);
            for (var j = 0; j < currentChampTraits.length; j++) {
                if (traitName == currentChampTraits[j]) {
                    champList = [...champList, Object.values(localFourCosts)[i]];
                }
            }
        }

        for (var i = 0; i < Object.keys(localFiveCosts).length; i++) {
            const currentChampTraits = Object.values(localFiveCosts[i]['traits']);
            for (var j = 0; j < currentChampTraits.length; j++) {
                if (traitName == currentChampTraits[j]) {
                    champList = [...champList, Object.values(localFiveCosts)[i]];
                }
            }
        }

        for (var i = 0; i < localItems.length; i++) {
            if (localItems[i]['type'] === 'emblem' && traitName === localItems[i]['trait']) {
                champList = [...champList, localItems[i]];
            }
        }

        return champList;
    }

    return(
        <div className="traitDescription" style={{bottom: `${position['top']}px`, left: `${position['left']}px`}} onMouseLeave={onMouseLeave}>
            <span>{traitName}</span>
            <div className="champListOfTrait">
                {listOfChamps.map((champ) =>
                    <TraitDescriptionChampListChamp key={champ['name']} champ={champ}/>
                )}
            </div>
        </div>
    )
}