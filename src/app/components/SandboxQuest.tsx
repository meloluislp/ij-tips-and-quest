import { useState } from 'react'
import { SandboxQuestion } from '../models/sandboxquestion.model'
import { SandboxQuestionItem } from './SandboxQuestionItem'

interface SandboxQuestProps {
  sandbox: SandboxQuestion[]
}

export const SandboxQuest = ({ sandbox }: SandboxQuestProps) => {
  const [current, setCurrent] = useState<string>(sandbox[0]?.question)
  const [sandboxquestions, setSandBoxQuestions] = useState<SandboxQuestion[]>(sandbox)

  const handleNext = () => {
    const currentIndex = sandbox.findIndex((item) => item.question === current)
    if (currentIndex === sandbox.length - 1) {
      setCurrent(sandbox[0].question)
    } else {
      setCurrent(sandbox[currentIndex + 1].question)
    }
  }

  const handlePrev = () => {
    const currentIndex = sandbox.findIndex((item) => item.question === current)
    if (currentIndex === 0) {
      setCurrent(sandbox[sandbox.length - 1].question)
    } else {
      setCurrent(sandbox[currentIndex - 1].question)
    }
  }

  const handleAnswer = (answer: string, question: SandboxQuestion) => {
    const newSandboxQuestions = sandboxquestions.map((sandboxquestion) => {
      if (sandboxquestion.question === question.question) {
        return { ...sandboxquestion, response: answer }
      }
      return sandboxquestion
    })
    setSandBoxQuestions(newSandboxQuestions)
  }

  return (
    <div className="ij-Box ij-CardsCarousel ij-CardsCarousel-multiItems w-full">
      <button className="ij-CardsCarousel-arrowBox" disabled={false} onClick={handlePrev}>
        <span className="sui-AtomIcon sui-AtomIcon--medium sui-AtomIcon--currentColor">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M14.5 18.5c-.3 0-.5-.1-.7-.3l-4.1-4.1c-1.2-1.2-1.2-3.1 0-4.2l4.1-4.1a1.07 1.07 0 0 1 1.5 1.5l-4.1 4.1c-.4.4-.4 1 0 1.4l4.1 4.1c.3.3.4.7.2 1.1-.2.3-.6.5-1 .5z"
                fill="currentColor"
              />
            </svg>
          </span>
        </span>
      </button>
      <ul className="ij-List ij-List--horizontal ij-CardsCarousel-list">
        {sandbox?.map((item) => (
          <li
            key={item.question}
            className="ij-List-item ij-CardsCarousel-item w-full h-96"
            style={{ display: current === item.question ? 'flex' : 'none' }}
          >
            <SandboxQuestionItem question={item} onAnswer={(answer) => handleAnswer(answer, item)} />
          </li>
        ))}
      </ul>
      <button className="ij-CardsCarousel-arrowBox" onClick={handleNext}>
        <span className="sui-AtomIcon sui-AtomIcon--medium sui-AtomIcon--currentColor">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M9.8 18.5c.3 0 .5-.1.7-.3l4.1-4.1c1.2-1.2 1.2-3.1 0-4.2l-4.1-4.1A1.07 1.07 0 0 0 9 7.3l4.1 4.1c.4.4.4 1 0 1.4L9 16.9c-.3.3-.4.7-.2 1.1.3.3.6.5 1 .5z"
                fill="currentColor"
              />
            </svg>
          </span>
        </span>
      </button>
    </div>
  )
}
