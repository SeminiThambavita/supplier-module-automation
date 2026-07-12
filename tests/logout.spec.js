import {test,expect}from "@playwright/test";
import{DashboardPage}from "../pages/DashboardPage";
import {LoginPage} from "../pages/LoginPage";
//use of hook beforeEach to navigate to supplier module login page
test.beforeEach(async({page})=>{
    await page.goto("http://69.169.101.31:5080/");
}
);
//Logout Testcases - Functional Testcases
test("TC_LOGOUT_MF_01:Verify successful log out.",async({page})=>{
    const loginPage=new LoginPage(page);
    const dashboardPage=new DashboardPage(page);
    //first should login
    await loginPage.login("Duwasha","123");
    await expect(page).toHaveURL("http://69.169.101.31:5080/dashboard");
    //logout
    await dashboardPage.logout();
    await expect(page).toHaveURL("http://69.169.101.31:5080/");

});
test("TC_LOGOUT_MF_02:Verify the login page credential fields remain blank after logout.",async({page})=>{
    const loginPage=new LoginPage(page);
    const dashboardPage=new DashboardPage(page);
    //first should login
    await loginPage.login("Duwasha","123");
    await expect(page).toHaveURL("http://69.169.101.31:5080/dashboard");
    //logout
    await dashboardPage.logout();
    await expect(page).toHaveURL("http://69.169.101.31:5080/");
    //verify that the username & password fields are blank after logout
    await expect(loginPage.username).toHaveValue("");
    await expect(loginPage.password).toHaveValue("");

});
test("TC_LOGOUT_AF_03:Verify Back button behavior after successful logout.",async({page})=>{
    const loginPage=new LoginPage(page);
    const dashboardPage=new DashboardPage(page);
    //first should login
    await loginPage.login("Duwasha","123");
    await expect(page).toHaveURL("http://69.169.101.31:5080/dashboard");
    //logout
    await dashboardPage.logout();
    await expect(page).toHaveURL("http://69.169.101.31:5080/");
    //click browser back button
    await page.goBack();
    await expect(page).not.toHaveURL("http://69.169.101.31:5080/dashboard");

});
test("TC_LOGOUT_EF_04:Verify user cannot access the dashboard using direct URL after logout",async({page})=>{
    const loginPage=new LoginPage(page);
    const dashboardPage=new DashboardPage(page);
    //first should login
    await loginPage.login("Duwasha","123");
    await expect(page).toHaveURL("http://69.169.101.31:5080/dashboard");
    //logout
    await dashboardPage.logout();
    await expect(page).toHaveURL("http://69.169.101.31:5080/");
    //asking browser to directly go to dashboard using the URL.
    await page.goto("http://69.169.101.31:5080/dashboard");
    await expect(page).not.toHaveURL("http://69.169.101.31:5080/dashboard");

});
test("TC_LOGOUT_AF_05:Verify refresh behavior after logout on login page",async({page})=>{
    const loginPage=new LoginPage(page);
    const dashboardPage=new DashboardPage(page);
    //first should login
    await loginPage.login("Duwasha","123");
    await expect(page).toHaveURL("http://69.169.101.31:5080/dashboard");
    //logout
    await dashboardPage.logout();
    await expect(page).toHaveURL("http://69.169.101.31:5080/");
    //REFRESHING THE PAGE.
    await page.reload();
    await expect(page).toHaveURL("http://69.169.101.31:5080/");
    await expect(loginPage.username).toHaveValue("");
    await expect(loginPage.password).toHaveValue("");

});