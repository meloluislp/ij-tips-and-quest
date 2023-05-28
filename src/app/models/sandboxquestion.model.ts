export interface SandboxQuestion {
  id?: number
  question: string
  options: {
    [key: string]: string
  }
  answer: string
}
