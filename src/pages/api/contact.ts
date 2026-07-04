import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async () => {
  return new Response(null, {
    status: 303,
    headers: {
      Location: "/contacto?disabled=true",
    },
  });
};
