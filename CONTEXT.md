# Brasaland — Company Context

Brasaland es una cadena de restaurantes de cocina a la brasa fundada en 2008 en Medellín, Colombia. Lo que empezó como un único local familiar se convirtió, en quince años, en una cadena de 14 restaurantes propios que opera en dos países: Colombia y Estados Unidos (Florida). La empresa emplea a unas 115 personas y factura alrededor de 6 millones de dólares anuales.

La marca siempre ha representado tres cosas: una comida que sabe igual independientemente de si la pides en Medellín o en Miami, una experiencia de servicio cálida y consistente, y una cocina que se mueve rápido.

## Organización de la empresa

Brasaland opera desde su sede en Medellín, con una oficina en Miami que coordina los locales en Florida. Está liderada por Mariana Restrepo, CEO desde 2019.

La empresa se divide en las siguientes áreas:

- Operaciones de Restaurante
- Compras y Proveedores
- Marketing y Experiencia Digital
- Personas y Cultura
- Formación y Estándares de Calidad
- Tecnología
- Dirección Ejecutiva

## Situación actual

Brasaland es rentable y cuenta con una base de clientes fiel, pero opera con herramientas poco adecuadas para su escala actual.

Problemas principales:
- Falta de visibilidad en tiempo real de las ventas
- Pedidos de inventario manuales (WhatsApp, teléfono)
- Falta de datos de clientes
- Sistemas no integrados
- Dependencia de hojas de cálculo

## Objetivo de transformación digital

La empresa ha creado un equipo llamado “Brasaland Digital” con el objetivo de modernizar la operación mediante:

- Sistemas de datos centralizados
- Herramientas digitales para clientes
- Automatización de procesos internos
- Uso de inteligencia artificial para mejorar decisiones

## Contexto para el sitio web (Hito 1)

El objetivo es construir el primer sitio web público de Brasaland.

El sitio debe:
- Presentar la empresa y su propuesta de valor
- Mostrar su presencia en Colombia y Estados Unidos
- Transmitir una imagen profesional y moderna
- Capturar información de clientes interesados

## Formulario de aplicación/registro

El formulario estará enfocado en solicitudes de:
- reservas
- eventos
- catering

### Campos requeridos

- fullName
- email
- phone
- country
- city
- serviceType
- eventDate
- guestCount
- termsAccepted

### Campos opcionales

- preferredLocation
- estimatedBudget
- notes

### Valores permitidos

country:
- Colombia
- Estados Unidos

serviceType:
- reserva
- evento
- catering

### Reglas de validación

- fullName: mínimo 3 caracteres
- email: formato válido
- phone: mínimo 8 dígitos
- country: obligatorio
- city: obligatorio
- serviceType: obligatorio
- eventDate: no puede ser una fecha pasada
- guestCount: mínimo 1
- estimatedBudget: >= 0 (opcional)
- notes: máximo 500 caracteres
- termsAccepted: obligatorio

## Requisitos técnicos

- HTML semántico
- Tailwind CSS
- Diseño responsive (mobile-first)
- Accesibilidad (labels, alt, ARIA)
- Validación con JavaScript
- Uso de Schema.org (Restaurant)
