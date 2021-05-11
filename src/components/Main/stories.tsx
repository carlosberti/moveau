import { Story, Meta } from '@storybook/react/types-6-0'
import Main, { MainProps } from '.'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    title: 'Moveau test ci'
  }
} as Meta

export const Default: Story<MainProps> = (args) => <Main {...args} />
