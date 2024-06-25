import React from 'react'

import {Icon} from "../../constants"
  
export default function Icons({type, color}: Icon){
  let content: React.ReactElement;
  switch (type) {
    case "shopping-cart":
      content = (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="22.755" height="20" viewBox="0 0 22.755 20" className={color === "gray"?'fill-icongray-50':'fill-iconorange-50'}>
            <g id="shopping-cart" transform="translate(0 0)">
              <path id="Path_8562" data-name="Path 8562" d="M7.378,13.333H19.422a.665.665,0,0,0,.641-.484L22.73,3.516a.666.666,0,0,0-.641-.85H5.839L5.362.522A.667.667,0,0,0,4.711,0H.667a.667.667,0,0,0,0,1.333H4.176L6.583,12.167A2,2,0,0,0,7.378,16H19.422a.667.667,0,0,0,0-1.333H7.378a.667.667,0,1,1,0-1.333Zm0,0" transform="translate(0)" />
              <path id="Path_8563" data-name="Path 8563" d="M151,362a2,2,0,1,0,2-2A2,2,0,0,0,151,362Zm0,0" transform="translate(-144.289 -344.004)" />
              <path id="Path_8564" data-name="Path 8564" d="M362,362a2,2,0,1,0,2-2A2,2,0,0,0,362,362Zm0,0" transform="translate(-345.915 -344.004)" />
            </g>
          </svg>
        </span>
      );
      break;
    case "arrow-down":
      content = (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16.828" height="9.828" viewBox="0 0 16.828 9.828" className={color === "gray"?'stroke-icongray-200':'stroke-iconorange-50'}>
            <g id="Group_6869" data-name="Group 6869" transform="translate(1.414 8.414) rotate(-90)">
              <line id="Line_12" data-name="Line 12" x1="7" y2="7" transform="translate(0 0)"   strokeLinecap="round" strokeWidth="2"/>
              <line id="Line_13" data-name="Line 13" x1="7" y1="7" transform="translate(0 7)"   strokeLinecap="round" strokeWidth="2"/>
            </g>
          </svg>
        </span>
      );
      break;
    case "arrow-right":
      content = (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="9.828" height="16.828" viewBox="0 0 9.828 16.828" className={color === "gray"?'stroke-icongray-200':'stroke-iconorange-50'}>
            <g id="Group_8181" data-name="Group 8181" transform="translate(8.414 15.414) rotate(180)">
              <line id="Line_12" data-name="Line 12" x1="7" y2="7" transform="translate(0 0)"   strokeLinecap="round" strokeWidth="2"/>
              <line id="Line_13" data-name="Line 13" x1="7" y1="7" transform="translate(0 7)"   strokeLinecap="round" strokeWidth="2"/>
            </g>
          </svg>
        </span>
      );
      break;
    case "lens":
      content = (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="19.914" height="19.914" viewBox="0 0 19.914 19.914" className={color === "gray"?'stroke-icongray-100':'stroke-iconorange-100'}>
            <g id="Group_6821" data-name="Group 6821" transform="translate(-13 -13)">
              <g id="Ellipse_16" data-name="Ellipse 16" transform="translate(13 13)" className={`fill-none ${color === "gray"?'stroke-icongray-100':'stroke-iconorange-100'}`} strokeWidth="2">
                <circle cx="8.5" cy="8.5" r="8.5" className='stroke-none'/>
                <circle cx="8.5" cy="8.5" r="7.5" className='fill-none' />
              </g>
              <line id="Line_3" data-name="Line 3" x2="4" y2="4" transform="translate(27.5 27.5)" className={`fill-none ${color === "gray"?'stroke-icongray-100':'stroke-iconorange-100'}`}  strokeLinecap="round" strokeWidth="2"/>
            </g>
          </svg>
        </span>
      );
      break;
    case "star-filled":
      content = (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14.073" height="14.087" viewBox="0 0 14.073 14.087" className={color === "gray"?'fill-icongray-50':'fill-iconorange-50'}>
            <path id="Path_8560" data-name="Path 8560" d="M11,59a6.077,6.077,0,0,1-1,0L7,57,3,59c-.114.065.129.01,0,0s.1.082,0,0-.952.13-1,0a4.72,4.72,0,0,1,0-1l1-4L0,51c-.089-.1.03.132,0,0a4.98,4.98,0,0,1,0-1c.04-.133-.1.09,0,0s.872.02,1,0l4-1,1-4c.057-.126.89.074,1,0s-.13,0,0,0-.11-.074,0,0,.943-.126,1,0l1,4,4,1c.128.02.9-.09,1,0s-.04-.133,0,0a4.98,4.98,0,0,1,0,1c-.03.132.089-.1,0,0l-3,3v4a4.537,4.537,0,0,1,0,1c-.049.132.107-.083,0,0C10.875,59.095,11.153,59.008,11,59Z" transform="translate(0.036 -44.957)" />
          </svg>
        </span>
      );
      break;
    case "star-border":
      content = (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14.084" height="13.535" viewBox="0 0 14.084 13.535"  >
            <path id="star" d="M13.025,5.225a.693.693,0,0,0-.6-.477l-3.77-.342L7.168.918a.694.694,0,0,0-1.277,0L4.4,4.406.631,4.748A.7.7,0,0,0,.236,5.963l2.85,2.5-.84,3.7a.694.694,0,0,0,1.033.751L6.53,10.969l3.25,1.944a.695.695,0,0,0,1.033-.751l-.84-3.7,2.85-2.5a.7.7,0,0,0,.2-.738ZM6.592,10.932" transform="translate(0.513 0.004)" className={`fill-none ${color === "gray"?'stroke-icongray-50':'stroke-iconorange-100'}`} strokeWidth="1"/>
          </svg>
        </span>
      );
      break;
    case "heart-filled":
      content = (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20.112" height="16.717" viewBox="0 0 20.112 16.717" >
            <path id="Path_8609" data-name="Path 8609" d="M13.913,35.525a5.224,5.224,0,0,1,5.2,5.2c0,5.249-9.556,10.448-9.556,10.448S0,45.9,0,40.723a5.2,5.2,0,0,1,5.2-5.2h0a5.147,5.147,0,0,1,4.357,2.344A5.2,5.2,0,0,1,13.913,35.525Z" className={color === "gray"?'stroke-icongray-50 fill-icongray-50':'stroke-iconorange-50 fill-iconorange-50'} transform="translate(0.5 -35.025)"  strokeWidth="1"/>
          </svg>
        </span>
        
      );
      break;
    case "heart-border":
      content = (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20.112" height="16.717" viewBox="0 0 20.112 16.717" className={color === "gray"?'stroke-icongray-50 fill-none':'stroke-iconorange-50 fill-none'}>
            <path id="Path_10234" data-name="Path 10234" d="M13.913,35.525a5.224,5.224,0,0,1,5.2,5.2c0,5.249-9.556,10.448-9.556,10.448S0,45.9,0,40.723a5.2,5.2,0,0,1,5.2-5.2h0a5.147,5.147,0,0,1,4.357,2.344A5.2,5.2,0,0,1,13.913,35.525Z" transform="translate(0.5 -35.025)"  strokeWidth="1"/>
          </svg>
        </span>
      );
      break;
      case "pen":
      content = (
        <span>
          <svg id="Group_1894" data-name="Group 1894" xmlns="http://www.w3.org/2000/svg" width="10.813" height="10.813" viewBox="0 0 10.813 10.813" className={color === "gray"?'fill-icongray-50':'fill-iconorange-50'}>
            <path id="Path_4222" data-name="Path 4222" d="M0,482.7l1.177-.153L.155,481.528Z" transform="translate(-0.002 -471.892)" />
            <path id="Path_4223" data-name="Path 4223" d="M10.778,103.985l-.121.925,1.423,1.423.925-.121,6.3-6.3-2.227-2.227Z" transform="translate(-10.444 -95.733)" />
            <path id="Path_4224" data-name="Path 4224" d="M349.008.112A.385.385,0,0,0,348.734,0a.417.417,0,0,0-.294.123l-1.52,1.52,2.227,2.227,1.52-1.52a.4.4,0,0,0,.011-.568Z" transform="translate(-339.978)" />
          </svg>
        </span>
      );
      break;
    case "income":
      content = (
        <span>
          <svg id="_002-income" data-name="002-income" xmlns="http://www.w3.org/2000/svg" width="29.197" height="29.607" viewBox="0 0 29.197 29.607" className={color === "gray"?'fill-icongray-50':'fill-iconorange-50'}>
            <path id="Path_10146" data-name="Path 10146" d="M186.073,14.648a7.324,7.324,0,1,0-7.324-7.324A7.332,7.332,0,0,0,186.073,14.648Zm-.867-11.629v-.2a.867.867,0,0,1,1.735,0v.2a2.294,2.294,0,0,1,1.809,2.238.867.867,0,1,1-1.735,0,.556.556,0,0,0-.555-.555h-.778a.555.555,0,0,0-.33,1l.722.534,1.753,1.3a2.3,2.3,0,0,1,.927,1.825V9.37a2.291,2.291,0,0,1-1.813,2.256v.2a.867.867,0,0,1-1.735,0v-.2A2.29,2.29,0,0,1,183.4,9.4a.867.867,0,0,1,.862-.873h.006a.868.868,0,0,1,.867.862.554.554,0,0,0,.558.552l.777,0a.555.555,0,0,0,.552-.559V9.373a.557.557,0,0,0-.225-.442l-.721-.534-1.754-1.3a2.29,2.29,0,0,1,.886-4.08Z" transform="translate(-168.618)" />
            <path id="Path_10147" data-name="Path 10147" d="M9.136,318.805a.808.808,0,0,0-1.1-.3l-4.08,2.355a.809.809,0,0,0-.3,1.1l4.17,7.223a.809.809,0,0,0,1.1.3l4.08-2.356a.808.808,0,0,0,.3-1.1Z" transform="translate(-3.548 -299.989)" />
            <path id="Path_10148" data-name="Path 10148" d="M157.56,273.6a1.215,1.215,0,0,0-1.7-.276l-5.078,3.659a3.055,3.055,0,0,1-.365.268,3.146,3.146,0,0,1-1.682.482h-4.155a.867.867,0,1,1,0-1.735h4.443a1.15,1.15,0,0,0,1.148-1.2A1.168,1.168,0,0,0,149,273.7h-3.382a5.624,5.624,0,0,0-.749-.663,5.548,5.548,0,0,0-3.3-1.085,6.12,6.12,0,0,0-5.295,3.235l3.548,6.145h6.656a7.47,7.47,0,0,0,3.727-.986,14.932,14.932,0,0,0,1.269-.824c1.909-1.372,5.813-4.221,5.816-4.223A1.216,1.216,0,0,0,157.56,273.6Z" transform="translate(-128.593 -256.224)" />
          </svg>
        </span>
      );
      break;
    case "shopping-bag":
      content = (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18.548" height="21.584" viewBox="0 0 18.548 21.584" className={color === "gray"?'fill-icongray-50':'fill-iconorange-50'}>
            <g id="shopping-bag" transform="translate(-36.001)">
              <g id="Group_8094" data-name="Group 8094" transform="translate(36.001)">
                <path id="Path_10159" data-name="Path 10159" d="M53.368,5.889a.169.169,0,0,0-.168-.156H50.165V4.89a4.89,4.89,0,0,0-9.78,0v.843H37.349a.169.169,0,0,0-.168.156L36,21.4a.169.169,0,0,0,.168.181H54.38a.169.169,0,0,0,.168-.181Zm-11.634-1a3.541,3.541,0,1,1,7.082,0v.843H41.734Zm-.674,5.565a1.688,1.688,0,0,1-1.686-1.686,1.592,1.592,0,0,1,1.012-1.545V8.768a.674.674,0,0,0,1.349,0V7.224a1.6,1.6,0,0,1,1.012,1.544A1.688,1.688,0,0,1,41.059,10.455Zm8.431,0A1.688,1.688,0,0,1,47.8,8.768a1.592,1.592,0,0,1,1.012-1.545V8.768a.674.674,0,1,0,1.349,0V7.224a1.6,1.6,0,0,1,1.012,1.544A1.688,1.688,0,0,1,49.49,10.455Z" transform="translate(-36.001)" />
              </g>
            </g>
          </svg>
        </span>
      );
      break;
    case "bell":
      content = (
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="17.727" height="22.367" viewBox="0 0 17.727 22.367" className={color === "gray"?'fill-icongray-50':'fill-iconorange-50'}>
            <g id="Group_8081" data-name="Group 8081" transform="translate(-28 -286)">
              <g id="_003-bell" data-name="003-bell" transform="translate(28 286)">
                <path id="Path_10149" data-name="Path 10149" d="M184.9,465.044a3.379,3.379,0,0,0,6.185,0Z" transform="translate(-179.133 -444.695)" />
                <path id="Path_10150" data-name="Path 10150" d="M198.872,2.137a7.6,7.6,0,0,1,2.6.455v-.1A2.494,2.494,0,0,0,198.975,0h-.206a2.494,2.494,0,0,0-2.492,2.492v.1A7.615,7.615,0,0,1,198.872,2.137Z" transform="translate(-190.008 0)" />
                <path id="Path_10151" data-name="Path 10151" d="M70.067,94.423H53.687a.668.668,0,0,1-.658-.512.637.637,0,0,1,.351-.725,3.476,3.476,0,0,0,1.058-1.438,16.615,16.615,0,0,0,1.1-6.575,6.337,6.337,0,0,1,12.674-.025c0,.008,0,.017,0,.025a16.615,16.615,0,0,0,1.1,6.575,3.475,3.475,0,0,0,1.058,1.438.637.637,0,0,1,.35.725A.668.668,0,0,1,70.067,94.423Zm.315-1.232h0Z" transform="translate(-53.013 -75.386)" />
              </g>
            </g>
          </svg>
        </span>
      );
      break;
    case "mail":
      content = (
        <span>
          <svg id="_004-inbox-mail" data-name="004-inbox-mail" xmlns="http://www.w3.org/2000/svg" width="21.727" height="15.452" viewBox="0 0 21.727 15.452" className={color === "gray"?'fill-icongray-50':'fill-iconorange-50'}>
            <path id="Path_10152" data-name="Path 10152" d="M82.12,383.617H63.04l7.675-6.677,1.346,1.171a.791.791,0,0,0,1.038,0l1.346-1.171Z" transform="translate(-61.716 -368.166)" />
            <path id="Path_10153" data-name="Path 10153" d="M325.884,218.59v13.561l-7.794-6.78Z" transform="translate(-304.157 -217.645)" />
            <path id="Path_10154" data-name="Path 10154" d="M82.12,199.47l-9.54,8.3-9.54-8.3Z" transform="translate(-61.716 -199.47)" />
            <path id="Path_10155" data-name="Path 10155" d="M44.064,225.37l-7.794,6.78V218.59Z" transform="translate(-36.27 -217.645)" />
          </svg>
        </span>
      );
      break;
    case "info":
      content = (
        <span>
          <svg id="_005-info" data-name="005-info" xmlns="http://www.w3.org/2000/svg" width="11.434" height="25.877" viewBox="0 0 11.434 25.877" className={color === "gray"?'fill-icongray-50':'fill-iconorange-50'}>
            <path id="Path_10157" data-name="Path 10157" d="M42.23,23.085l-.362,1.478q-1.627.642-2.6.978a6.848,6.848,0,0,1-2.252.337,4.5,4.5,0,0,1-3.063-.961,3.109,3.109,0,0,1-1.093-2.441,8.632,8.632,0,0,1,.081-1.174q.083-.6.264-1.356l1.356-4.8q.181-.689.305-1.306a5.677,5.677,0,0,0,.123-1.124,1.739,1.739,0,0,0-.379-1.282,2.143,2.143,0,0,0-1.45-.362,3.8,3.8,0,0,0-1.078.165c-.369.109-.684.214-.949.312L31.5,10.07q1.332-.542,2.549-.928a7.623,7.623,0,0,1,2.3-.387,4.385,4.385,0,0,1,3.017.946,3.138,3.138,0,0,1,1.06,2.456c0,.208-.023.576-.073,1.1a7.364,7.364,0,0,1-.272,1.447l-1.35,4.779a12.694,12.694,0,0,0-.3,1.316,6.776,6.776,0,0,0-.132,1.117,1.609,1.609,0,0,0,.425,1.3,2.4,2.4,0,0,0,1.477.345,4.264,4.264,0,0,0,1.116-.173A6.243,6.243,0,0,0,42.23,23.085Zm.342-20.063a2.8,2.8,0,0,1-.944,2.128,3.215,3.215,0,0,1-2.274.88,3.25,3.25,0,0,1-2.285-.88,2.79,2.79,0,0,1-.953-2.128A2.818,2.818,0,0,1,37.069.887a3.373,3.373,0,0,1,4.559,0A2.823,2.823,0,0,1,42.573,3.022Z" transform="translate(-31.139)" />
          </svg>
        </span>
      );
      break;
    default:
      content = <span></span>;
      break;
  }
  return (
    <>
      {content}
    </>
    
  )
}