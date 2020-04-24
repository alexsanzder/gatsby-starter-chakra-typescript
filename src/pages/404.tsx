import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Text } from "@chakra-ui/core"

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading>NOT FOUND</Heading>
    <Text fontSize="lg">
      You just hit a route that doesn&#39;t exist... the sadness.
    </Text>
  </Layout>
)

export default NotFoundPage
