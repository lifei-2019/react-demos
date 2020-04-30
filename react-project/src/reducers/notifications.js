const initState = {
    isLoading: false,
    list:[{
    id:1,
    title: 'Raphael input',
    desc: '1111',
    hasRead:false
},{
    isLoading: false,
    id:2,
    title: 'eric please',
    desc: '22222',
    hasRead:true
},]
}

export default(state=initState, action)=>{
    switch(action.type){
    default:
        return state
    }
}