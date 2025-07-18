import BorderButton from '../components/Buttons/BorderButton'
import FilledButton from '../components/Buttons/FilledButton'
import LoginFacebook from '../components/Buttons/LoginFacebook';
import LoginGoogle from '../components/Buttons/LoginGoogle';
import StarRating from '../components/StarRating';
import MapCurrentPoint from '../components/map/MapCurrentPoint';
import MapCurrentTarget from '../components/map/MapCurrentTarget';
import TextField from '../components/TextField/TextField';

import { useState } from 'react';
import RadioButton from '../components/Buttons/RadioButton';

const ButtonShow = () => {
    const [ rate, setRate ] = useState(0)
    const [ text, setText ] = useState("")
    const handleChange = (value) => {
        setText(value)
    }
    return (
        <div className='relative bg-primary'>
            {/* <BorderButton>Border Button</BorderButton>
            <FilledButton>Filled Button</FilledButton>
            <p>Border & Filled Button Mannual: Yon can pass button click handle by using onClick props. And the way of naming the button name is same as the general way.</p><br/>
            <LoginFacebook/>
            <LoginGoogle/><br/>
            <TextField value={text} onChange={handleChange}/>
            <p>TextField Mannual: This has 5 props. name: the name of TextField, type: type of TextField (default type is "text".), placeholder: means placeholder (default placeholder is "Text Field"), value: value of TextField, onChange: this is function to change the value of TextField</p><br/>
            <StarRating value={rate} setValue={setRate} />
            <p>StarRating Mannual: You can set the value by using value props and you have to pass the function of changing the value by using setValue props.</p>
            <MapCurrentPoint top="600px"/>
            <MapCurrentTarget  top="600px" left="200px"/><br/>
            <p>Map Mannual: Yon can change the position of these components by using top, left props.</p> */}
            <RadioButton name="a"/>
            <RadioButton name="a"/>
            <div className='w-[100%] flex flex-col justify-center items-center gap-2'>
                <div className='flex items-center justify-center gap-2 text-main  '>
                    <p className=' text-3xl'>Football</p>
                    <input type='radio' name='a' className='h-[50px] w-[50px] checked:border-main'/>
                </div>
                <div className='flex items-center justify-center gap-2 text-main'>
                    <p className=' text-3xl'>Basketball</p>
                    <input type='radio' name='a' className='h-[50px] w-[50px] checked:border-main'/>
                </div>
            </div>
            <div className='absolute pt-[50px] pb-[10px] pointer-events-none flex items-center justify-center w-[100%] bottom-0 bg-gradient-to-t from-primary'><button>asdf</button></div>
        </div>
    );
}

export default ButtonShow;