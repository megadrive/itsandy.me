import type { APIContext } from "astro";

export async function get({ params, request }: APIContext) {
  return {
    body: JSON.stringify({
      path: new URL(request.url).pathname,
    }),
  };
}
