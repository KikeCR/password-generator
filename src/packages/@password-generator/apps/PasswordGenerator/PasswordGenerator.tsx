
import React from 'react'
import { Field } from '@/components/ui/field'
import { Button, Card, Flex, Input, Stack } from '@chakra-ui/react'
import PasswordGeneratorHeader from '../../components/PasswordGeneratorHeader'
import { useGeneratePassword } from './hooks/useGeneratePassword'
import { Toaster } from '@/components/ui/toaster'
import { NumberInputField, NumberInputRoot } from '@/components/ui/number-input'
import { PASSWORD_LENGTH_ERROR_TEXT, PASSWORD_LENGTH_HELPER_TEXT, PASSWORD_LENGTH_MAX, PASSWORD_LENGTH_MIN } from '../../constants'
import { Copy, RefreshCcw } from 'lucide-react'

const PasswordGenerator = () => {
  const { passwordGeneratorHandlers, passwordGeneratorData } = useGeneratePassword()

  return (
    <>
    <Flex direction="column" align="center" justify="center" h={{ base: '100vh', md: '100vh' }} gap="8" bg={{ base: "#F5F5F5", _dark: "#181C14" }}>
      <PasswordGeneratorHeader />
      <Flex gap="4" justify="center" align='center'>
        <Card.Root maxW="sm" width={{ base: '90%', md: '400px' }}>
          <Card.Body>
            <Stack gap="4" w="full" justifyContent="center">
              <Field 
                label="Password Length"
                helperText={passwordGeneratorHandlers.handlePasswordLengthValidation() ? '' : PASSWORD_LENGTH_HELPER_TEXT}
                invalid={passwordGeneratorHandlers.handlePasswordLengthValidation()}
                errorText={PASSWORD_LENGTH_ERROR_TEXT}>
                <NumberInputRoot
                  min={PASSWORD_LENGTH_MIN}
                  max={PASSWORD_LENGTH_MAX}
                  value={passwordGeneratorData.passwordLength}
                  onValueChange={(e) => passwordGeneratorHandlers.setPasswordLength(e.value)}
                  width="full"
                >
                  <NumberInputField />
                </NumberInputRoot>
              </Field>
              <Button 
                variant="surface"
                colorPalette="teal"
                onClick={passwordGeneratorHandlers.generatePassword}>
                Generate
                <RefreshCcw />
              </Button>
              <Field label="">
                <Input
                  size="lg"
                  value={passwordGeneratorData.password} 
                  onChange={() => {
                    console.log('password changed')
                  }}
                />
              </Field>
            </Stack>
          </Card.Body>
          <Card.Footer justifyContent="center">
            <Button 
              variant="solid"
              onClick={passwordGeneratorHandlers.handleCopyPassword}>
              Copy
              <Copy />
            </Button>
          </Card.Footer>
        </Card.Root>
      </Flex>
      <Toaster />
    </Flex>
    </>
  )
}

export default PasswordGenerator