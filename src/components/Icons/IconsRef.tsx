import React from 'react'
import Icons from './Icons'
import { IconType, ColorType } from '../../constants';

let iconType: Array<IconType> = ["shopping-cart", "arrow-down", "arrow-right", "arrow-left", "lens", "star-filled", "star-border", "heart-filled", "heart-border", 
  "pen", "income", "shopping-bag", "bell", "mail", "info", "tick", "plus", "map-pointer", "menu", "offer", "profile", "more", "add-cart"];
let colorType: Array<ColorType> = ["gray", "orange"];

export default function IconsRef(){
  
  let content = (
    iconType.map((type,indexa) => {
      return(
        colorType.map((color,indexb) => {
          return(
            <div key={`${indexa}_${indexb}`} className='flex flex-row justify-between py-1 bg-slate-50 hover:bg-cyan-300'>
              <div className='flex flex-row justify-center items-center basis-1/5'><Icons type={type} color={color} /></div>
              <p className='flex flex-row justify-start items-center basis-4/5'>{`<Icons type='${type}' color='${color}' />`}</p>
            </div>
          )
        })
      )
    })
    
  )
  return (
    <div className='flex flex-col'>
      {content}
    </div>
  )
};