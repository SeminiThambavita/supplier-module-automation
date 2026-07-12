export class DashboardPage {
    constructor(page) {
        this.page = page;
        this.profilemenu=this.page.locator(".MuiBox-root css-1mzk1eu");
        this.logoutButton=this.page.locator(".MuiListItem-root MuiListItem-gutters MuiListItem-padding css-19bsqip");
    }
    async logout(){
        await this.profilemenu.click();
        await this.logoutButton.click();
    }
}