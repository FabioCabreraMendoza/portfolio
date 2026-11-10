/**
 * TODO(Fabio): TODO el contenido editable de la web vive en este archivo.
 *
 * Datos REALES (dados por ti): nombre, correo y LinkedIn.
 * Datos DE EJEMPLO (sustituir antes de publicar): proyectos, experiencia,
 * formación, stack, titular y descripción del hero, y las imágenes (picsum).
 * Busca "TODO(Fabio)" para localizar cada punto.
 */

export type Lang = "es" | "en";

export const site = {
  name: "Fabio Cabrera Mendoza",
  shortName: "Fabio Cabrera",
  email: "fabiocabrera.it@gmail.com",
  linkedin: "https://www.linkedin.com/in/fabio-cabrera-mendoza-71b0602a7/",
  github: "https://github.com/FabioCabreraMendoza",
  heroImage: "/fabio.jpg",
};

type Project = {
  name: string;
  description: string;
  role: string;
  tags: string[];
  image: string;
  imageAlt: string;
  links?: { label: string; href: string }[];
  note?: string;
  gallery?: { src: string; alt: string; caption: string; wide?: boolean }[];
};

type Job = {
  period: string;
  title: string;
  org: string;
  points: string[];
  logo?: { src: string; alt: string; width: number; height: number };
};

type Copy = {
  htmlTitle: string;
  htmlDescription: string;
  nav: { projects: string; experience: string; stack: string; contact: string };
  switchLang: { label: string; href: string; hrefLang: string };
  hero: { title: string; text: string; primary: string; secondary: string; imageAlt: string };
  projects: { title: string; moreLabel: string; items: Project[] };
  experience: { title: string; work: string; education: string; jobs: Job[]; studies: Job[] };
  stack: { title: string; groups: { name: string; items: string[] }[] };
  contact: { title: string; text: string; linkedin: string };
  footer: string;
};

// TODO(Fabio): proyectos de ejemplo. Sustituye nombres, textos, tags, imágenes y enlaces.
const es: Copy = {
  htmlTitle: "Fabio Cabrera | Desarrollador de software",
  htmlDescription:
    "Portfolio de Fabio Cabrera Mendoza, desarrollador de software. Proyectos, experiencia y contacto.",
  nav: { projects: "Proyectos", experience: "Experiencia", stack: "Stack", contact: "Contacto" },
  switchLang: { label: "EN", href: "/en/", hrefLang: "en" },
  hero: {
    title: "Aplicaciones web con IA para procesos reales.",
    text: "Soy Fabio Cabrera, desarrollador full-stack. Construyo soluciones que automatizan tareas de empresa, del chat a la base de datos.",
    primary: "Ver proyectos",
    secondary: "Contacto",
    imageAlt: "Retrato de Fabio Cabrera",
  },
  projects: {
    title: "Proyecto destacado",
    moreLabel: "Más proyectos en GitHub",
    items: [
      {
        name: "Procesar pedidos",
        description:
          "Asistente de ventas por chat. Si un producto no tiene stock, pide cotización al proveedor por correo y avisa al cliente con el precio.",
        role: "Desarrollo full-stack, en solitario",
        tags: ["Next.js", "TypeScript", "Prisma", "Supabase (Postgres)", "LangGraph", "Gmail API"],
        image: "/projects/chat.png",
        imageAlt: "Chat de atención al cliente que valida la disponibilidad de un producto con el proveedor",
        gallery: [
          {
            src: "/projects/dashboard.png",
            alt: "Panel de gestión con totales de pedidos y lista de pedidos recientes",
            caption: "Panel de gestión con el resumen de pedidos.",
          },
          {
            src: "/projects/kanban.png",
            alt: "Tablero kanban de pedidos con las columnas Consultando, Esperando proveedor, Cotizado y Pago pendiente",
            caption: "Tablero de pedidos, desde la consulta hasta el pago.",
          },
          {
            src: "/projects/b2b-monitor.png",
            alt: "Monitor de negociaciones con proveedores por correo",
            caption: "Monitor de negociaciones con proveedores, que revisa las respuestas por correo cada 5 minutos.",
            wide: true,
          },
        ],
        links: [
          { label: "Demo", href: "https://dtecnoc-app.vercel.app" },
          { label: "Código", href: "https://github.com/FabioCabreraMendoza/dtecnoc-app" },
        ],
        note: "Acceso de prueba en el README del repositorio.",
      },
    ],
  },
  experience: {
    title: "Experiencia y formación",
    work: "Experiencia",
    education: "Formación",
    jobs: [
      {
        period: "2023 - Actualidad",
        title: "Soporte informático (IT Helpdesk)",
        org: "DTECNOC",
        points: [
          "Soporte diario a usuarios, cuentas y redes en una empresa de 6 personas.",
          "Desarrollo de la aplicación de procesamiento de pedidos de la empresa (ver proyecto destacado).",
        ],
        logo: { src: "/logos/dtecnoc.jpg", alt: "Logo de DTECNOC", width: 192, height: 192 },
      },
      {
        period: "Jun 2026",
        title: "Instalación de software ZKBioTime en campamento minero",
        org: "Prodimin",
        points: [
          "Instalé ZKBioTime, software de control de asistencia y creación de horarios de empleados.",
          "Depuré los datos de empleados, áreas y cargos, que estaban desactualizados, para integrarlos en la aplicación web.",
          "Proyecto en solitario, con viaje a una localidad remota del país.",
        ],
        logo: { src: "/logos/prodimin.png", alt: "Logo de Prodimin", width: 617, height: 257 },
      },
    ],
    studies: [
      {
        period: "Promoción 2027",
        title: "Ingeniería de Computación y Sistemas",
        org: "Universidad Privada Antenor Orrego",
        points: [],
      },
      {
        period: "2026 - Actualidad",
        title: "IA y ciencia de datos",
        org: "GCI World",
        points: [],
      },
    ],
  },
  stack: {
    title: "Stack y herramientas",
    groups: [
      { name: "Desarrollo", items: ["TypeScript", "Next.js", "Python"] },
      { name: "IA y datos", items: ["LangGraph", "PostgreSQL", "Power BI"] },
      { name: "Plataformas y herramientas", items: ["Supabase", "Vercel", "GitHub Actions", "Figma"] },
    ],
  },
  contact: {
    title: "¿Trabajamos juntos?",
    text: "Escríbeme y te respondo lo antes posible.",
    linkedin: "LinkedIn",
  },
  footer: "Todos los derechos reservados.",
};

