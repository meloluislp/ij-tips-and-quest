# Proyecto de Hackathon de Infojobs

Este es el repositorio del proyecto desarrollado para la Hackathon de Infojobs. En este proyecto, hemos utilizado Next.js para construir la interfaz de usuario y la lógica del lado del cliente, OpenAI para generar prompts de forma inteligente y Supabase como caché de prompts.

[Aquí está el enlace](https://ij-tips-and-quest-nu.vercel.app/)

## Descripción del proyecto

El objetivo de este proyecto es ampliar las funcionalidades de la página de ofertas de Infojobs para agregar la generación de tips o consejos mediante OpenAI y la generación de preguntas o desafíos para las ofertas de trabajo. Nuestra aplicación permitirá a los usuarios obtener automáticamente tips relevantes para mejorar sus descripciones de empleo y generar preguntas desafiantes para evaluar a los candidatos durante el proceso de contratación.

## Características principales

- Utilizamos Next.js como framework de React para construir la interfaz de usuario y la lógica del lado del cliente.
- OpenAI es una herramienta clave en este proyecto, ya que utilizamos su tecnología de generación de lenguaje natural para crear los tips y preguntas de manera inteligente.
- Supabase es nuestra base de datos y se utiliza como caché para almacenar y recuperar los tips y preguntas generados por OpenAI.

## Configuración del proyecto

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona este repositorio: `git clone https://github.com/tuusuario/tu-proyecto.git`
2. Navega hasta el directorio del proyecto: `cd tu-proyecto`
3. Instala las dependencias: `npm install`
4. Crea un archivo `.env.local` en la raíz del proyecto y proporciona las siguientes variables de entorno:

INFO_JOBS_API_URL_SEARCH=https://api.infojobs.net/api/9  
INFO_JOBS_API_URL_OFFER=https://api.infojobs.net/api/7  
INFO_JOBS_API_TOKEN=  
OPEN_IA_TOKEN=  
SUPABASE_URL=  
SUPABASE_API_KEY=

## Configuración de las tablas en Supabase:

- En Supabase, crea una base de datos y luego crea dos tablas en la base de datos llamadas `tips` y `sandbox`.
- La tabla `tips` debe tener la siguiente estructura:

| Columna | Tipo |
| ------- | ---- |
| id      | text |
| tips    | text |

- La tabla `sandbox` debe tener la siguiente estructura:

| Columna | Tipo |
| ------- | ---- |
| id      | text |
| sandbox | text |
