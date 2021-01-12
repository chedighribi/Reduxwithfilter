export const add=(task)=>{
    return {
        type:'ADD',
        payload:task
    }
}

export const done=(payload)=>{
    return {
        type: 'DONE',
        payload
    }
}

export const edit=(payload)=>{
    return {
        type: 'EDIT',
        payload
    }
}

export const delett=(payload)=>{
    return {
        type: 'DELETE',
        payload
    }
}

export const filter=(payload)=>{
    return {
        type: 'FILTER',
        payload
    }
}
