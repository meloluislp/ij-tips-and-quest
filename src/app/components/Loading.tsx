import { LoadingImage } from './LoadingImage'
import { DotPulse } from '@uiball/loaders'

export function Loading() {
  return (
    <section className="flex items-center gap-4">
      <LoadingImage />
      Cargando
      <DotPulse size={40} speed={1.3} color="#B8B8B8" />
    </section>
  )
}
