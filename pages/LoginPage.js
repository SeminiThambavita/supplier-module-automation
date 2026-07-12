export class LoginPage{
    constructor(page){
        this.page=page;
    }
    async login(username,password){
        await this.page.locator("#txtUsername").fill(username);
        await this.page.locator("#txtPassword").fill(password);
        await this.page.getByRole("button",{name:"Log In"}).click(); 
    }






}