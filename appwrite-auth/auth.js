import conf from "../conf/config"
import {Client, Account, ID} from 'appwrite'

export class AuthService {
    client = new Client()
    account;

    constructor () {
        this.client
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client)
    }

    async createAccount ({email,password,name}){
        try{
          const userAccount =  await this.account.create(ID.unique(), email, password, name)
          if(userAccount){
            // call another method to login
            return this.loginAccount({email,password});

          }else{
            return userAccount;
          }

        }catch(error){
            throw error
        }
    }

    async loginAccount({email,passowrd}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error
        }
    }

    async getCurrentAccount () {
        try {
            return this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentAccount :: error", error)
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }
}

const authService = new AuthService


export default authService;