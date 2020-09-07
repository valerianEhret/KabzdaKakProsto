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



//Controlled Input
export const ControlledInput =()=> {
    const [parentValue, setParentValue] = useState("")
    const onChange = (event:ChangeEvent<HTMLInputElement>)=> {setParentValue(event.currentTarget.value)}

 return <input value={parentValue}  onChange={onChange} />
}




// Controlled Select
export const ControlledSelect =()=> {
    debugger
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (event:ChangeEvent<HTMLSelectElement>)=> {setParentValue(event.currentTarget.value)}

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>s
        <option value={"1"}>Paderborn</option>
        <option value={"2"}>Bielefeld</option>
        <option value={"3"} >Hamburg</option>
    </select>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (event:ChangeEvent<HTMLInputElement>)=> {setParentValue(event.currentTarget.checked)}

    return <input type="checkbox" checked={parentValue} onChange={onChange} />
}


export const ControlledInputWithFixedValue = () => <input value={"saddf"}/>;





