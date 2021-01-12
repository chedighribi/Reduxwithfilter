const initialState= {t:[
    {text:'todo1',id:1,isComplete:false},
    {text:'todo2',id:2,isComplete:false}

],
str:'ALL'
};


const Reducer = (state=initialState ,action)=>{
    switch (action.type) {

        case 'ADD' : 
        return {
            ...state, 
            t:[...state.t,{text:action.payload,id:Math.random(),isComplete:false}],
            
        }

        case 'EDIT' : 
        return {
            ...state,
            t:state.t.map(el=> el.id===action.payload.index ? {...el, text:action.payload.Newtext}: el ),
        }

        case 'DELETE' : 
        return {
            ...state,
            t:state.t.filter(el=> el.id!==action.payload ),
        }

        case 'DONE' : 
        return {
            ...state,
            t:state.t.map(el=> el.id===action.payload ? {...el, isComplete:!el.isComplete}: el ),
        }

        case 'FILTER' : 
        return {
        ...state,
        str:action.payload
 }

        default : 
        return state
    }
}

export default Reducer;
