import { fetchGMSData } from '$lib/server/gms';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, setHeaders }) => {
    // Cache for 15 minutes
    setHeaders({
        'cache-control': 'public, max-age=900, s-maxage=900'
    });

    return {
        gms: await fetchGMSData(fetch)
    };
};