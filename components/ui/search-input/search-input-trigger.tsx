'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'

interface SearchInputTriggerProps {
  children: ReactNode
}

export function SearchInputTrigger({ children }: SearchInputTriggerProps) {
  return <Dialog.DialogTrigger asChild>{children}</Dialog.DialogTrigger>
}
