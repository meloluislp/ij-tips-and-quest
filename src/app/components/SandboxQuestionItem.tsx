/* eslint-disable multiline-ternary */
import { SandboxQuestion } from '../models/sandboxquestion.model'
import { ButtonAnswer } from './ButtonAnswer'

interface SandboxQuestionProps {
  question: SandboxQuestion
  onAnswer: (answer: string) => void
}
export const SandboxQuestionItem = ({ question, onAnswer }: SandboxQuestionProps) => {
  const options = Object.keys(question.options).map((key) => ({ index: key, option: question.options[key] }))
  const answared = question.response === question.answer
  const response = question.response ?? ''
  return (
    <article className="ij-ProgressIndicatorCard p-l mb-4 w-full">
      <div className="ij-Box ij-ProgressIndicatorCard-content ml-l">
        <p className="ij-BaseTypography ij-Text ij-Text-body1 mb-s">{question.question}</p>
        {options.map((item) => (
          <p key={item.index} className="ij-BaseTypography ij-BaseTypography-gray-D1 ij-Text ij-Text-body2">
            {`${item.index}. ${item.option}`}
          </p>
        ))}
        <div className="ij-BaseTypography  ij-Text ij-Text-body2 ij-ProgressIndicatorCard-callToAction pt-m flex items-center justify-start">
          {options.map((item) => (
            <ButtonAnswer
              key={item.index}
              option={item.index}
              answered={answared}
              onClick={() => onAnswer(item.index)}
            />
          ))}

          {answared ? (
            <div
              className="justify-self-end ms-auto px-2 py-1 "
              style={{ backgroundColor: '#e6f6ee', borderRadius: '40px' }}
            >
              <p className="ij-BaseTypography ij-BaseTypography-gray-D1 ij-Text ij-Text-body2 ">
                {`Tu respuesta fue: ${response}`}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}