const en: Copy = {
  htmlTitle: "Fabio Cabrera | Software developer",
  htmlDescription:
    "Portfolio of Fabio Cabrera Mendoza, software developer. Projects, experience and contact.",
  nav: { projects: "Projects", experience: "Experience", stack: "Stack", contact: "Contact" },
  switchLang: { label: "ES", href: "/", hrefLang: "es" },
  hero: {
    title: "Web applications with AI for real processes.",
    text: "I'm Fabio Cabrera, a full-stack developer. I build solutions that automate company tasks, from the chat to the database.",
    primary: "View projects",
    secondary: "Contact",
    imageAlt: "Portrait of Fabio Cabrera",
  },
  projects: {
    title: "Featured project",
    moreLabel: "More projects on GitHub",
    items: [
      {
        name: "Order processing",
        description:
          "Sales assistant over chat. When a product is out of stock, it requests a quote from the supplier by email and tells the customer the price.",
        role: "Solo full-stack development",
        tags: ["Next.js", "TypeScript", "Prisma", "Supabase (Postgres)", "LangGraph", "Gmail API"],
        image: "/projects/chat.png",
        imageAlt: "Customer chat that checks a product's availability with the supplier",
        gallery: [
          {
            src: "/projects/dashboard.png",
            alt: "Management dashboard with order totals and a list of recent orders",
            caption: "Management dashboard with an order summary.",
          },
          {
            src: "/projects/kanban.png",
            alt: "Order kanban board with the columns Consulting, Waiting for supplier, Quoted and Payment pending",
            caption: "Order board, from first inquiry to payment.",
          },
          {
            src: "/projects/b2b-monitor.png",
            alt: "Monitor of supplier negotiations by email",
            caption: "Supplier negotiation monitor, which checks email replies every 5 minutes.",
            wide: true,
          },
        ],
        links: [
          { label: "Demo", href: "https://dtecnoc-app.vercel.app" },
          { label: "Code", href: "https://github.com/FabioCabreraMendoza/dtecnoc-app" },
        ],
        note: "Test access is in the repository README.",
      },
    ],
  },
  experience: {
    title: "Experience and education",
    work: "Experience",
    education: "Education",
    jobs: [
      {
        period: "2023 - Present",
        title: "IT Helpdesk",
        org: "DTECNOC",
        points: [
          "Daily support for users, accounts and networks at a company of 6 people.",
          "Built the company's order processing application (see the featured project).",
        ],
        logo: { src: "/logos/dtecnoc.jpg", alt: "DTECNOC logo", width: 192, height: 192 },
      },
      {
        period: "Jun 2026",
        title: "ZKBioTime software installation at a mining camp",
        org: "Prodimin",
        points: [
          "Installed ZKBioTime, software for employee attendance tracking and schedule creation.",
          "Cleaned outdated employee, department and job-title data so it could be integrated into the web application.",
          "Delivered solo, traveling to a remote location in the country.",
        ],
        logo: { src: "/logos/prodimin.png", alt: "Prodimin logo", width: 617, height: 257 },
      },
    ],
    studies: [
      {
        period: "Class of 2027",
        title: "Computer Systems Engineering",
        org: "Universidad Privada Antenor Orrego",
        points: [],
      },
      {
        period: "2026 - Present",
        title: "AI and Data Science",
        org: "GCI World",
        points: [],
      },
    ],
  },
  stack: {
    title: "Stack and tools",
    groups: [
      { name: "Development", items: ["TypeScript", "Next.js", "Python"] },
      { name: "AI and data", items: ["LangGraph", "PostgreSQL", "Power BI"] },
      { name: "Platforms and tools", items: ["Supabase", "Vercel", "GitHub Actions", "Figma"] },
    ],
  },
  contact: {
    title: "Let's work together?",
    text: "Send me a message and I'll get back to you as soon as I can.",
    linkedin: "LinkedIn",
  },
  footer: "All rights reserved.",
};

export const content: Record<Lang, Copy> = { es, en };
