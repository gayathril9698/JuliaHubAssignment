const { use } = require("../playwright.config");

class LoginPage{
    constructor(page, expect){
        this.expect = expect;
        this.page = page;
        this.signInBtn = page.getByText(" Sign in ");
        this.userNameInput = page.getByRole('textbox', {name : ' Username or email address '});
        this.passwordInput = page.getByRole('textbox', {name: ' Password '});
        this.loginBtn = page.locator('.js-sign-in-button');
        this.dashboardText = page.locator('.AppHeader-context-item');
    }

    async login(userName, password){
        await this.signInBtn.last().click();
        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }

    async getDashboardText(){
        const text = await this.dashboardText.textContent();
        return text.trim();
    }

    async verifyUserOnLoginPage(){
        return await this.signInBtn.isVisbile();
    }

}

module.exports = {LoginPage};