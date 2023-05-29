interface ButtonAnswerProps {
  option: string
  onClick: () => void
  answered?: boolean
}
export const ButtonAnswer = ({ option, onClick, answered = false }: ButtonAnswerProps) => {
  const colors: { [key: string]: string } = {
    a: '#FFD9D9',
    b: '#FFF6D2',
    c: '#D9FFD9',
    d: '#D9E5FF',
    f: '#E5D9FF'
  }
  const btnColor = answered ? '#e6e6e6' : colors[option]
  return (
    <button type="button" onClick={onClick} className="relative w-8 me-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 118 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-10"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.2346 20.2329C-6.29519 41.2195 -2.11079 79.6324 12.2021 98.6279C36.5052 130.883 116.093 113.124 117.884 69.1735C121.578 -21.5621 36.3029 -4.55592 13.2346 20.2329Z"
          fill={btnColor}
        />
      </svg>
      <span className="z-20 relative w-8 h-8 flex items-center justify-center">{option}</span>
    </button>
  )
}
