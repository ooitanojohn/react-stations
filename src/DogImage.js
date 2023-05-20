import React from 'react'
import styled from 'styled-components'

export const DogImage = (props) => {
  return (
      <_DogImage>
        <_Img src={props.url} alt="dogの画像" />
      </_DogImage>
  )
}

const _DogImage = styled.p`
margin-bottom: 20px;
`;

const _Img = styled.img`
width: 100%;
height: 100px;
object-fit: contain;
`;
