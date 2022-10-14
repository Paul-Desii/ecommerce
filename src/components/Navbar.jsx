import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import {mobile} from '../Responsive'

const Container = styled.div`
    height: 60px;
    width: 100vw;
    ${mobile({height: '50px'})}
    position: relative;
    z-index:9999;
`
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0f0f24;
  ${mobile({padding: '10px 0'})}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  `
const Language = styled.span`
  font-size: 14;
  color: white;
  cursor: pointer;
  ${mobile({display:'none'})}
`
const SeachContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  padding: 5px;
  
`
const Input = styled.input`
  border: none;
  border-radius: 15px;
  padding: 4px 8px;
  ${mobile({width:'50px'})}
`

const Center = styled.div`
  flex:1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  color: white;
  ${mobile({fontSize:'24px'})}
`
const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 40px;
  ${mobile({justifyContent:'center', marginRight:'20px'})}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
  ${mobile({fontSize:'12px'})}
`

const Navbar = () => {
  return (
    <Container>
       <Wrapper>
        <Left>
          <Language>EN</Language>
          <SeachContainer>
            <Input placeholder='Search' />
            <Search style={{color:"gray", fontSize:20, marginLeft:3}} />
          </SeachContainer>
        </Left>
        <Center><Logo>LAMA.</Logo></Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary" overlap="rectangular">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
       </Wrapper>
    </Container>
  )
}

export default Navbar