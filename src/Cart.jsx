import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './redux/Action'
function Cart({Livre}) {
  const count=useSelector(state=>state.count)
  const dis=useDispatch()
  return (
    <div className='container' style={{display:"flex"}} >
    {
        Livre.map((item,index)=>{return(
             <div style={{width:"200px",border:"1px solid red ",padding:"8px"}} key={index} className='cart'>
                     <img  style={{width:"100%"}} src={item.poster} alt="iamge" />
                     <h1>{item.titre}</h1>
                     <p>autour:{item.autour}</p>
                     <p>edition:{item.edition}</p>
      
                     <button style={count[index]>0 ? {backgroundColor:"white"}:{backgroundColor:"blue"}} onClick={()=>dis(add(index))}>like ({count[index]})</button>
              </div>



        ) })
    }
    </div>
  )
}

export default Cart
