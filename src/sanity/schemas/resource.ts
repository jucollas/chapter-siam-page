import { defineField, defineType } from "sanity";

export const resource = defineType({
    name: "resource",
    title: "Recursos",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Título",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Descripción",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "category",
            title: "Categoría",
            type: "string",
            options: {
                list: [
                    { title: "Documento", value: "document" },
                    { title: "Link importante", value: "link" },
                    { title: "Material de taller", value: "workshop_material" },
                    { title: "Convocatoria", value: "call" },
                    { title: "Repositorio", value: "repository" },
                ],
            },
            initialValue: "document",
        }),
        defineField({
            name: "file",
            title: "Archivo descargable",
            type: "file",
        }),
        defineField({
            name: "url",
            title: "URL externa",
            type: "url",
        }),
        defineField({
            name: "date",
            title: "Fecha",
            type: "date",
        }),
        defineField({
            name: "visible",
            title: "Visible",
            type: "boolean",
            initialValue: true,
        }),
        defineField({
            name: "order",
            title: "Orden",
            type: "number",
            initialValue: 100,
        }),
    ],
});
