import {v2} from "cloudinary"
import fs from "fs"
import { loadEnvFile } from "process";



    cloudinary.config({ 
        cloud_name:'process.env.CLOUDINARY_CLOUD_NAME' , 
        api_key:'process.env.CLOUDINARY_API_KEY' , 
        api_secret:'process.env.CLOUDINARY_API_SECRET ' // Click 'View Credentials' below to copy your API secret
    });


    const uploadCloudinary= async (localFilePath) => {
        try{
            if(!localFilePath) return null
            //upload file on cloudinary
            const response=await cloudinary.uploader.upload
            (localFilePath,{
                resource_type:"auto"
            })
            //file has been uploaded successfully
            console.log("file is uploaded on cloudinary",
                response.url
            );
            return response;
        }
        catch(error){
            fs.unlinkSync(localFilePath)//REMOVE THE LOCALLY SAVED TEMPORARY FILE AS THE UPLOAD OPERATION GOT FAILED
            return null;

        }
    }

    export {uploadCloudinary}
