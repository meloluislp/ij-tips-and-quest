import { SandboxQuestion } from '../models/sandboxquestion.model'
import { ButtonAnswer } from './ButtonAnswer'

interface SandboxQuestionProps {
  question: SandboxQuestion
  onAnswer: (answer: string) => void
}
export const SandboxQuestionItem = ({ question, onAnswer }: SandboxQuestionProps) => {
  const options = Object.keys(question.options).map((key) => ({ index: key, response: question.options[key] }))

  return (
    <article className="ij-ProgressIndicatorCard p-l mb-4 w-full">
      <div className="ij-Box ij-ProgressIndicatorCard-content ml-l">
        <p className="ij-BaseTypography ij-Text ij-Text-body1 mb-s">{question.question}</p>
        {options.map((option) => (
          <p key={option.index} className="ij-BaseTypography ij-BaseTypography-gray-D1 ij-Text ij-Text-body2">
            {`${option.index}. ${option.response}`}
          </p>
        ))}
        <div className="ij-BaseTypography  ij-Text ij-Text-body2 ij-ProgressIndicatorCard-callToAction pt-m">
          {options.map((option) => (
            <ButtonAnswer key={option.index} option={option.index} onClick={() => onAnswer(option.index)} />
          ))}
        </div>
      </div>
    </article>
  )
}
