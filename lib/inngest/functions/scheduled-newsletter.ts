import {inngest} from "@/lib/inngest/client";

export default inngest.createFunction(
    {id: "newsletter/scheduled"},
    {event: "newsletter.schedule"},
    async ({event, step, runId}) => {
        const allArticles = await step.run("fetch-news", async () => {
            const categories = ["technology", "business", "politics"]

            return fetchArticles(categories)
        })
    }
)