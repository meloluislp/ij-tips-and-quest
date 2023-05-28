import { useEffect, useState } from 'react'
import { SandboxQuestion } from '../models/sandboxquestion.model'
import { Modal } from './Modal'
import { SandBoxImage } from './SandboxImage'
import { SandboxQuest } from './SandboxQuest'

interface ModalSandBoxProps {
  offerId: string
  onClose: () => void
}

export const ModalSandbox = ({ offerId, onClose }: ModalSandBoxProps) => {
  const [sandboxquestions, setSandBoxQuestions] = useState<SandboxQuestion[]>([])

  useEffect(() => {
    const getSandbox = async (offerId: string) => {
      const response = await fetch(`/api/sandbox/?id=${offerId}`)
      const data = await response.json()
      const sandboxquestions = data.map((question: any) => {
        return { ...question, response: '' }
      })
      setSandBoxQuestions(sandboxquestions)
    }

    getSandbox(offerId)
  }, [offerId])

  return (
    <Modal onClose={onClose}>
      <div className="ij-Box ij-CvView-PersonalCvSection-infoList-image">
        <div className="sui-AtomImage is-loaded">
          <figure className="sui-AtomImage-figure">
            <picture>
              <SandBoxImage />
            </picture>
          </figure>
        </div>
      </div>
      <h3 className="ij-BaseTypography ij-Heading ij-Heading-title3 mb-l text-center">
        Practica alguna de tus habilidades
      </h3>
      {sandboxquestions?.length > 0 ? <SandboxQuest sandbox={sandboxquestions} /> : null}
    </Modal>
  )
}
