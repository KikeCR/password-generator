
import React from 'react'
import { Flex, Heading, Highlight } from '@chakra-ui/react'

const PasswordGeneratorHeader = () => {
  return (
    <Flex gap="4" justify="center" align='center'>
      <Heading size={{ base: "3xl", md: "4xl" }} fontWeight='semibold' lineHeight='tall'>
        <Highlight
          query="Password!"
          styles={{ color: "teal.600", fontStyle: "oblique" }}>
          Let&apos;s generate a strong Password!
        </Highlight>
      </Heading>
    </Flex>
  )
}

export default PasswordGeneratorHeader
