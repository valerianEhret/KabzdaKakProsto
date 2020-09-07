import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
  titleValue: string
}



export function UncontrolledAccordion(props: AccordionPropsType) {

  // let [collapsed, setCollapsed] = useState(false)
  let [state, dispatch] = useReducer(reducer, {collapsed:false}) // аргуменнты редюсер и начальное значение стейта

  return (
    <div>
      {/*<AccordionTitle title={props.titleValue} onClick={() => { setCollapsed(!collapsed) } }/>*/}
        <AccordionTitle title={props.titleValue} onClick={() => {
            debugger
            dispatch({type:'TOGGLE_COLLAPSED'})} }/>
      {!state.collapsed && <AccordionBody />}
    </div>
  )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={ () => {props.onClick()}}>{props.title}</h3>
  )
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}