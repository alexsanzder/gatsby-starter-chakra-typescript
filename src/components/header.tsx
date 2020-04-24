import React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  Heading,
  Link,
  useColorMode,
  Stack,
  IconButton,
} from "@chakra-ui/core"

export interface HeaderProps {
  siteTitle?: string
}

const Header = ({ siteTitle }: HeaderProps): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box as="header" bg="teal.500" mb="6">
      <Box m="0 auto" maxW="960" px="6" py="5">
        <Stack justify="space-between" align="center" flexDirection="row">
          <Heading as="h1" m="0">
            <Link as={GatsbyLink} to="/" color="white" textDecoration="none">
              {siteTitle}
            </Link>
          </Heading>
          <IconButton
            variantColor="link"
            color="white"
            aria-label="Toggle color mode"
            size="lg"
            icon={colorMode === "dark" ? "sun" : "moon"}
            onClick={toggleColorMode}
          />
        </Stack>
      </Box>
    </Box>
  )
}

export default Header
