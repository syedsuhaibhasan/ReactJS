import conf from "../../conf/conf";
import {Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteEndpoint)
        .setProject(conf.projectName);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
               conf.databaseID,
               conf.collectionID,
               slug,
               {
                title,
                content,
                featuredImage,
                status,
                userId,
               }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
          return await this.databases.updateDocument(
            conf.databaseID,
            conf.collectionID,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
            }
          ) 
        } catch (error) {
            console.log("Appwrite service :: updatePost error", error);
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.databaseID,
                conf.collectionID,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.databaseID,
                conf.collectionID,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: getPost error", error);
            return false
        }
    }

    async getAllPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.databaseID,
                conf.collectionID,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: getAllPosts error", error);
        }
    }

    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.bucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile error", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.bucketID,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        try{
        return this.bucket.getFileView(
            conf.bucketID,
            fileId
        )} catch(error){
            console.log("Appwrite service :: getFilePreview error", error);
            return false;
        }
    }
}

const service = new Service()
export default service