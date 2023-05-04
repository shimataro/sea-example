import { createServer } from "./server";

/**
 * main function
 */
function main() {
    const server = createServer();

    server.listen({
        port: 3000,
    }).catch((err) => {
        server.log.error(err);
        process.exit(1);
    });
}

main();
