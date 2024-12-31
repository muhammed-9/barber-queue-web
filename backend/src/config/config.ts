interface Config {
    port: number;
    jwtSecret: string;
    databaseUrl?: string;
}

export const config: Config = {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    jwtSecret: process.env.JWT_SECRET || 'your-super-secret-key-123',
    databaseUrl: process.env.DATABASE_URL
};