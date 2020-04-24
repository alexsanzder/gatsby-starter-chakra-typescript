import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Heading, Link, Text } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Heading as="h1">Hi from the second page</Heading>
    <Text fontSize="lg">Welcome to page 2</Text>
    <Link as={GatsbyLink} to="/">
      Go back to the homepage
    </Link>
  </Layout>
)

export default SecondPage
