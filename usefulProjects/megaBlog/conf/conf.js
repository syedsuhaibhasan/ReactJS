const conf = {
    // appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    projectName: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    databaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    collectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    bucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinymceAPI: String(import.meta.env.VITE_TINYMCE_API)
}   

export default conf