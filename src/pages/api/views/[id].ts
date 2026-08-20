import type { APIRoute } from 'astro';
import { client } from '../../../lib/sanity';

export const POST: APIRoute = async ({ params }) => {
    const { id } = params;

    if (!id) return new Response('Missing ID', { status: 400 });

    try {
        await client
            .patch(id)
            .inc({ views: 1 })
            .setIfMissing({ views: 0 })
            .commit({
                token: import.meta.env.SANITY_WRITE_TOKEN
            });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed' }), { status: 500 });
    }
};