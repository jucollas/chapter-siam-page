import { defineField, defineType } from "sanity";

export const person = defineType({
  name: "person",
  title: "Personas",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre completo",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "lastName",
      title: "Apellidos para ordenar",
      type: "string",
      description:
        "Úsalo para ordenar estudiantes alfabéticamente por apellido. Ejemplo: Sánchez Gómez, Pinillo González, Collazos Mejía.",
      hidden: ({ document }) => document?.category !== "student",
    }),

    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Estudiante", value: "student" },
          { title: "Profesor", value: "faculty" },
          { title: "Invitado / Colaborador", value: "guest" },
        ],
      },
      initialValue: "student",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "studentRole",
      title: "Rol del estudiante",
      type: "string",
      options: {
        list: [
          { title: "Presidente", value: "president" },
          { title: "Vicepresidente", value: "vicePresident" },
          { title: "Secretario", value: "secretary" },
          { title: "Tesorero", value: "treasurer" },
          { title: "Miembro", value: "member" },
        ],
        layout: "radio",
      },
      initialValue: "member",
      hidden: ({ document }) => document?.category !== "student",
    }),

    defineField({
      name: "facultyRole",
      title: "Rol del profesor",
      type: "string",
      options: {
        list: [
          { title: "Profesor líder PUJ", value: "leadPUJ" },
          { title: "Profesor líder UNIAJC", value: "leadUNIAJC" },
          { title: "Profesor", value: "professor" },
        ],
        layout: "radio",
      },
      initialValue: "professor",
      hidden: ({ document }) => document?.category !== "faculty",
    }),

    defineField({
      name: "interestAreas",
      title: "Áreas de interés",
      type: "string",
      description:
        "Texto corto para mostrar en la tabla. Ejemplo: Modelos de opinión, simulación.",
      hidden: ({ document }) => document?.category !== "student",
    }),

    defineField({
      name: "institution",
      title: "Institución",
      type: "string",
      options: {
        list: [
          {
            title: "Pontificia Universidad Javeriana Cali",
            value: "Pontificia Universidad Javeriana Cali",
          },
          {
            title: "Institución Universitaria Antonio José Camacho",
            value: "Institución Universitaria Antonio José Camacho",
          },
        ],
      },
    }),

    defineField({
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "bio",
      title: "Biografía corta",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "link",
      title: "Link externo",
      type: "url",
    }),

    defineField({
      name: "active",
      title: "Activo",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "featured",
      title: "Mostrar en inicio",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "order",
      title: "Orden manual",
      type: "number",
      initialValue: 100,
    }),

    defineField({
      name: "role",
      title: "Rol anterior",
      type: "string",
      description:
        "Campo heredado. No usar para nuevos registros; se conserva para compatibilidad con datos antiguos.",
      hidden: true,
    }),
  ],

  preview: {
    select: {
      title: "name",
      category: "category",
      studentRole: "studentRole",
      facultyRole: "facultyRole",
      institution: "institution",
      media: "photo",
    },
    prepare({ title, category, studentRole, facultyRole, institution, media }) {
      const role =
        category === "student"
          ? studentRole
          : category === "faculty"
            ? facultyRole
            : category;

      return {
        title,
        subtitle: [role, institution].filter(Boolean).join(" · "),
        media,
      };
    },
  },
});
