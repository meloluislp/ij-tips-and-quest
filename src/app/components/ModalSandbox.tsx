import { useEffect, useState } from 'react'
import { SandboxQuestion } from '../models/sandboxquestion.model'
import { Modal } from './Modal'
import { SandBoxImage } from './SandboxImage'
import { SandboxQuestionItem } from './SandboxQuestionItem'

interface ModalSandBoxProps {
  offerId: string
  onClose: () => void
  show: boolean
}

export const ModalSandbox = ({ offerId, show, onClose }: ModalSandBoxProps) => {
  const [sandboxquestions, setSandBoxQuestions] = useState<SandboxQuestion[]>([])

  const handleAnswer = (answer: string, question: SandboxQuestion) => {
    const newSandboxQuestions = sandboxquestions.map((sandboxquestion) => {
      if (sandboxquestion.question === question.question) {
        return { ...sandboxquestion, response: answer }
      }
      return sandboxquestion
    })
    setSandBoxQuestions(newSandboxQuestions)
  }

  useEffect(() => {
    const getSandbox = async (offerId: string) => {
      const response = await fetch(`/api/sandbox/?id=${offerId}`)
      const data = await response.json()
      const sandboxquestions = data.map((question: any) => {
        return { ...question, response: '' }
      })
      setSandBoxQuestions(sandboxquestions)
    }

    if (show) {
      getSandbox(offerId)
    }
  }, [show, offerId])

  return (
    <Modal show={show} onClose={onClose}>
      <div className="ij-Box ij-CvView-PersonalCvSection-infoList-image">
        <div className="sui-AtomImage is-loaded">
          <figure className="sui-AtomImage-figure">
            <picture>
              <SandBoxImage />
            </picture>
          </figure>
        </div>
      </div>
      <h3 className="ij-BaseTypography ij-Heading ij-Heading-title3 mb-l">Mejora tu CV de forma fácil y rápida</h3>
      <section className="ij-List ij-List--vertical">
        {sandboxquestions?.map((sandboxquestion) => (
          <SandboxQuestionItem
            key={sandboxquestion.question}
            question={sandboxquestion}
            onAnswer={(answer) => handleAnswer(answer, sandboxquestion)}
          />
        ))}
      </section>
    </Modal>
  )
}
