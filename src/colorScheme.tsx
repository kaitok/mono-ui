import type { StoryObj } from '@storybook/react'

export function withColorScheme(Story: StoryObj, context) {
  let { theme } = context.globals
  const colorSchemeClass = `color-scheme--${theme}`

  return (
    <div className={colorSchemeClass}>
      <Story />
    </div>
  )
}
