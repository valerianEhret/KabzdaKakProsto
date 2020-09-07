import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = () => {
    action(" accordion mode change event fired")

}

const onClickCallback = ()=> {
    action("some item was clicked")
}

export const CollapsedMode= () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>
export const UncollapsedMode= () => <Accordion titleValue={"Menu"} collapsed={false} onChange={callback} items={[{title:"Val", value:"1"},{title:"Mata", value:"2"}]} onClick={onClickCallback}/>


export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(false)

    return <Accordion  titleValue={"Menu"}  collapsed={value} onChange={() => setValue(!value)}  items={[{title:"Val", value:"1"},{title:"Mata", value:"2"}]}
                       onClick={(value)=>{alert(`user with ID ${value} should be happy `)}} />}