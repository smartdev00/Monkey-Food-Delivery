import { useState } from 'react'

import FilledButton from '../../components/Buttons/FilledButton'
import Intro1 from '../../../public/assets/img/intro1.png'
import Intro2 from '../../../public/assets/img/intro2.png'
import Intro3 from '../../../public/assets/img/intro3.png'
 
 const Intro = () => {
    const [ pageNumber, setPageNumber ] = useState(1)
    let imgContent, title, content;
    if( pageNumber === 1 ) {
        imgContent = <img className='' src={Intro1}/>
        title = "Find Food You Love"
        content = <span className='text-secondary text-[13px] mb-[60px] text-center'>Discover the best foods from over 1,000<br/>restaurants and fast delivery to your doorstep</span>
    }
    if( pageNumber === 2 ) {
        imgContent = <img src={Intro2}/>
        title = "Fast Delivery"
        content = <span className='text-secondary text-[13px] mb-[60px] text-center'>Fast food delivery to your home, office<br/> wherever you are</span>
    }
    if( pageNumber === 3 ) {
        imgContent = <img src={Intro3}/>
        title = "Live Tracking"
        content = <span className='text-secondary text-[13px] mb-[60px] text-center'>Real time tracking of your food on the app<br/>once you placed the order</span>
    }
    const handleNextClick = () => { 
        setPageNumber(pageNumber + 1)
        console.log(pageNumber);
    }
    return (
        <div className="relative px-[21px] h-[790px] flex flex-col items-center">
            <div className='flex flex-col justify-end h-[385px]'>
                { imgContent }
            </div>
            <div className='flex gap-[5px] my-8'>
                <div className='border-[4px] rounded-full' style={{borderColor: pageNumber === 1 ? "#fc6011" : "#d6d6d6"}}/>
                <div className='border-[4px] rounded-full' style={{borderColor: pageNumber === 2 ? "#fc6011" : "#d6d6d6"}}/>
                <div className='border-[4px] rounded-full' style={{borderColor: pageNumber === 3 ? "#fc6011" : "#d6d6d6"}}/>
            </div>
            <p className='text-center text-[28px] text-primary mb-[33px]'>{ title }</p>
            { content }
            <div className='w-[100%] px-[13px]'>
                <FilledButton onClick = {handleNextClick}>Next</FilledButton>
            </div>
            <div className="absolute bottom-3 w-[119px] border-[2.5px] rounded-full border-primary" />
        </div>
    );
 }
 
 export default Intro;