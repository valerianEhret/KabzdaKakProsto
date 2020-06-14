import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff"
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion"
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOffControlled} from "./components/OnOffControlled/OnOffControlled";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [onControlled, setOnControlled] = useState<boolean>(false)

    return (
        <div className={"App"}>
            <OnOffControlled on={onControlled} onClick={setOnControlled}/>
            <OnOff/>
            <UncontrolledAccordion titleValue="Menu"/>
            <Accordion titleValue="Users" collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <UncontrolledRating/>
            <Rating onClick={setRatingValue}
                    value={ratingValue}
            />
        </div>
    );
}

export default App;
