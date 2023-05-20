import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>🐶 DogAlbum</Title>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  background-color: #f5f5f5;
  padding: 1rem;
`;
const Title = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
`;