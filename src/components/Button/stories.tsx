import { Meta, Story } from '@storybook/react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Click me'
}
