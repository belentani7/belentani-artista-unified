# Belentani — Entrega completa

Este paquete reúne el proyecto web actual de Belentani / The Judas Experience, los materiales visuales disponibles localmente, los briefs adjuntos y los documentos técnicos recuperados de Google Drive.

La aplicación es una web React + TypeScript con navegación multipágina mediante Wouter. Las rutas principales son Inicio, Música, Biografía, Universo Judas, Galería, Storyboard y Contacto.

Las fotografías de Belentani se conservan como materiales originales y se referencian desde el almacenamiento web administrado por Manus en el código del proyecto. El paquete local incluye copias de los archivos de imagen disponibles para archivo y revisión.

## Contenido

| Carpeta o archivo | Descripción |
|---|---|
| `project/` | Código fuente del proyecto web, sin `node_modules` ni secretos. |
| `source-assets/` | Fotografías originales disponibles en el workspace. |
| `chat-attachments/` | Briefs y textos adjuntos recibidos en esta conversación. |
| `drive-materials/` | Documentos y HTML recuperados desde Google Drive. |
| `generated-assets/` | Activos visuales generados en iteraciones anteriores, si estaban disponibles localmente. |
| `CHAT_ARCHIVE.md` | Registro del alcance exportado y limitaciones sobre el transcript completo. |
| `VERSION_HISTORY.txt` | Historial Git de checkpoints accesible localmente. |

## Seguridad

Se excluyen tokens, credenciales, archivos `.env`, la configuración privada de conectores y `node_modules`. No se han borrado archivos existentes de Drive.

## Ejecución local

Desde `project/`, instalar dependencias con `pnpm install` y ejecutar `pnpm dev`. Para validar el build, ejecutar `pnpm run build`.

## Nota sobre el transcript

El sistema no expone el transcript íntegro de la conversación como un archivo descargable dentro del workspace. Por eso el paquete contiene un registro fiel del alcance, decisiones y archivos que sí están disponibles, pero no afirma incluir un volcado literal de mensajes que no pueden recuperarse como archivo.
