"use client"
import { useState } from "react"
import { toaster } from "@/components/ui/toaster"
import { PASSWORD_DEFAULT_LENGTH, PASSWORD_LENGTH_MAX, PASSWORD_LENGTH_MIN } from "@/packages/@password-generator/constants"

export const useGeneratePassword = () => {
  const [password, setPassword] = useState<string>('')
  const [passwordLength, setPasswordLength] = useState<string>(PASSWORD_DEFAULT_LENGTH)

  const handlePasswordLengthValidation = () => {
    const passwordLength = Number(passwordGeneratorData.passwordLength)
    return passwordLength < PASSWORD_LENGTH_MIN || passwordLength > PASSWORD_LENGTH_MAX
  }

  const generatePassword = () => {
    const length = Number(passwordGeneratorData.passwordLength)
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const numberChars = '0123456789'
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'

    const allChars = upperCaseChars + lowerCaseChars + numberChars + specialChars
    
    if (length < 12) {
        toaster.create({
          title: 'Recommendation',
          description: "It's recommended to use a password length of at least 12 characters for better security.",
          type: 'warning',
        })
    }
    
    let password = ''
    
    // Ensure at least one character from each character set
    password += upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length))
    password += lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length))
    password += numberChars.charAt(Math.floor(Math.random() * numberChars.length))
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length))

    // Fill the rest of the password length with random characters
    for (let i = password.length; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length))
    }

    // Shuffle the password to ensure random order
    setPassword(password.split('').sort(() => Math.random() - 0.5).join(''))
  }

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(passwordGeneratorData.password)
    toaster.create({
      title: 'Copied!',
      description: 'Password copied to clipboard.',
      type: 'success'
    })
  }

  const passwordGeneratorData = {
    password,
    passwordLength
  }

  const passwordGeneratorHandlers = {
    generatePassword,
    setPasswordLength,
    handlePasswordLengthValidation,
    handleCopyPassword
  }

  return {
    passwordGeneratorData,
    passwordGeneratorHandlers
  }
}