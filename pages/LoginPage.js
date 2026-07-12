export class LoginPage{
    constructor(page){
        this.page=page;
        //used username & password under constructors to initialize them for it to be more easy(ex:when doing keyboard navigations)
        this.username=this.page.locator("#txtUsername");
        this.password=this.page.locator("#txtPassword");    
    }
    async login(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.page.getByRole("button",{name:"Log In"}).click(); 
    }






}