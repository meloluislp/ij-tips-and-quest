import { useEffect, useState } from 'react'
import { Loading } from './Loading'
import { Modal } from './Modal'
import { TipsImage } from './TipsImage'
import { Tip } from '../models/tip'
import { FetchError } from './FetchError'

interface ModalTipsProps {
  offerId: string
  onClose: () => void
}

export const ModalTips = ({ offerId, onClose }: ModalTipsProps) => {
  const [tips, setTips] = useState<Tip[]>([])
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const getTips = async (offerId: string) => {
      const response = await fetch(`/api/tips/?id=${offerId}`)
      const data = await response.json()
      console.log(data)
      setTips(data)
    }

    try {
      getTips(offerId)
    } catch (error) {
      setError(true)
    }
  }, [offerId])
  return (
    <Modal onClose={onClose}>
      <div className="ij-Box ij-CvView-PersonalCvSection-infoList-image">
        <div className="sui-AtomImage is-loaded">
          <figure className="sui-AtomImage-figure">
            <picture>
              <TipsImage />
            </picture>
          </figure>
        </div>
      </div>
      <h3 className="ij-BaseTypography ij-Heading ij-Heading-title3 mb-l text-center">
        ¡Adelante, no dudes en intentarlo!
      </h3>

      <p className="ij-BaseTypography ij-BaseTypography-gray-D1 ij-Text ij-Text-body1 mb-l">
        Recuerda que estos son solo algunos consejos. Cada trabajo es único y la mejor manera de descubrirlo es
        ¡postulándote! No te desanimes, cada experiencia cuenta y es una oportunidad para aprender y crecer.
      </p>

      <article className="ij-ProgressIndicatorCard p-l mb-4">
        <div className="ij-Box ij-ProgressIndicatorCard-content ml-l">
          {tips?.length === 0 && !error ? <Loading message="Generando los mejores tips para esta oferta..." /> : null}
          {error ? <FetchError /> : null}
          <ul className="ij-List ij-List--vertical ij-CvView-PersonalCvSection-infoList">
            {tips?.map((item) => (
              <li
                key={item.id}
                className="ij-List-item ij-BaseTypography ij-BaseTypography-gray-D2 ij-Text ij-Text-body1 mb-m"
              >
                {item.tip}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Modal>
  )
}
