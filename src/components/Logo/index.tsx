import * as s from './styles'

export type LogoProps = {
  hideOnMobile?: boolean
}

const Logo = ({ hideOnMobile = false }: LogoProps) => (
  <s.Wrapper hideOnMobile={hideOnMobile}>
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 199 45"
      aria-label="movieau"
    >
      <g clipPath="url(#clip0)">
        <path
          stroke="#fff"
          strokeWidth="1.324"
          d="M4.632 4.632h41.029v25.147H4.632z"
        />
        <path
          stroke="#fff"
          strokeWidth="1.324"
          d="M1.985 1.985h46.324v30.441H1.985z"
        />
        <path
          d="M29.516 27.864c1.355 0 2.562.286 3.62.857 1.06.55 1.896 1.387 2.51 2.51.614 1.122.921 2.488.921 4.097v10.26H33.71v-9.847c0-1.736-.434-3.06-1.303-3.97-.847-.932-2.001-1.398-3.462-1.398-1.504 0-2.7.487-3.59 1.461-.889.953-1.334 2.34-1.334 4.161v9.593h-2.858v-9.847c0-1.736-.435-3.06-1.303-3.97-.847-.932-2.001-1.398-3.462-1.398-1.504 0-2.7.487-3.59 1.461-.889.953-1.334 2.34-1.334 4.161v9.593h-2.89V28.181h2.89v2.51a5.737 5.737 0 012.287-2.097c.975-.487 2.044-.73 3.209-.73 1.46 0 2.752.328 3.875.984 1.122.657 1.959 1.62 2.51 2.891a5.709 5.709 0 012.413-2.859c1.123-.677 2.372-1.016 3.749-1.016z"
          fill="#fff"
        />
        <path
          d="M23.013 18.374c-.734 0-1.355-.254-1.864-.762-.508-.508-.762-1.13-.762-1.864 0-.734.254-1.355.762-1.863.509-.508 1.13-.763 1.864-.763a2.35 2.35 0 011.779.763c.508.508.762 1.13.762 1.863 0 .734-.254 1.356-.762 1.864a2.35 2.35 0 01-1.779.762zm1.864 3.77v23.209h-3.855v-23.21h3.855z"
          fill="#fff"
        />
      </g>
      <g clipPath="url(#clip1)" fill="#fff" className="text">
        <path d="M82.802 17.57c1.355 0 2.562.285 3.621.857 1.059.55 1.895 1.387 2.51 2.51.614 1.122.92 2.487.92 4.097v10.26h-2.858v-9.847c0-1.737-.434-3.06-1.302-3.97-.847-.933-2.002-1.398-3.463-1.398-1.503 0-2.7.487-3.59 1.46-.889.954-1.333 2.34-1.333 4.162v9.593h-2.86v-9.847c0-1.737-.433-3.06-1.302-3.97-.846-.933-2-1.398-3.462-1.398-1.503 0-2.7.487-3.59 1.46-.889.954-1.333 2.34-1.333 4.162v9.593h-2.891V17.887h2.89v2.51a5.74 5.74 0 012.288-2.097c.974-.487 2.043-.73 3.208-.73 1.461 0 2.753.328 3.875.984 1.123.656 1.959 1.62 2.51 2.89a5.71 5.71 0 012.414-2.858c1.122-.678 2.371-1.017 3.748-1.017zm19.385 18.01c-1.63 0-3.113-.37-4.447-1.112-1.313-.741-2.35-1.79-3.113-3.145-.741-1.376-1.112-2.964-1.112-4.764 0-1.78.382-3.346 1.144-4.701.783-1.377 1.842-2.425 3.176-3.145 1.335-.741 2.827-1.112 4.479-1.112 1.652 0 3.145.37 4.479 1.112 1.334.72 2.382 1.757 3.145 3.113.783 1.355 1.175 2.933 1.175 4.733 0 1.8-.402 3.388-1.207 4.764a8.182 8.182 0 01-3.208 3.145c-1.356.741-2.859 1.112-4.511 1.112zm0-2.541a6.1 6.1 0 002.922-.73c.911-.488 1.642-1.219 2.192-2.193.572-.974.858-2.16.858-3.557 0-1.398-.275-2.584-.826-3.558-.551-.974-1.271-1.694-2.16-2.16a5.92 5.92 0 00-2.891-.73 5.983 5.983 0 00-2.922.73c-.868.466-1.567 1.186-2.096 2.16-.53.974-.794 2.16-.794 3.558 0 1.418.254 2.615.762 3.59.53.973 1.228 1.704 2.096 2.19a5.95 5.95 0 002.859.7zm19.207-.413l5.4-14.74h3.081l-6.83 17.408h-3.367l-6.829-17.407h3.113l5.432 14.739zm35.676-6.703c0 .55-.032 1.133-.095 1.747h-13.913c.106 1.716.688 3.06 1.747 4.034 1.08.953 2.382 1.43 3.907 1.43 1.249 0 2.287-.286 3.113-.858a4.68 4.68 0 001.779-2.35h3.113c-.466 1.673-1.398 3.039-2.796 4.097-1.397 1.038-3.134 1.557-5.209 1.557-1.652 0-3.134-.37-4.447-1.112-1.292-.741-2.308-1.79-3.049-3.145-.742-1.376-1.112-2.964-1.112-4.764 0-1.8.36-3.378 1.08-4.733.72-1.356 1.726-2.393 3.017-3.113 1.313-.741 2.817-1.112 4.511-1.112 1.652 0 3.113.36 4.384 1.08a7.35 7.35 0 012.922 2.986c.699 1.25 1.048 2.668 1.048 4.256zm-2.986-.603c0-1.101-.243-2.044-.73-2.827a4.594 4.594 0 00-2.002-1.81c-.825-.424-1.747-.636-2.763-.636-1.461 0-2.711.466-3.748 1.398-1.017.931-1.599 2.223-1.747 3.875h10.99zm5.722 1.207c0-1.779.36-3.335 1.08-4.67.72-1.355 1.704-2.403 2.954-3.144 1.27-.741 2.679-1.112 4.224-1.112 1.525 0 2.849.328 3.971.985 1.122.656 1.959 1.482 2.509 2.477v-3.176h2.923v17.407h-2.923v-3.24c-.571 1.016-1.429 1.863-2.573 2.541-1.122.657-2.435.985-3.938.985-1.546 0-2.944-.381-4.193-1.144-1.25-.762-2.234-1.831-2.954-3.208-.72-1.376-1.08-2.944-1.08-4.701zm14.738.032c0-1.313-.264-2.457-.794-3.43-.529-.975-1.249-1.716-2.16-2.225-.889-.529-1.874-.794-2.954-.794s-2.065.255-2.954.763c-.889.508-1.599 1.25-2.128 2.223-.53.974-.794 2.118-.794 3.43 0 1.335.264 2.5.794 3.495.529.974 1.239 1.726 2.128 2.255.889.508 1.874.763 2.954.763s2.065-.255 2.954-.763c.911-.53 1.631-1.28 2.16-2.255.53-.995.794-2.15.794-3.462zm23.245-8.672v17.407h-2.89V32.72c-.551.89-1.324 1.588-2.319 2.097-.974.486-2.054.73-3.24.73-1.355 0-2.573-.275-3.653-.826-1.08-.572-1.938-1.419-2.573-2.541-.614-1.122-.921-2.488-.921-4.098V17.887h2.859v9.815c0 1.715.434 3.039 1.302 3.97.868.911 2.054 1.367 3.558 1.367 1.545 0 2.763-.477 3.653-1.43.889-.953 1.334-2.34 1.334-4.16v-9.562h2.89zM131.809 34.412h3.97V10.588h-3.97v23.824zM136.441 4.765a2.647 2.647 0 10-5.294 0 2.647 2.647 0 005.294 0z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h50.294v45H0z" />
        </clipPath>
        <clipPath id="clip1">
          <path fill="#fff" transform="translate(61)" d="M0 0h138v36H0z" />
        </clipPath>
      </defs>
    </svg>
  </s.Wrapper>
)
export default Logo
