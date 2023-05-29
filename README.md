# Proyecto de Hackathon de Infojobs

Este es el repositorio del proyecto desarrollado para la Hackathon de Infojobs. En este proyecto, hemos utilizado Next.js para construir la interfaz de usuario y la lógica del lado del cliente, OpenAI para generar prompts de forma inteligente y Supabase como caché de prompts.

## Descripción del proyecto

El objetivo de este proyecto es desarrollar una aplicación que ayude a los usuarios a generar prompts de manera automática utilizando tecnologías de procesamiento del lenguaje natural. Los prompts generados se pueden utilizar para redactar descripciones de empleos en Infojobs de manera más eficiente y rápida.

## Características principales

- Utilizamos Next.js como framework de React para construir la interfaz de usuario y la lógica del lado del cliente.
- OpenAI es una herramienta clave en este proyecto, ya que utilizamos su tecnología de generación de lenguaje natural para crear los prompts de manera inteligente.
- Supabase es nuestra base de datos y se utiliza como caché para almacenar y recuperar los prompts generados por OpenAI.

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

| Columna | Tipo   |
| ------- | ------ |
| id      | text   |
| tips    | text   |

- La tabla `sandbox` debe tener la siguiente estructura:

| Columna | Tipo   |
| ------- | ------ |
| id      | text   |
| sandbox | text   |



