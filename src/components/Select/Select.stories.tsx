import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";




export default {
    title: 'SelectWithValue',
    component: Select,
};


export const MySelect =() => {

    const [value,setValue] = useState('')
 
    return <Select items={[{title:"Minsk", value:'1'}, {title:"Kiev", value:'2'}, {title:"Moscow", value:'3'}]}  value={value} onChange={setValue}/>
}
