import React, {useState} from 'react';
import {Select2} from "./Select2";
import {action} from "@storybook/addon-actions";




export default {
    title: 'Select2',
    component: Select2,
};


export const MySelect =() => {

    return <Select2 items={[{title:"Minsk", value:1}, {title:"Kiev", value:2}, {title:"Moscow", value:3}]}  value={"1"} onChange={action("value changed")}/>
}