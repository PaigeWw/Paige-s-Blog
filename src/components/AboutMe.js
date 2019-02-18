/**
 * Created by Wyp on 2019-01-02.
 */
import React from 'react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import face from '../img/face.jpg'

const Container = styled(Flex)`
    flex-direction: column;
    height: 100%;
    margin: auto;
`

const Face = styled.img`
    margin: auto;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-top: 100px;
`

export default AboutMe => (
    <Container>
        <Face src={face}/>
        <p>在平坦的路面上曲折前行</p>
    </Container>
)
