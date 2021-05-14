import { Story, Meta } from '@storybook/react/types-6-0'
import Arrow, { ArrowProps } from '.'

export default {
  title: 'Arrow',
  component: Arrow,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<ArrowProps> = (args) => <Arrow {...args} />

export const HideWatch: Story<ArrowProps> = (args) => <Arrow {...args} />

HideWatch.args = {
  hideClock: true
}
