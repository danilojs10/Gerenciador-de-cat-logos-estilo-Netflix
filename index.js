const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env.COSMOS_DB_ENDPOINT;
const key = process.env.COSMOS_DB_KEY;
const client = new CosmosClient({ endpoint, key });
const databaseId = "NetflixCatalog";
const containerId = "Movies";

module.exports = async function (context, req) {
    try {
        const database = client.database(databaseId);
        const container = database.container(containerId);

        const querySpec = {
            query: "SELECT * FROM c"
        };

        const { resources: movies } = await container.items.query(querySpec).fetchAll();

        context.res = {
            status: 200,
            body: movies
        };
    } catch (error) {
        context.log.error('Erro ao buscar catálogo:', error);
        context.res = {
            status: 500,
            body: "Erro interno no servidor"
        };
    }
};
