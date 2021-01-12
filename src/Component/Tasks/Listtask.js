import React from 'react'
import {useSelector} from 'react-redux'
import Task from './Task'

const Listtask =()=> {
    const tasks=useSelector(state => state.red)
    return (
        <div>
            {  (tasks.str=='ALL') ?  
            tasks.t.map(el=><Task key={el.id} el={el}/>) : (tasks.str=='DONE') ? 
            tasks.t.filter (el => el.isComplete).map(el=><Task key={el.id} el={el}/>) : 
            tasks.t.filter (el => !el.isComplete).map(el=><Task key={el.id} el={el}/>)
        }
        </div>
    )
}

export default Listtask