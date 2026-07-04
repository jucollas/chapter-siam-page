import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
    name: "siam-cali",
    title: "SIAM Cali Chapter",

    projectId: "0hb1d59l",
    dataset: "production",

    plugins: [structureTool()],

                            schema: {
                                types: schemaTypes,
                            },
});
