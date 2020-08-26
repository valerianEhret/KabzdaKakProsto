import React, {ChangeEvent, useRef, useState} from 'react';
import { action } from '@storybook/addon-actions';


export default {
    title: 'input',
    // component: Button,
};

export const UncontrolledInput = () => <input/>;





export const TrackValueUncontrolledInput = ()=> {

    const [value, setValue] = useState('')

  let onChange = (event:ChangeEvent<HTMLInputElement>)=> {
        setValue(event.currentTarget.value)
  }

    return  <div><input onChange={onChange}/> = {value}</div>
}




export const GetValueUncontrolledInputByButtonPress = ()=> {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)


    const save = ()=> {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return  <div><input ref={inputRef} /> <button onClick={save}>save</button>= {value}</div>
}

export const ControlledInput = () => <input value={"saddf"}/>;


