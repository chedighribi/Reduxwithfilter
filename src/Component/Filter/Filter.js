import React from 'react'
import {useDispatch} from 'react-redux'
import {filter} from '../../Const/Actions/Actions'

const Filter =()=>{
    const dispatch= useDispatch()

    const handleAll =()=>{
        dispatch(filter('ALL'))
    } 

    const handleDone = () => {
        dispatch(filter('DONE'))
    }

    const handleNot = () => {
        dispatch(filter('NOTDONE'))
    }

    return (
        <div className='Fillter'>
            <h3>Filter your list</h3>
            <button onClick={handleAll}>ALL</button>
            <button onClick={handleDone}>DONE</button>
            <button onClick={handleNot}>NOT DONE</button>
        </div>
    )
}
export default Filter