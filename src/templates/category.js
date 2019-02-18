import React from 'react'
import { Flex } from '@rebass/grid'
import { FaTag, FaStar } from 'react-icons/fa'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Link from '../components/Link'

const Container = styled(Flex)`
    flex-direction: column;
    padding-top: 50px;
`
const List = styled(Flex)`
    flex-direction: column;
`
const Title = styled(Flex)`
    font-size: 20px;
    color: #ce0f67;
    align-items: center;
    svg {
        margin-right: 10px;
    }
`
const Item = styled(Flex)`
    font-size: 18px;
    color: #999;
    margin: 10px 0;
    align-items: center;
    svg {
        margin-right: 5px;
    }
`
const Num = styled('span')`
    font-size: 18px;
    margin-left: 5px;
`

function Category({ posts, post, category }) {
    if (category) {
        return (
            <Container>
                <Title my="30px">{category}</Title>
                {post.map(({ id, frontmatter }) => (
                    <Link to={frontmatter.path}>
                        <List key={id}>
                            <Item>{frontmatter.title}</Item>
                        </List>
                    </Link>
                ))}
            </Container>
        )
    }
    return (
        <Container>
            {Object.keys(posts).map((item, index) => (
                <List key={index}>
                    <Link to={`/categories/${item}`}>
                        <Title my="30px">
                            <FaTag /> {item}
                            <Num>({posts[item].length})</Num>
                        </Title>
                    </Link>
                    {Array.isArray(posts[item]) &&
                        posts[item].slice(0, 3).map(({ frontmatter }) => {
                            return (
                                <Link to={frontmatter.path}>
                                    <Item pl="20px">
                                        <FaStar />
                                        {frontmatter.title}
                                    </Item>
                                </Link>
                            )
                        })}
                </List>
            ))}
        </Container>
    )
}

export default function TagsTemplate(props) {
    const { pageContext } = props
    return (
        <Layout {...props}>
            <Category {...pageContext} />
        </Layout>
    )
}
