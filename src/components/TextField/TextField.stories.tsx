import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextField from './TextField'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
)

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  placeholder: 'Hello world!',
}
