import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import Link from '../components/Link'
import Layout from '../components/Layout'
import 'prismjs/themes/prism-okaidia.css'
import { DateInfo } from '../pages/'

const Container = styled(Flex)`
    box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
    padding: 60px 50px;
    margin-top: 50px;
    background: #fff;
    flex-direction: column;
    border-radius: 5px;
`
const Title = styled(Flex)`
    color: #000;
    font-size: 28px;
    align-self: center;
`

const Navigation = styled(Flex)`
    color: #8590A6;
    font-size: 20px;
    margin-top: 30px;
    justify-content: space-between;
`
const Content = styled('div')`
    font-size: 18px;
    color: #333;
`

export default function Template(props) {
    const { data, pageContext } = props
    const { markdownRemark: post } = data
    const { next, prev } = pageContext
    const { category, date, title } = post.frontmatter
    return (
        <Layout>
            <Helmet title={`Gatsby Blog - ${post.frontmatter.title}`} />

            <Container>
                <Title>{title}</Title>
                <DateInfo
                    category={category}
                    date={date}
                    justifyContent="flex-end"
                />

                <Content dangerouslySetInnerHTML={{ __html: post.html }} />

                <Navigation>
                    {prev ? (
                        <Link to={prev.frontmatter.path}>
                            <FaArrowLeft /> &nbsp;{prev.frontmatter.title}
                        </Link>
                    ) : (
                        <span />
                    )}
                    {next && (
                        <Link to={next.frontmatter.path}>
                            {next.frontmatter.title} &nbsp;
                            <FaArrowRight />
                        </Link>
                    )}
                </Navigation>
            </Container>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "YYYY-MM-DD")
                path
                category
                title
            }
        }
    }
`
