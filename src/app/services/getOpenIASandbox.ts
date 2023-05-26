import { Offer } from '../models/offer.model'

export async function getOpenAISandbox (offer: Offer) {
  console.log({ offer })
  const resp = `[
    {
      "question": "¿Cuál de las siguientes opciones describe correctamente la diferencia entre una lista y una tupla en Python?",
      "options": {
        "a": "Una lista permite duplicados, mientras que una tupla no.",
        "b": "Una lista es inmutable, mientras que una tupla es mutable."
      },
      "answer": "a"
    },
    {
      "question": "¿Cuál de las siguientes opciones describe correctamente la diferencia entre una función y un método en Python?",
      "options": {
        "a": "Una función opera en un objeto o una clase, mientras que un método es independiente de los objetos y clases.",
        "b": "Una función es una secuencia de instrucciones que puede ser reutilizada, mientras que un método es un bloque de código asociado a un objeto o una clase."
      },
      "answer": "b"
    },
    {
      "question": "¿Cómo se define una función en Python?",
      "options": {
        "a": "definir()",
        "b": "funcion()",
        "c": "def()"
      },
      "answer": "c"
    },
    {
      "question": "¿Qué es una excepción en Python?",
      "options": {
        "a": "Una condición que indica un error o un comportamiento inesperado durante la ejecución de un programa.",
        "b": "Un tipo especial de variable que almacena un valor booleano."
      },
      "answer": "a"
    },
    {
      "question": "¿Cuál es la función utilizada para leer la entrada del usuario en Python?",
      "options": {
        "a": "readline()",
        "b": "input()",
        "c": "getinput()"
      },
      "answer": "b"
    }
  ]`

  return JSON.parse(resp)
}
