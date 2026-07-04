import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
    name: "siteSettings",
    title: "Configuración del sitio",
    type: "document",
    fields: [
        defineField({
            name: "heroTitle",
            title: "Título principal",
            type: "string",
        }),
        defineField({
            name: "heroSubtitle",
            title: "Subtítulo principal",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "aboutText",
            title: "Texto sobre el capítulo",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "mission",
            title: "Misión",
            type: "text",
            rows: 4,
        }),
        defineField({
            name: "contactEmail",
            title: "Correo de contacto",
            type: "email",
        }),
        defineField({
            name: "socialLinks",
            title: "Redes sociales",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "socialLink",
                    fields: [
                        { name: "label", title: "Nombre", type: "string" },
                        { name: "url", title: "URL", type: "url" },
                    ],
                },
            ],
        }),
    ],
});
