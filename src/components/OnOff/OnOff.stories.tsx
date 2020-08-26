import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {OnOffControlled} from "../OnOffControlled/OnOffControlled";


export default {
    title: 'OnOff',
    component: OnOffControlled,
};

const callback = () => {
    action("clicked")
}

// export const OnMode= () => <OnOffControlled on={true}  onChange={x => x}/>
// export const OffMode= () => <OnOffControlled on={false}  onChange={x =>x}/>
export const ChangeMode = () => {
    const [value,  setValue] = useState(false)
    return <OnOffControlled on={value} onClick={setValue}/>
}