'use client'
import { api } from '@/lib/axios'
import * as Dialog from '@radix-ui/react-dialog'
import { Search } from 'lucide-react'
import { ReactNode, useEffect, useState } from 'react'
import SpinnerLoading from '../spinner-loading'
import { ScrollArea } from '../scroll-area'
import Link from 'next/link'

interface SearchInputRootProps {
  children?: ReactNode
}

export function SearchInputRoot({ children }: SearchInputRootProps) {
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [searchResult, setSearchResult] = useState<any[]>([])
  const [debouncedInputValue, setDebouncedInputValue] = useState('')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputText)
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [inputText])

  useEffect(() => {
    async function searchMovie(title: string) {
      try {
        setIsLoading(true)
        const response = await api(`/search/movie?query=${title}`)
        setSearchResult(response.data.results)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }

    searchMovie(debouncedInputValue)
  }, [debouncedInputValue])

  return (
    <Dialog.Root>
      {children}
      <Dialog.Portal>
        {children}
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 px-5">
          <div className="overflow-hidden rounded-lg border border-zinc-700 bg-base-400">
            <div className="flex items-center border-b border-b-zinc-700 px-5">
              <Search size={22} color="#d4d4d8" />
              <input
                className="w-full select-none bg-transparent px-4 py-4 font-poppins text-zinc-400 outline-none"
                placeholder="Buscar filme"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              {isLoading ? <SpinnerLoading /> : null}
            </div>
            <ScrollArea className="flex max-h-[400px] w-full flex-col px-5 py-5">
              <div className="flex h-max flex-col">
                {searchResult.map((movie) => (
                  <Dialog.Close asChild key={movie.id}>
                    <Link
                      href={`movie?id=${movie.id}`}
                      target="_blank"
                      onClick={() => {
                        setDebouncedInputValue(''), setInputText('')
                      }}
                      className="w-full rounded-lg px-4 py-3 font-poppins text-white hover:bg-zinc-900"
                    >
                      {movie.title}
                    </Link>
                  </Dialog.Close>
                ))}
              </div>
            </ScrollArea>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
