'use client'

import { useState } from 'react'
import { ModalSandbox } from './ModalSandbox'
import { ModalTips } from './ModalTips'

interface ActionPanelProps {
  offerId: string
  className?: string
}
export const ActionPanel = ({ offerId, className = '' }: ActionPanelProps) => {
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
    <section className="flex flex-col justify-stretch items-stretch gap-2">
      <button className="btn btn-cta cursor-pointer">Inscribirme en esta oferta</button>

      <button
        className="cursor-pointer sui-AtomButton sui-AtomButton--primary sui-AtomButton--outline sui-AtomButton--left
        sui-AtomButton--small sui-AtomButton--link  ij-CvView-AddButton sui-AtomButton-group flex items-center justify-start gap-2"
        style={{ display: 'flex' }}
        type="button"
        onClick={handleGetTips}
      >
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clipRule="evenodd"
            d="M4.30957 11.9995C4.30957 16.7068 8.13884 20.5361 12.8462 20.5361C17.5535 20.5361 21.3827 16.7068 21.3827 11.9995C21.3827 7.29216 17.5535 3.46289 12.8462 3.46289C8.13884 3.46289 4.30957 7.29216 4.30957 11.9995ZM2.8457 11.9995C2.8457 6.48537 7.33156 1.99951 12.8457 1.99951C18.3598 1.99951 22.8457 6.48537 22.8457 11.9995C22.8457 17.5137 18.3598 21.9995 12.8457 21.9995C7.33156 21.9995 2.8457 17.5137 2.8457 11.9995ZM7.23633 9.79983C7.23633 9.26227 7.6734 8.82422 8.21194 8.82422C8.75047 8.82422 9.18755 9.26227 9.18755 9.79983C9.18755 10.3374 8.75047 10.7754 8.21194 10.7754C7.6734 10.7754 7.23633 10.3374 7.23633 9.79983ZM17.4795 8.82422C16.941 8.82422 16.5039 9.26227 16.5039 9.79983C16.5039 10.3374 16.941 10.7754 17.4795 10.7754C18.0181 10.7754 18.4551 10.3374 18.4551 9.79983C18.4551 9.26227 18.0181 8.82422 17.4795 8.82422ZM9.01535 15.1978C9.85925 16.5246 11.2924 17.3168 12.8495 17.3168C14.4046 17.3168 15.8358 16.5246 16.6768 15.1968C16.8934 14.8553 16.791 14.4036 16.4495 14.187C16.108 13.9695 15.6573 14.0719 15.4397 14.4134C14.868 15.3148 13.9002 15.8534 12.8495 15.8534C11.7958 15.8534 10.8241 15.3148 10.2505 14.4124C10.0339 14.0719 9.58218 13.9704 9.24071 14.187C8.89925 14.4046 8.79876 14.8563 9.01535 15.1978Z"
            fill="currentColor"
          />
        </svg>
        Get Tips
      </button>
      <button
        className="cursor-pointer sui-AtomButton sui-AtomButton--primary sui-AtomButton--outline sui-AtomButton--left sui-AtomButton--small sui-AtomButton--link  ij-CvView-AddButton sui-AtomButton-group flex items-center justify-start gap-2"
        style={{ display: 'flex' }}
        type="button"
        onClick={handleGetSandbox}
      >
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clipRule="evenodd"
            d="M18.8457 4.5H6.8457C5.46499 4.5 4.3457 5.61929 4.3457 7V17C4.3457 18.3807 5.46499 19.5 6.8457 19.5H18.8457C20.2264 19.5 21.3457 18.3807 21.3457 17V7C21.3457 5.61929 20.2264 4.5 18.8457 4.5ZM6.8457 3C4.63656 3 2.8457 4.79086 2.8457 7V17C2.8457 19.2091 4.63656 21 6.8457 21H18.8457C21.0548 21 22.8457 19.2091 22.8457 17V7C22.8457 4.79086 21.0548 3 18.8457 3H6.8457ZM11.4349 6.42598C11.7519 6.69258 11.7928 7.16569 11.5262 7.4827L9.13376 10.3276C8.79284 10.7329 8.18622 10.7812 7.78547 10.4348L6.46172 9.29071C6.14834 9.01985 6.11387 8.54622 6.38474 8.23284C6.6556 7.91946 7.12922 7.885 7.4426 8.15586L8.34456 8.93544L10.3782 6.51727C10.6448 6.20025 11.1179 6.15938 11.4349 6.42598ZM13.5957 8.25C13.1815 8.25 12.8457 8.58579 12.8457 9C12.8457 9.41421 13.1815 9.75 13.5957 9.75H18.5957C19.0099 9.75 19.3457 9.41421 19.3457 9C19.3457 8.58579 19.0099 8.25 18.5957 8.25H13.5957ZM12.8457 15.3434C12.8457 14.9292 13.1815 14.5934 13.5957 14.5934H18.5957C19.0099 14.5934 19.3457 14.9292 19.3457 15.3434C19.3457 15.7576 19.0099 16.0934 18.5957 16.0934H13.5957C13.1815 16.0934 12.8457 15.7576 12.8457 15.3434ZM7.48248 17.5303C7.18959 17.8232 6.71471 17.8232 6.42182 17.5303C6.12893 17.2374 6.12893 16.7626 6.42182 16.4697L7.39149 15.5L6.42182 14.5303C6.12893 14.2374 6.12893 13.7626 6.42182 13.4697C6.71471 13.1768 7.18959 13.1768 7.48248 13.4697L8.45215 14.4393L9.42182 13.4697C9.71471 13.1768 10.1896 13.1768 10.4825 13.4697C10.7754 13.7626 10.7754 14.2374 10.4825 14.5303L9.51281 15.5L10.4825 16.4697C10.7754 16.7626 10.7754 17.2374 10.4825 17.5303C10.1896 17.8232 9.71471 17.8232 9.42182 17.5303L8.45215 16.5607L7.48248 17.5303Z"
            fill="currentColor"
          />
        </svg>
        Ready Sandbox
      </button>

      <ModalTips offerId={offerId} show={showModalTips} onClose={handleCloseTips} />
      <ModalSandbox offerId={offerId} show={showModalSandbox} onClose={handleCloseSandbox} />
    </section>
  )
}
