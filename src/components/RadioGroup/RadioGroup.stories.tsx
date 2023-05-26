import type { Meta, StoryObj } from '@storybook/react'
import RadioGroup from './RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof RadioGroup>

export const Primary: Story = {
  args: {
    label: 'A',
  },
}
