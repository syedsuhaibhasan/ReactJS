import conf from "../../conf/conf";
import {Client, Account, ID} from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteEndpoint)
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
            return await this.account.createEmailSession(email, password);

        } catch (error) {
            console.log("Appwrite service :: login :: error", error);
        }
    }

    async getCurrentUser() {
        try {
          return await this.account.get()  
        } catch (error) {
            // if no account exists throw error trreat as guest
            if (error?.code === 401) {
                return null;
            }
            throw error;
        }
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