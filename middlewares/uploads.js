import multer from "multer";
import {multerSaveFilesOrg} from "multer-savefilesorg";


export const localUpload = multer({dest: 'uploads/'});

export const itemImageUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/rentease-api/items/*'

    }),
    preservePath: true
});

export const categoryImageUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/rentease-api/categories/*'

    }),
    preservePath: true
});

export const userAvatarUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/rentease-api/users/*' 

    }),
    preservePath: true
});