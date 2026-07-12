import conf from "../../config/config";
import {Client, Account, ID} from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.projectName);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                // call another mehtod
                return this.login({email, password})
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite service :: createAccount :: error", error);
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSesssion(email, password);

        } catch (error) {
            console.log("Appwrite service :: login :: error", error);
        }
    }

    async getCurrentUser() {
        try {
          return await this.account.get()  
        } catch (error) {
            throw error
        }
        // if no user exists
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;