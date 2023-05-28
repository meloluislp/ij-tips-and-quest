export function Loading({ message }: { message?: string }) {
  return (
    <section className="flex items-center gap-4 flex-col justify-center">
      <div className="superballs">
        <div className="superballs__dot" />
        <div className="superballs__dot" />
      </div>
      <p className="text-center w-[220]px">{message}</p>
    </section>
  )
}
