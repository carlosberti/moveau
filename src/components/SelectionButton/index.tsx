import * as s from './styles'

export type SelectionButtonProps = {
  onClick: () => void
  buttonText: string
}

const SelectionButton = ({ buttonText, onClick }: SelectionButtonProps) => (
  <s.Wrapper
    title={`Click to open ${buttonText}`}
    aria-label={`Click to open ${buttonText}`}
    onClick={onClick}
  >
    {buttonText}
  </s.Wrapper>
)
export default SelectionButton
