/** @type {import("drizzle-kit").Config} */
export default {
    schema: "./utils/schema.tsx", 
    dialect: 'postgresql',      
    dbCredentials: {
        url: 'postgresql://accounts_owner:th7YEZ6mSPNl@ep-long-sun-a63o2bxv.us-west-2.aws.neon.tech/accounts?sslmode=require', // URL de conexão ao banco de dados
    },
}; 
