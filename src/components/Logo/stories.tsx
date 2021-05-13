import { Story, Meta } from '@storybook/react/types-6-0'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />

export const Mobile: Story<LogoProps> = (args) => <Logo {...args} />

Mobile.args = {
  hideOnMobile: true
}
