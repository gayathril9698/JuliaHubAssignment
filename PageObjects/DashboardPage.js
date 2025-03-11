const { text } = require("stream/consumers");

class DashboardPage{
    constructor(page){
        this.page = page;
        this.createRepositoryBtn = page.getByRole('button', { name: 'Create a new repository' });
        this.repositoryNameInput = page.getByPlaceholder('name your new repository...')
        this.submitBtn = page.locator('.prc-Button-Label-pTQ3x').locator("text='Create repository'")
        this.repositoryName = page.locator('.wb-break-word a').filter({ visible: true });
        this.publicRadioBtn = page.locator('input[value="public"]');
        this.issuesTab = page.locator('#issues-tab');
        this.newIssueLink = page.getByRole('link', { name: 'New issue' });
        this.createIssuePage = page.getByRole('heading', { name: 'Create new issue' });
        this.issueTitleInput = page.getByRole('textbox', { name: 'Add a title' });
        this.createIssueBtn = page.getByTestId('create-issue-button');
    }

    async createRepository(name){
        await this.repositoryNameInput.fill(name);
        await this.publicRadioBtn.click();
        await this.createRepositoryBtn.click();
    }

    async verifyRepositoryCreated(){
       return await this.repositoryName.textContent();
    }
}

module.exports = {DashboardPage}