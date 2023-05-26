export interface SandboxQuestion {
  question: string
  options: {
    [key: string]: string
  }
  answer: string
}
