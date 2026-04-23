# Brasaland — Company Context

Brasaland es una cadena de restaurantes de cocina a la brasa fundada en 2008 en Medellín, Colombia. Lo que comenzó como un único local familiar se convirtió, en quince años, en una cadena de 14 restaurantes propios que opera en dos países: Colombia y Estados Unidos (Florida).

La empresa emplea a aproximadamente 115 personas y genera unos ingresos anuales cercanos a los 6 millones de dólares.

La marca siempre ha representado tres elementos clave:
- Una comida consistente que sabe igual independientemente de la ubicación
- Una experiencia de servicio cálida y uniforme
- Una cocina eficiente sin comprometer la calidad


---

## Organización de la empresa

Brasaland opera desde su sede principal en Medellín, con una oficina en Miami que coordina los locales en Florida. La compañía está liderada por Mariana Restrepo, CEO desde 2019.

La empresa se estructura en las siguientes áreas:

- Operaciones de Restaurante  
- Compras y Proveedores  
- Marketing y Experiencia Digital  
- Personas y Cultura  
- Formación y Estándares de Calidad  
- Tecnología  
- Dirección Ejecutiva  


---

## Situación actual

Brasaland es una empresa rentable con una base de clientes fiel, pero actualmente utiliza herramientas que no se ajustan a su nivel de crecimiento.

### Problemas principales:

- Falta de visibilidad en tiempo real de las ventas  
- Gestión manual de pedidos de inventario (WhatsApp, teléfono)  
- Ausencia de datos estructurados de clientes  
- Sistemas no integrados  
- Dependencia excesiva de hojas de cálculo  


---

## Objetivo de transformación digital

La empresa ha creado un equipo interno llamado **“Brasaland Digital”** con el objetivo de modernizar la operación mediante:

- Sistemas centralizados de datos  
- Herramientas digitales orientadas al cliente  
- Automatización de procesos internos  
- Uso de inteligencia artificial para mejorar la toma de decisiones  


---

## Contexto para el sitio web (Hito 1)

El objetivo es construir el primer sitio web público de Brasaland.

El sitio debe:

- Presentar la empresa y su propuesta de valor  
- Mostrar su presencia en Colombia y Estados Unidos  
- Transmitir una imagen profesional y moderna  
- Capturar información de clientes interesados  


---

## Formulario de aplicación / registro

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

**country:**
- Colombia  
- Estados Unidos  

**serviceType:**
- reserva  
- evento  
- catering  


---

## Reglas de validación

- fullName: mínimo 3 caracteres  
- email: formato válido  
- phone: mínimo 8 dígitos  
- country: obligatorio  
- city: obligatorio  
- serviceType: obligatorio  
- eventDate: no puede ser una fecha pasada  
- guestCount: mínimo 1  
- estimatedBudget: mayor o igual a 0 (opcional)  
- notes: máximo 500 caracteres  
- termsAccepted: obligatorio  


---

## Requisitos técnicos

- HTML semántico  
- Tailwind CSS  
- Diseño responsive (mobile-first)  
- Accesibilidad (labels, atributos ARIA)  
- Validación con JavaScript  
- Uso de Schema.org (Restaurant)
