import { Meta, Story } from '@storybook/react'

import { image_portal_and_brand } from '../../../public/assets/'

import Image from '.'

export default {
  title: 'Image',
  component: Image,
  args: {}
} as Meta

export const Default: Story = (args) => <Image {...args} />

Default.args = {
  src: image_portal_and_brand,
  width: '35%',
  height: '35%',
  alt: 'Rick and morty out portal'
}
