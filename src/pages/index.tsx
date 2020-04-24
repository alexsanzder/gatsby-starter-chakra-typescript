import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Heading, Link, Box, Text } from "@chakra-ui/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <Heading>Hi people</Heading>
    <Text fontSize="lg">Welcome to your new Gatsby site.</Text>
    <Text fontSize="sm">Now go build something great.</Text>
    <Box maxW="300px" mb="6">
      <Box as={Image} />
    </Box>
    <Link as={GatsbyLink} to="/page-2/">
      Go to page 2
    </Link>
  </Layout>
)

export default IndexPage
