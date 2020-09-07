import React, {useState, KeyboardEvent, useEffect} from 'react';
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


export function Select(props: SelectPropsType) {
//useStates
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValuee] = useState(props.value)





//items
    const selectedItem = props.items.find(i => i.value == props.value)
    const hoveredItem = props.items.find(i => i.value == hoveredElementValue)
    //useEffect

    useEffect( ()=> {
        setHoveredElementValuee(props.value);
    },[props.value]  )

//functions

   const onItemClick = (value:any) => {
       props.onChange(value)
       toggleItems()
   }

    const toggleItems = ()=>setActive(!active)

   const onKeyUp = (e:KeyboardEvent<HTMLDivElement>)=> {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i=0; i<props.items.length;i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const nextPretendent =  e.key === "ArrowDown"? props.items[i+1]:props.items[i-1]
                    if (nextPretendent) {
                        props.onChange(nextPretendent.value)
                        console.log('press')
                        return;
                    }

                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0])
            }

        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
   }

    return (
        <div className={styles.select}  onKeyUp={onKeyUp} tabIndex={0} >
            <span className={styles.main}  onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active && <div className={styles.items}>
                {props.items.map(i =>
                    <div    onMouseEnter={()=>setHoveredElementValuee(i.value)}    className={hoveredItem===i?styles.selected:''}     key={i.value}   onClick={()=> {onItemClick(i.value)}}  >
                        {i.title}
                    </div>)}
            </div>}

        </div>
    )
}