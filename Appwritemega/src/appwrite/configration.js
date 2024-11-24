import config from "../conf/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Services{
    client = new Client();
   database;
   bucket;

   constructor(){
    this.client
    .setEndpoint(config.appWriteURL)
    .setProject(config.appWriteProjectid);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);

   }

   async CreatePost({title, slug, content, titleimage, status, userid}){
        try {
            return await this.database.createDocument(
                config.appWriteDatabseid,
                config.appWriteCollectionid,
                slug,
                {
                    title,
                    content,
                    titleimage,
                    status,
                    userid
                }
            )
            
        } catch (error) {
            return error
        }
   }
   async UpdatePost(slug, {title,  content, titleimage, status}){
        try {
           return await this.database.updateDocument(
            config.appWriteDatabseid,
            config.appWriteCollectionid,
            slug,
            {
                title,
                content,
                titleimage,
                status
            }
           )
        } catch (error) {
            throw this.UpdatePost;
        }
   }
   async DeletePost(slug){
    try {
        await this.database.deleteDocument(
            config.appWriteDatabseid,
            config.appWriteCollectionid,
            slug
        )
        return true
    } catch (error) {
        throw error
        return false
    }
   }
   async GetPost(slug){
    try {
        return await this.database.getDocument(
            config.appWriteDatabseid,
            config.appWriteCollectionid,
            slug
        )
    } catch (error) {
        throw  this.GetPost().error
    }
   }
   async GetPosts(Query = [Query.equal("status", "active")]) {
    try {
        return await this.database.listDocuments(
            config.appWriteDatabseid,
            config.appWriteCollectionid,
            Query,
        )
    } catch (error) {
        
    }

   }
   async UploadFile(file) {
    try {
        return await this.bucket.createFile(
            config.appWriteBucketid,
            ID.unique(),
            file
        )
    } catch (error) {
        throw this.UploadFile
    }
   }
   async DeleteFile (fileId) {
    try {
        await this.bucket.deleteFile(
            config.appWriteBucketid,
            fileId
        )
        return true
    } catch (error) {
        throw this.DeleteFile

        return false
    }
   }
   getFilePreview(fileId) {
    return this.bucket.getFilePreview(
        config.appWriteBucketid,
        fileId
    )
   }
};

const services = new Services()
export default services
