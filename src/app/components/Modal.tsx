import { ReactNode, useRef } from 'react'

interface ModalProps {
  onClose: () => void
  children: ReactNode
}
export const Modal = ({ children, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const diaLogRef = useRef<HTMLDivElement>(null)

  const handleClose = () => {
    if (modalRef.current !== null) {
      modalRef.current.classList.add('sui-MoleculeModal-out')
      diaLogRef.current?.classList.add('sui-MoleculeModal-dialog--out')
      setTimeout(() => {
        onClose()
      }, 200)
    }
  }

  return (
    <div className="sui-MoleculeModal z-50 " draggable="false" style={{ display: 'flex' }} ref={modalRef}>
      <div
        className="sui-MoleculeModal-dialog sui-MoleculeModal-dialog--fit sui-MoleculeModal-dialog--size-large"
        ref={diaLogRef}
      >
        <div className="sui-MoleculeModalContent">
          <div className="ij-Box ij-DrawerModalInfo-close">
            <button className="sui-AtomIcon sui-AtomIcon--medium sui-AtomIcon--primary" onClick={handleClose}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g data-name="Layer 2">
                    <g data-name="icons-fill-download">
                      <path d="m13.42 12 4.79-4.8a1 1 0 1 0-1.41-1.41L12 10.58 7.21 5.79a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.41l4.79 4.8-4.79 4.79a1 1 0 0 0 .7 1.71 1 1 0 0 0 .71-.3L12 13.41l4.8 4.79a1 1 0 0 0 .7.3 1 1 0 0 0 .71-1.71Z" />
                      <path d="M0 0h24v24H0Z" fill="none" />
                    </g>
                  </g>
                </svg>
              </span>
            </button>
          </div>
          {children}
          <div className="ij-Box ij-DrawerModalInfo-confirm mt-l">
            <button
              className="sui-AtomButton sui-AtomButton--primary sui-AtomButton--flat sui-AtomButton--center sui-AtomButton--large"
              onClick={handleClose}
            >
              <span className="sui-AtomButton-inner">Entendido</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
