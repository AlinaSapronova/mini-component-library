/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--borderRadius": 4 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--borderRadius": 4 + "px",
  },
  large: {
    "--height": 16 + "px",
    "--borderRadius": 4 + "px",
  },
}

const WRAPPER_SIZES = {
  small: {
    "--height": 8 + "px",
    "--radius": 4 + "px",
    "--padding": 0 +'px',
  },
  medium: {
    "--height": 12 + "px",
    "--radius": 4 + "px",
    "--padding": 0 +'px',
  },
  large: {
    "--height": 24 + "px",
    "--radius": 8 + "px",
    "--padding": 4 +'px',
  },
}



const ProgressBar = ({ value, size }) => {

const barSize = SIZES[size]
const wrapperStyle = WRAPPER_SIZES[size]

  return (
  <Wrapper style={wrapperStyle}>
     <ProgressTrack value={value} size={size}style={barSize}/>
  </Wrapper>
  )
};

const Wrapper = styled.div`
 width: 370px;
 height: var(--height);
 border-radius: var(--radius);
 padding: var(--padding);
 background-color: ${COLORS.transparentGray35};
 box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35}
 
`;

const ProgressTrack = styled.div`
   background-color: ${COLORS.primary};
   width: ${({value, size}) => 
   size === "large" 
   ? (value / 100) * (370 - 8)
   :(value / 100) * (370)}px;
   height: var(--height);
   border-radius: ${({value}) => 
     (value / 100) * 370 === 370 
     ? "var(--borderRadius)"
     : "var(--borderRadius) 0 0 var(--borderRadius)"
    };

`;

export default ProgressBar;
