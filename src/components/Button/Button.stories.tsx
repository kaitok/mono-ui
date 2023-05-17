import type { Meta, StoryObj, Decorator } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  decorators: [withColorScheme],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Button',
    width: '100px',
    borderRadius: '0px',
    padding: '8px 20px',
  },
}

function withColorScheme(Story: StoryObj, context) {
  let { theme } = context.globals
  if (theme === 'light') {
    return (
      <>
        <div className="color-scheme--light">
          <Story />
        </div>
      </>
    )
  }
  if (theme === 'dark') {
    return (
      <>
        <div className="color-scheme--dark">
          <Story />
        </div>
      </>
    )
  }
}
