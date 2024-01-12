interface IconsProps {
  iconName: "starFill" | "starHalf" | "starEmpty" | "share" | "favorite";
}

const Icons: React.FC<IconsProps> = ({ iconName }) => {
  return (
    <>
      {iconName === "starFill" ? (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.10326 0.816985C6.47008 0.0737389 7.52992 0.0737404 7.89674 0.816986L9.11847 3.29249C9.26413 3.58763 9.5457 3.7922 9.87141 3.83953L12.6033 4.2365C13.4235 4.35568 13.751 5.36365 13.1575 5.94219L11.1807 7.8691C10.945 8.09884 10.8375 8.42984 10.8931 8.75423L11.3598 11.4751C11.4999 12.292 10.6424 12.9149 9.90881 12.5293L7.46534 11.2446C7.17402 11.0915 6.82598 11.0915 6.53466 11.2446L4.09119 12.5293C3.35756 12.9149 2.50013 12.292 2.64024 11.4751L3.1069 8.75423C3.16254 8.42984 3.05499 8.09884 2.81931 7.8691L0.842496 5.94219C0.248979 5.36365 0.576491 4.35568 1.39671 4.2365L4.12859 3.83953C4.4543 3.7922 4.73587 3.58763 4.88153 3.29249L6.10326 0.816985Z" fill="#FF6633" />
        </svg>
      ) : iconName === "starHalf" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.10326 1.81698C7.47008 1.07374 8.52992 1.07374 8.89674 1.81699L10.1185 4.29249C10.2641 4.58763 10.5457 4.7922 10.8714 4.83953L13.6033 5.2365C14.4235 5.35568 14.751 6.36365 14.1575 6.94219L12.1807 8.8691C11.945 9.09884 11.8375 9.42984 11.8931 9.75423L12.3598 12.4751C12.4999 13.292 11.6424 13.9149 10.9088 13.5293L8.46534 12.2446C8.17402 12.0915 7.82598 12.0915 7.53466 12.2446L5.09119 13.5293C4.35756 13.9149 3.50013 13.292 3.64024 12.4751L4.1069 9.75423C4.16254 9.42984 4.05499 9.09884 3.81931 8.8691L1.8425 6.94219C1.24898 6.36365 1.57649 5.35568 2.39671 5.2365L5.12859 4.83953C5.4543 4.7922 5.73587 4.58763 5.88153 4.29249L7.10326 1.81698Z" fill="#BFBFBF" />
          <path d="M7.99965 1.25955V12.1298C7.83981 12.1298 7.67997 12.1681 7.53431 12.2446L5.09084 13.5293C4.35721 13.9149 3.49978 13.292 3.63989 12.4751L4.10655 9.75423C4.16219 9.42984 4.05464 9.09884 3.81895 8.8691L1.84214 6.94219C1.24863 6.36365 1.57614 5.35568 2.39636 5.2365L5.12824 4.83953C5.45395 4.7922 5.73551 4.58763 5.88118 4.29249L7.10291 1.81699C7.28632 1.44536 7.64298 1.25955 7.99965 1.25955Z" fill="#FF6633" />
        </svg>
      ) : iconName === "starEmpty" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.10326 1.81698C7.47008 1.07374 8.52992 1.07374 8.89674 1.81699L10.1185 4.29249C10.2641 4.58763 10.5457 4.7922 10.8714 4.83953L13.6033 5.2365C14.4235 5.35568 14.751 6.36365 14.1575 6.94219L12.1807 8.8691C11.945 9.09884 11.8375 9.42984 11.8931 9.75423L12.3598 12.4751C12.4999 13.292 11.6424 13.9149 10.9088 13.5293L8.46534 12.2446C8.17402 12.0915 7.82598 12.0915 7.53466 12.2446L5.09119 13.5293C4.35756 13.9149 3.50013 13.292 3.64024 12.4751L4.1069 9.75423C4.16254 9.42984 4.05499 9.09884 3.81931 8.8691L1.8425 6.94219C1.24898 6.36365 1.57649 5.35568 2.39671 5.2365L5.12859 4.83953C5.4543 4.7922 5.73587 4.58763 5.88153 4.29249L7.10326 1.81698Z" fill="#BFBFBF" />
        </svg>) : iconName === "share" ? (
          <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_30279_35644)">
              <path fillRule="evenodd" clip-rule="evenodd" d="M16.5 5C16.5 3.067 18.067 1.5 20 1.5C21.933 1.5 23.5 3.067 23.5 5C23.5 6.933 21.933 8.5 20 8.5C18.067 8.5 16.5 6.933 16.5 5ZM20 2.5C18.6193 2.5 17.5 3.61929 17.5 5C17.5 6.38071 18.6193 7.5 20 7.5C21.3807 7.5 22.5 6.38071 22.5 5C22.5 3.61929 21.3807 2.5 20 2.5Z" fill="#414141" />
              <path fillRule="evenodd" clip-rule="evenodd" d="M4.5 12C4.5 10.067 6.067 8.5 8 8.5C9.933 8.5 11.5 10.067 11.5 12C11.5 13.933 9.933 15.5 8 15.5C6.067 15.5 4.5 13.933 4.5 12ZM8 9.5C6.61929 9.5 5.5 10.6193 5.5 12C5.5 13.3807 6.61929 14.5 8 14.5C9.38071 14.5 10.5 13.3807 10.5 12C10.5 10.6193 9.38071 9.5 8 9.5Z" fill="#414141" />
              <path fillRule="evenodd" clip-rule="evenodd" d="M16.5 19C16.5 17.067 18.067 15.5 20 15.5C21.933 15.5 23.5 17.067 23.5 19C23.5 20.933 21.933 22.5 20 22.5C18.067 22.5 16.5 20.933 16.5 19ZM20 16.5C18.6193 16.5 17.5 17.6193 17.5 19C17.5 20.3807 18.6193 21.5 20 21.5C21.3807 21.5 22.5 20.3807 22.5 19C22.5 17.6193 21.3807 16.5 20 16.5Z" fill="#414141" />
              <path fillRule="evenodd" clip-rule="evenodd" d="M10.1579 13.2583C10.297 13.0197 10.6031 12.939 10.8417 13.078L17.6717 17.058C17.9103 17.197 17.991 17.5031 17.8519 17.7417C17.7129 17.9803 17.4068 18.061 17.1682 17.922L10.3382 13.942C10.0996 13.803 10.0189 13.4969 10.1579 13.2583Z" fill="#414141" />
              <path fillRule="evenodd" clip-rule="evenodd" d="M17.8418 6.25799C17.981 6.49649 17.9004 6.80266 17.6619 6.94184L10.8419 10.9218C10.6034 11.061 10.2973 10.9805 10.1581 10.742C10.0189 10.5035 10.0994 10.1973 10.3379 10.0582L17.1579 6.07816C17.3964 5.93897 17.7026 6.01948 17.8418 6.25799Z" fill="#414141" />
            </g>
            <defs>
              <filter id="filter0_d_30279_35644" x="-2" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_30279_35644" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_30279_35644" result="shape" />
              </filter>
            </defs>
          </svg>
        ) : (
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clip-rule="evenodd" d="M11.7046 2.25644C12.8299 1.13067 14.3564 0.498169 15.9482 0.498169C17.5399 0.498169 19.0664 1.13063 20.1916 2.25636C21.3174 3.38164 21.95 4.90829 21.95 6.49999C21.95 8.09174 21.3175 9.61826 20.1917 10.7435C20.1917 10.7436 20.1917 10.7435 20.1917 10.7435L11.3517 19.5835C11.1565 19.7788 10.8399 19.7788 10.6446 19.5835L1.80461 10.7435C-0.539037 8.3999 -0.539037 4.60009 1.80461 2.25644C4.14826 -0.0872086 7.94807 -0.0872087 10.2917 2.25644L10.9982 2.96289L11.7046 2.25644C11.7046 2.25641 11.7046 2.25647 11.7046 2.25644ZM15.9482 1.49817C14.6217 1.49817 13.3496 2.02528 12.4118 2.96346L11.3517 4.02355C11.258 4.11732 11.1308 4.16999 10.9982 4.16999C10.8656 4.16999 10.7384 4.11732 10.6446 4.02355L9.58461 2.96355C7.63149 1.01042 4.46484 1.01042 2.51172 2.96355C0.558594 4.91667 0.558594 8.08332 2.51172 10.0364L10.9982 18.5229L19.4846 10.0364C20.4228 9.09869 20.95 7.82648 20.95 6.49999C20.95 5.17351 20.4229 3.90138 19.4847 2.96363C18.5469 2.02544 17.2747 1.49817 15.9482 1.49817Z" fill="#414141" />
        </svg>

      )
      }
    </>
  )
}

export default Icons
