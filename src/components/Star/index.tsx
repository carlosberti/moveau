import * as s from './styles'

const Star = () => (
  <s.Wrapper>
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 23"
      role="img"
    >
      <path
        d="M8.519 7.46l2.487-6.224c.359-.897 1.629-.897 1.988 0L15.48 7.46c.162.406.556.673.994.673h4.904c.959 0 1.434 1.163.75 1.834l-4.282 4.196a1.07 1.07 0 00-.259 1.123l2.02 5.663A.837.837 0 0118.49 22l-6.046-2.794a1.07 1.07 0 00-.892-.003L5.927 21.76c-.842.383-1.74-.41-1.464-1.293l1.63-5.22a1.07 1.07 0 00-.25-1.062L1.75 9.945c-.656-.678-.174-1.812.77-1.812h5.006c.437 0 .83-.267.993-.673z"
        stroke="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0"
          y1="-2.306"
          x2="24"
          y2="22.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFF80" />
          <stop offset="1" stopColor="#FF80BF" />
        </linearGradient>
      </defs>
    </svg>
  </s.Wrapper>
)
export default Star
