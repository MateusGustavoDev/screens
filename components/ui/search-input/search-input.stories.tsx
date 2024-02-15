import { Meta, StoryObj } from '@storybook/react'
import { SearchInputRoot } from './search-input-root'
import { SearchInputTrigger } from './search-input-trigger'

const meta: Meta<typeof SearchInputRoot> = {
  title: 'ui/SearchInput',
  component: SearchInputRoot,
  decorators: [
    () => {
      return (
        <SearchInputRoot>
          <SearchInputTrigger>
            <button className="rounded-md bg-zinc-700 px-4 py-2 font-semibold text-white hover:bg-zinc-800">
              trigger
            </button>
          </SearchInputTrigger>
        </SearchInputRoot>
      )
    },
  ],
}

export default meta

type Story = StoryObj<typeof SearchInputRoot>

export const Default: Story = {}
