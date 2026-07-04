export const siteSettingsQuery = `
  *[_type == "siteSettings"][0]{
    heroTitle,
    heroSubtitle,
    mission,
    aboutText,
    contactEmail,
    socialLinks
  }
`;

export const featuredNewsQuery = `
  *[_type == "news" && featured == true]
  | order(publishedAt desc)[0...3]{
    _id,
    title,
    "slug": slug.current,
    category,
    publishedAt,
    excerpt,
    "coverImageUrl": coverImage.asset->url
  }
`;

export const allNewsQuery = `
  *[_type == "news"]
  | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
    category,
    publishedAt,
    excerpt,
    "coverImageUrl": coverImage.asset->url
  }
`;

export const newsBySlugQuery = `
  *[_type == "news" && slug.current == $slug][0]{
    _id,
    title,
    category,
    publishedAt,
    excerpt,
    "coverImageUrl": coverImage.asset->url,
    body[]{
      ...,
      _type == "image" => {
        ...,
        "imageUrl": asset->url
      }
    },
    documents[]{
      title,
      "fileUrl": file.asset->url
    },
    links[]{
      label,
      url
    }
  }
`;

export const upcomingEventsQuery = `
  *[_type == "event" && startDate >= now()]
  | order(startDate asc){
    _id,
    title,
    "slug": slug.current,
    type,
    startDate,
    endDate,
    modality,
    location,
    speaker,
    "posterUrl": poster.asset->url,
    registrationLink
  }
`;

export const featuredUpcomingEventsQuery = `
  *[_type == "event" && startDate >= now() && featured == true]
  | order(startDate asc)[0...3]{
    _id,
    title,
    "slug": slug.current,
    type,
    startDate,
    endDate,
    modality,
    location,
    speaker,
    "posterUrl": poster.asset->url,
    registrationLink
  }
`;

export const pastEventsQuery = `
  *[_type == "event" && startDate < now()]
  | order(startDate desc){
    _id,
    title,
    "slug": slug.current,
    type,
    startDate,
    endDate,
    modality,
    location,
    speaker,
    "posterUrl": poster.asset->url
  }
`;

export const eventBySlugQuery = `
  *[_type == "event" && slug.current == $slug][0]{
    _id,
    title,
    type,
    startDate,
    endDate,
    modality,
    location,
    speaker,
    registrationLink,
    "posterUrl": poster.asset->url,
    description[]{
      ...,
      _type == "image" => {
        ...,
        "imageUrl": asset->url
      }
    },
    materials[]{
      title,
      url,
      "fileUrl": file.asset->url
    }
  }
`;

/*
  Esta query se llama featuredPeopleQuery porque ya la estás usando en index.astro,
  pero ahora devuelve TODAS las personas activas.

  Razón:
  TeamPreview necesita todos los estudiantes y profesores para construir:
  - Dirección del capítulo
  - Tabla completa de estudiantes
  - Profesores ordenados
*/
export const featuredPeopleQuery = `
  *[_type == "person" && (!defined(active) || active == true)]
  | order(order asc, name asc){
    _id,
    name,
    lastName,
    category,

    // Campo viejo: se conserva solo para compatibilidad con datos antiguos.
    role,

    // Campos nuevos del schema.
    studentRole,
    facultyRole,
    interestAreas,
    institution,

    bio,
    link,
    featured,
    order,

    "photoUrl": photo.asset->url
  }
`;

export const allPeopleQuery = `
  *[_type == "person" && (!defined(active) || active == true)]
  | order(order asc, name asc){
    _id,
    name,
    lastName,
    category,

    // Campo viejo: se conserva solo para compatibilidad con datos antiguos.
    role,

    // Campos nuevos del schema.
    studentRole,
    facultyRole,
    interestAreas,
    institution,

    bio,
    link,
    featured,
    order,

    "photoUrl": photo.asset->url
  }
`;

export const resourcesQuery = `
  *[_type == "resource" && (!defined(visible) || visible == true)]
  | order(order asc, date desc){
    _id,
    title,
    description,
    category,
    date,
    url,
    "fileUrl": file.asset->url
  }
`;
