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
            d="M14.3802 7.32408C14.5401 6.89197 15.1513 6.89197 15.3112 7.32408L16.3083 10.0186C16.9115 11.6489 18.1968 12.9342 19.8271 13.5375L22.5216 14.5345C22.9537 14.6944 22.9537 15.3056 22.5216 15.4655L19.8271 16.4625C18.1968 17.0658 16.9115 18.3511 16.3083 19.9814L15.3112 22.6759C15.1513 23.108 14.5401 23.108 14.3802 22.6759L13.3832 19.9814C12.7799 18.3511 11.4946 17.0658 9.86432 16.4625L7.16979 15.4655C6.73768 15.3056 6.73768 14.6944 7.16979 14.5345L9.86432 13.5375C11.4946 12.9342 12.7799 11.6489 13.3832 10.0186L14.3802 7.32408Z"
            fill="currentColor"
          />
          <path
            d="M5.61296 4.16204C5.69291 3.94599 5.9985 3.94599 6.07844 4.16204L6.57698 5.50931C6.8786 6.32443 7.52127 6.9671 8.3364 7.26873L9.68366 7.76726C9.89972 7.84721 9.89972 8.15279 9.68366 8.23274L8.3364 8.73127C7.52127 9.0329 6.8786 9.67557 6.57698 10.4907L6.07844 11.838C5.9985 12.054 5.69291 12.054 5.61296 11.838L5.11443 10.4907C4.81281 9.67557 4.17013 9.0329 3.35501 8.73127L2.00774 8.23274C1.79169 8.15279 1.79169 7.84721 2.00774 7.76726L3.35501 7.26873C4.17013 6.9671 4.81281 6.32443 5.11443 5.50931L5.61296 4.16204Z"
            fill="currentColor"
          />
          <path
            d="M19.6711 1.12153C19.7311 0.95949 19.9603 0.95949 20.0203 1.12153L20.3942 2.13198C20.6204 2.74332 21.1024 3.22533 21.7137 3.45155L22.7242 3.82545C22.8862 3.88541 22.8862 4.11459 22.7242 4.17456L21.7137 4.54846C21.1024 4.77467 20.6204 5.25668 20.3942 5.86802L20.0203 6.87847C19.9603 7.04051 19.7311 7.04051 19.6711 6.87847L19.2972 5.86802C19.071 5.25668 18.589 4.77467 17.9777 4.54846L16.9672 4.17456C16.8052 4.11459 16.8052 3.88541 16.9672 3.82545L17.9777 3.45155C18.589 3.22533 19.071 2.74332 19.2972 2.13198L19.6711 1.12153Z"
            fill="currentColor"
          />
        </svg>
        TIPS PARA ESTA OFERTA
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
        PRACTICA CON ESTA OFERTA
      </button>

      {showModalTips ? <ModalTips offerId={offerId} onClose={handleCloseTips} /> : null}
      {showModalSandbox ? <ModalSandbox offerId={offerId} onClose={handleCloseSandbox} /> : null}
    </section>
  )
}
