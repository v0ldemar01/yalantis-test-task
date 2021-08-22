import sharp from 'sharp';
import fs from 'fs';

export const downloadImage = async ({ originalname, buffer }: {originalname: string, buffer: string}) => {
  const newBuffer = await sharp(buffer)
    .resize(200, 200)
    .toBuffer();
  return fs.promises.writeFile(`./uploads/${originalname}`, newBuffer);
};

export const getImage = async (originalname: string) => fs.promises.readFile(`./uploads/${originalname}`, 'base64');
