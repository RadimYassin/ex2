
const init ={
    count :[0,0,0]
}
 const  AppReduce=(state=init,action)=>{
   switch (action.type) {
    case "ADD":
           
        return {...state,count:state.count.map((i,index)=>{
            if(index===action.payload){
                return i+1
            }
               return i
        })
   

    }

    
    default:return state
        
   }


}

export default AppReduce