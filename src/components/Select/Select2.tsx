import React, {useState} from 'react';
import styles from './Select.module.css'

//Types
type ItemType = {
    title:string
    value:any
}

type SelectPropsType = {
    value:any
    onChange:(value:any)=>void
    items:ItemType[]
}
//




export function Select2(props:SelectPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    // реализация для жирных скобок
    const [choice, setChoice] = useState<boolean>(false)


    return (
        <div>
            <div className={choice?styles.box3:styles.box} onClick={()=>setCollapsed(!collapsed)}>{props.value}</div>
            {collapsed&&props.items.map((el,index)=> {

                const onClick=()=> {
                    props.onChange(el.title)
                    setCollapsed(false)
                    setChoice(true)
                }

                const onBlur=()=>{
                    setCollapsed(false)
                }



                return (<div key={index} onClick={onClick} onBlur={onBlur}  className={styles.box2}    >{el.title}</div>)
            } )}
        </div>
    )
}