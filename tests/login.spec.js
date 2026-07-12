import{test,expect}from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
//use of hook beforeEach to navigate to supplier module login page
test.beforeEach(async({page})=>{
    await page.goto("http://69.169.101.31:5080/");
}
);
//Login Testcases - Functional Testcases
test("TC_LOG_MF_01:Verify login using valid credentials",async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.login("Duwasha","123");
    await expect(page).toHaveURL("http://69.169.101.31:5080/dashboard");
});
test("TC_LOG_EF_02:Verify login using invalid credentials for both username & password",async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.login("Tom","444");
    await expect(page.locator(".MuiAlert-message.css-127h8j3")).toHaveText("Login failed. Please check your credentials and try again.!");
});
test("TC_LOG_EF_03:Verify login using invalid username & valid password.",async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.login("dfg","123");
    await expect(page.locator(".MuiAlert-message.css-127h8j3")).toHaveText("Login failed. Please check your credentials and try again.!");
});
test("TC_LOG_EF_04:Verify login using valid username & invalid password.",async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.login("Duwasha","444");
    await expect(page.locator(".MuiAlert-message.css-127h8j3")).toHaveText("Login failed. Please check your credentials and try again.!");
});
test("TC_LOG_EF_05:Verify login by clicking login button with keeping both credential fields blank.",async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.login("","");
    await expect(page.locator(".MuiAlert-message.css-127h8j3")).toHaveText("Login failed. Please check your credentials and try again.!");
});
test("TC_LOG_EF_06:Verify login by clicking login button with keeping only password field blank.",async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.login("Duwasha","");
    await expect(page.locator(".MuiAlert-message.css-127h8j3")).toHaveText("Login failed. Please check your credentials and try again.!");
});
test("TC_LOG_EF_07:Verify login by clicking login button with keeping only username field blank.",async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.login("","123");
    await expect(page.locator(".MuiAlert-message.css-127h8j3")).toHaveText("Login failed. Please check your credentials and try again.!");
});
test("TC_LOG_EF_08:Verify case sensitivity of username field by entering the valid username in the opposite case.",async({page})=>{
    const loginPage=new LoginPage(page);
    //used a for loop to iterate through the array of opposite case usernames and verify the login failure message for each case.
    const oppositeCaseUsers=["dUWASHA","DUWASHA","dUwasha","DuWaSha"];
    for (const user of oppositeCaseUsers){
        await loginPage.login(user,"123");
        await expect(page.locator(".MuiAlert-message.css-127h8j3")).toHaveText("Login failed. Please check your credentials and try again.!");
    }
});
test("TC_LOG_AF_09:Verify login navigation using keyboard from username field to password field.",async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.username.fill("Duwasha"); 
    //press tab using keyboard
    await page.keyboard.press("Tab");
    //verify that the focus is on the password field after pressing tab from username field
    await expect(loginPage.password).toBeFocused();

});
test("TC_LOG_AF_10:Verify login by pressing the Enter key.",async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.username.fill("Duwasha"); 
    await loginPage.password.fill("123");
    //press enter using keyboard
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL("http://69.169.101.31:5080/dashboard");
   
});
test("TC_LOG_AF_11:Verify browser Back button behavior after successfully login.",async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.login("Duwasha","123");
    await expect(page).toHaveURL("http://69.169.101.31:5080/dashboard");
    //go back using back button in browser.
    await page.goBack();
    await expect(page).toHaveURL("http://69.169.101.31:5080/");
});

test("TC_LOG_AF_12:Verify session timeout after a period of user inactivity",async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.login("Duwasha","123");
    await expect(page).toHaveURL("http://69.169.101.31:5080/dashboard");
    //waiting for 10 minutes to check if the session times out and user is logged out automatically
    await page.waitForTimeout(600000);
    await expect(page).toHaveURL("http://69.169.101.31:5080/");
});
