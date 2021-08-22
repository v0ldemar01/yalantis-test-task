import multer from 'fastify-multer';

const storage = multer.memoryStorage();

export const multerParser = multer({ storage }) as any;

