import { Story, Meta } from '@storybook/react/types-6-0'
import { useFavouriteStore } from 'store'
import SelectionModal, { SelectionModalProps } from '.'

export default {
  title: 'SelectionModal',
  component: SelectionModal,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    title: 'favourites',
    buttonText: 'clear favourites',
    store: useFavouriteStore.getState,
    key: 'favourites'
  }
} as Meta

export const Default: Story<SelectionModalProps> = (args) => (
  <SelectionModal {...args} />
)
