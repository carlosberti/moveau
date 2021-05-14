import * as s from './styles'

export type ArrowProps = {
  hideClock?: boolean
  fill?: boolean
}

const Arrow = ({ hideClock = false, fill }: ArrowProps) => (
  <s.Wrapper hideClock={hideClock} fill={fill}>
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      role="img"
    >
      <path
        d="M1 23.042V2.476c0-.793.834-1.309 1.544-.954l20.568 10.284c.783.391.787 1.506.008 1.904L12.6 19.083 2.535 24A1.067 1.067 0 011 23.042z"
        stroke="url(#paint0_linear)"
      />
      <path
        d="M12.25 12.807a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
        stroke="url(#paint1_linear)"
        className="clock"
      />
      <path
        d="M8.8 10v2.8h2.6"
        stroke="url(#paint2_linear)"
        strokeWidth=".5"
        className="clock"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="1"
          y1="-.306"
          x2="25"
          y2="24.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFF80" />
          <stop offset="1" stopColor="#FF80BF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="4.75"
          y1="8.455"
          x2="12.75"
          y2="16.807"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFF80" />
          <stop offset="1" stopColor="#FF80BF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="8.8"
          y1="9.877"
          x2="11.601"
          y2="12.592"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFF80" />
          <stop offset="1" stopColor="#FF80BF" />
        </linearGradient>
      </defs>
    </svg>
  </s.Wrapper>
)
export default Arrow
