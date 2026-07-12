export class DashboardPage {
    constructor(page) {
        this.page = page;
        this.profileMenu=this.page.locator(".MuiBox-root.css-1mzk1eu");
        this.logoutButton=this.page.locator(".MuiListItem-root.MuiListItem-gutters.MuiListItem-padding.css-19bsqip");
    }
    async logout(){
        await this.profileMenu.click();
        await this.logoutButton.click();
    }
}