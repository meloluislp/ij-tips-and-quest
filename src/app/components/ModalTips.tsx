import { useEffect, useState } from 'react'
import { Loading } from './Loading'
import { Modal } from './Modal'
import { TipsImage } from './TipsImage'
import { Tip } from '../models/tip'

interface ModalTipsProps {
  offerId: string
  show: boolean
  onClose: () => void
}

export const ModalTips = ({ offerId, show = false, onClose }: ModalTipsProps) => {
  const [tips, setTips] = useState<Tip[]>([])

  useEffect(() => {
    const getTips = async (offerId: string) => {
      const response = await fetch(`/api/tips/?id=${offerId}`)
      const data = await response.json()
      setTips(data)
    }

    if (show) {
      getTips(offerId)
    }
  }, [show, offerId])
  return (
    <Modal show={show} onClose={onClose}>
      <div className="ij-Box ij-CvView-PersonalCvSection-infoList-image">
        <div className="sui-AtomImage is-loaded">
          <figure className="sui-AtomImage-figure">
            <picture>
              <TipsImage />
            </picture>
          </figure>
        </div>
      </div>
      <h3 className="ij-BaseTypography ij-Heading ij-Heading-title3 mb-l">¡Adelante, no dudes en intentarlo!</h3>

      <p className="ij-BaseTypography ij-BaseTypography-gray-D1 ij-Text ij-Text-body1 mb-l">
        Recuerda que estos son solo algunos consejos. Cada trabajo es único y la mejor manera de descubrirlo es
        ¡postulándote! No te desanimes, cada experiencia cuenta y es una oportunidad para aprender y crecer.
      </p>
      {tips?.length === 0 ? <Loading /> : null}

      <ul className="ij-List ij-List--vertical ij-CvView-PersonalCvSection-infoList">
        {tips?.map((tip) => (
          <li
            key={tip.id}
            className="ij-List-item ij-BaseTypography ij-BaseTypography-gray-D2 ij-Text ij-Text-body1 mb-m"
          >
            {tip.text}
          </li>
        ))}
      </ul>
    </Modal>
  )
}
