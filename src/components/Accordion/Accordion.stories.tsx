import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {OnOffControlled} from "../OnOffControlled/OnOffControlled";


export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = () => {
    action("clicked")
}

export const CollapsedMode= () => <Accordion titleValue={"Menu"} collapsed={true} onClick={callback}/>
export const UncollapsedMode= () => <Accordion titleValue={"Menu"} collapsed={false} onClick={callback}/>
export const ChangeMode = () => {
    const [value, setValue] = useState(false)
    return <Accordion  titleValue={"Menu"}  collapsed={value} onClick={() => setValue(!value)}  />}