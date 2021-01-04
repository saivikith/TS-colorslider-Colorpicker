import React, { useState } from "react";
import styled from "styled-components";


interface Myop{
    opacity:number
    color:string

}

const sliderThumbStyles = (props:Myop) => `
  width: 25px;
  height: 25px;
  background: ${props.color};
  cursor: pointer;
  outline: 5px solid #333;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .2s;
`;

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  margin-top: 2rem;
  margin-bottom: 2rem;

  .value {
    flex: 1;
    font-size: 2rem;
  }

  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #efefef;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${(props:Myop) => sliderThumbStyles(props)}
    }

    &::-moz-range-thumb {
      ${(props:Myop) => sliderThumbStyles(props)}
    }
  }
`;
interface MYProps {
    hexColor:string
    handleUpdateColor:(hexColor:string,value:number) => void
    color:string
    opacity?:Number
    
}


const Slider:React.FC<MYProps> = ({color,
hexColor,
handleUpdateColor}) => {
  
  const [value, setValue]= useState<number>(0);

  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    
    handleUpdateColor(hexColor, value);
    
    setValue(parseInt(e.target.value));
  };

  return (
    <Styles  opacity={value > 10 ? value / 255 : 0.1} color={color} >
      <input
        type="range"
        min={0}
        max={255}
        value={value}
        className="slider"
        onChange={handleOnChange}
      />
      <div className="value">{value}</div>
    </Styles>
  );
};

export default Slider;