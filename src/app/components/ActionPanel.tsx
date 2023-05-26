'use client'

import { useState } from 'react'
import { ModalSandbox } from './ModalSandbox'
import { ModalTips } from './ModalTips'

export const ActionPanel = ({ id }: { id: string }) => {
  const [showModalSandbox, setShowModalSandbox] = useState(false)
  const [showModalTips, setShowModalTips] = useState(false)

  const handleGetTips = async () => {
    setShowModalTips(true)
  }

  const handleGetSandbox = () => {
    setShowModalSandbox(true)
  }

  const handleCloseTips = () => {
    setShowModalTips(false)
  }
  const handleCloseSandbox = () => {
    setShowModalSandbox(false)
  }

  return (
    <section>
      <h1>Actions</h1>
      <button type="button">Inscribirme en esta oferta</button>
      <button type="button" onClick={handleGetTips}>
        Get Tips
      </button>
      <button type="button" onClick={handleGetSandbox}>
        Ready Sandbox
      </button>

      <ModalTips offerId={id} show={showModalTips} onClose={handleCloseTips} />
      <ModalSandbox offerId={id} show={showModalSandbox} onClose={handleCloseSandbox} />
    </section>
  )
}
