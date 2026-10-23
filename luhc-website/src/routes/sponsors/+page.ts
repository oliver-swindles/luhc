import { error } from "@sveltejs/kit";
import { client } from "$lib/sanityClient";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const query = `*[_type == "sponsor"]{
        _id,
        name,
        description,
        link,
        logo
    }`;

    const sponsors = await client.fetch(query);

    if (!sponsors) {
        throw error(404, "Sponsors not found. Please create a document with sponsors in Sanity.")
    }

    return {
        sponsors
    };
};