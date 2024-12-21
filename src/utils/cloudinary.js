import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (LocalFilePath) => {
    if (!LocalFilePath) return null;
    try {
        const response = await cloudinary.uploader.upload(LocalFilePath, { resource_type: 'auto' })
        console.log("File Uploaded Successfully", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(LocalFilePath)
        return null;
    }

}

export { uploadOnCloudinary };