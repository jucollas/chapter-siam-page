import { defineField, defineType } from "sanity";

export const event = defineType({
    name: "event",
    title: "Eventos y charlas",
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
            name: "type",
            title: "Tipo",
            type: "string",
            options: {
                list: [
                    { title: "Evento", value: "event" },
                    { title: "Charla", value: "talk" },
                    { title: "Taller", value: "workshop" },
                    { title: "Reunión", value: "meeting" },
                ],
            },
            initialValue: "event",
        }),
        defineField({
            name: "startDate",
            title: "Fecha y hora de inicio",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "endDate",
            title: "Fecha y hora de cierre",
            type: "datetime",
        }),
        defineField({
            name: "modality",
            title: "Modalidad",
            type: "string",
            options: {
                list: [
                    { title: "Presencial", value: "in_person" },
                    { title: "Virtual", value: "online" },
                    { title: "Híbrido", value: "hybrid" },
                ],
            },
        }),
        defineField({
            name: "location",
            title: "Lugar",
            type: "string",
        }),
        defineField({
            name: "speaker",
            title: "Ponente",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Descripción",
            type: "array",
            of: [{ type: "block" }, { type: "image" }],
        }),
        defineField({
            name: "poster",
            title: "Póster o imagen",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "registrationLink",
            title: "Link de inscripción",
            type: "url",
        }),
        defineField({
            name: "materials",
            title: "Materiales",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "eventMaterial",
                    fields: [
                        { name: "title", title: "Título", type: "string" },
                        { name: "file", title: "Archivo", type: "file" },
                        { name: "url", title: "URL externa", type: "url" },
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
