import { defineField, defineType } from "sanity";

export const news = defineType({
    name: "news",
    title: "Noticias",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Título",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "category",
            title: "Categoría",
            type: "string",
            options: {
                list: [
                    { title: "Actividad", value: "activity" },
                    { title: "Convocatoria", value: "call" },
                    { title: "Logro", value: "achievement" },
                    { title: "Investigación", value: "research" },
                    { title: "Evento", value: "event" },
                ],
            },
            initialValue: "activity",
        }),
        defineField({
            name: "publishedAt",
            title: "Fecha de publicación",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "excerpt",
            title: "Resumen",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "coverImage",
            title: "Imagen principal",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "body",
            title: "Contenido",
            type: "array",
            of: [{ type: "block" }, { type: "image" }],
        }),
        defineField({
            name: "documents",
            title: "Documentos descargables",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "newsDocument",
                    fields: [
                        { name: "title", title: "Título", type: "string" },
                        { name: "file", title: "Archivo", type: "file" },
                    ],
                },
            ],
        }),
        defineField({
            name: "links",
            title: "Links importantes",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "newsLink",
                    fields: [
                        { name: "label", title: "Texto del link", type: "string" },
                        { name: "url", title: "URL", type: "url" },
                    ],
                },
            ],
        }),
        defineField({
            name: "featured",
            title: "Mostrar en inicio",
            type: "boolean",
            initialValue: false,
        }),
    ],
});
