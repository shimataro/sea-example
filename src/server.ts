import fastify, { FastifyInstance } from "fastify";

/**
 * create a Fastify server instance
 * @returns server instance
 */
export function createServer(): FastifyInstance {
    const server = fastify({
        logger: true,
    });

    server.get("/", async (_req, _res) => {
        return {
            hell: "word",
        };
    });

    return server;
}
