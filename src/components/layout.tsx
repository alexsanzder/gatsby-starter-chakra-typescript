/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Box, Link, Icon } from "@chakra-ui/core"

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box m="0 auto" maxW="960" px="6" py="5">
        <Box as="main">{children}</Box>
        <Box as="footer">
          © {new Date().getFullYear()}, Built with
          {` `}
          <Link href="https://www.gatsbyjs.org" color="teal.500" isExternal>
            Gatsby <Icon name="external-link" mx="2px" />
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default Layout
