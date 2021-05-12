import { Story, Meta } from '@storybook/react/types-6-0'
import MoviePopup, { MoviePopupProps } from '.'

export default {
  title: 'MoviePopup',
  component: MoviePopup,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    id: '278',
    img: '/assets/img/aladdin.jpeg',
    name: 'Aladdin',
    overview:
      'Aladdin is a good film to watch! saf askd fkjalsd fkljas dfklmsad f,mnasd fjhl asd,fmn asd,jf asjhldf m,asd fhja sd,mfn asdhjkc ,asjdn fhja,s dc,as djhc j,asd cj,asd nb,as dkjhc as,mdnc khjasd cmn,asd cjhkas dcm,n ashjkdc a,jshdc ',
    video: 'K_tLp7T6U1c'
  }
} as Meta

export const Default: Story<MoviePopupProps> = (args) => (
  <MoviePopup {...args} />
)
