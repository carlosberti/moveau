import { Story, Meta } from '@storybook/react/types-6-0'
import SelectionButton, { SelectionButtonProps } from '.'

export default {
  title: 'SelectionButton',
  component: SelectionButton,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    onClick: { action: 'clicked' }
  }
} as Meta

export const Favourites: Story<SelectionButtonProps> = (args) => (
  <SelectionButton {...args} />
)

Favourites.args = {
  buttonText: 'favourites'
}

export const WatchLater: Story<SelectionButtonProps> = (args) => (
  <SelectionButton {...args} />
)

WatchLater.args = {
  buttonText: 'watch later'
}
