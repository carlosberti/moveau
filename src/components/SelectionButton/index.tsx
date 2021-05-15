import * as s from './styles'

export type SelectionButtonProps = {
  onClick: () => void
  buttonText: string
}

const SelectionButton = ({ buttonText, onClick }: SelectionButtonProps) => (
  <s.Wrapper onClick={onClick}>{buttonText}</s.Wrapper>
)
export default SelectionButton
