import React from 'react'
import { graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import { Flex } from '@rebass/grid'
import { FaGithub, FaHome, FaUser, FaPen, FaTags } from 'react-icons/fa'
import Link from '../components/Link'
import AboutMe from '../components/AboutMe'
import face from '../img/face.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Microsoft YaHei;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  html,body,#___gatsby{
    height: 100%;
    background-color: #F6F6F6;
    
  }
 

`

const Root = styled(Flex)`
    
    flex-direction: column;
    height: 100%;
`

const Header = styled(Flex)`
    height: 50px;
    width: 100%;

    padding: 0 30px;
    position: fixed;
    top: 0;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
    z-index: 99999;
    font-size: 20px;
    background-color: rgba(255,255,255);
`
const Nav = styled(Flex)`
    margin-right: 20px;
    cursor: pointer;
    color: #8590A6;
    font-size: 18px;
    &:hover {
        color: #333;
        transition: color 0.3s;
    }
`
const NavWrap = styled(Flex)`
    align-items: center;
    position: relative;
`
const Main = styled(Flex)`
    width: 1000px;
    flex-direction: column;
    margin: 50px auto 0px auto;
    min-height: 600px;
`

const NavGithub = styled(Nav)`
    align-self: center;
`
const LogoWrap = styled(Flex)`
    align-self: center;
    left: 0;
    color: #333;
    & img{
        border-radius: 50%;
        margin-right: 20px;
    }
`

export default ({ children }) => (
    <Root>
        <GlobalStyle />
        <Header>
            <NavWrap>
                <LogoWrap >
                    <img width="34" height="34" src={face}/>
                    <Link to="/">paigeWw'blog</Link>
                </LogoWrap>
            </NavWrap>
            <NavWrap>
                <Nav>
                    <Link to="/about">首页</Link>
                </Nav>
                <Nav>
                    <Link to="/categories">关于我</Link>
                </Nav>
                <FaGithub />
            </NavWrap>
        </Header>
        <AboutMe />
        <Main>{children}</Main>
    </Root>
)
