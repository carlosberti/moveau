import { Story, Meta } from '@storybook/react/types-6-0'
import Star from '.'

export default {
  title: 'Star',
  component: Star,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <Star />
