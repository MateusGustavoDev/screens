'use client'
import { AuthProvider } from '@/providers/auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'

interface ProvidersProps {
  children: ReactNode
}

const queryClient = new QueryClient()

export function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <SkeletonTheme
          baseColor="var(--skeleton-base-color)"
          highlightColor="var(--skeleton-highlight-color)"
        >
          {children}
        </SkeletonTheme>
      </QueryClientProvider>
    </AuthProvider>
  )
}
