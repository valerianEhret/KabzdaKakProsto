import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff"
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion"
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOffControlled} from "./components/OnOffControlled/OnOffControlled";
import {Select2} from "./components/Select/Select2";
import {action} from "@storybook/addon-actions";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [onControlled, setOnControlled] = useState<boolean>(false)


    ///
    //состояние значения селекта
    let [currentValue, setCurrentValue] = useState<string>("none")

    //
    const onClickCallback = (currentValue:any)=> {
        setCurrentValue(currentValue)
    }

    //массив объектов, строки селекта
    const items = [{title:"Minsk", value:1}, {title:"Kiev", value:2}, {title:"Moscow", value:3}]

///


    return (
        <div className={"App"}>
            <OnOffControlled on={onControlled} onClick={setOnControlled}/>
            <OnOff/>
            <UncontrolledAccordion titleValue="Uncontrolled Accordion"/>
            {/*<Accordion titleValue="Users" collapsed={accordionCollapsed} onClick={setAccordionCollapsed} items={[{title:"Val", value:"1"},{title:"Mata", value:"2"}] } onChange={()=>{}}/>*/}
            <UncontrolledRating/>
            <Rating onClick={setRatingValue}
                    value={ratingValue}
            />
            <Select2 value={currentValue} onChange={onClickCallback} items={items}/>
        </div>
    );
}

export default App;
