class IssuePage{
    constructor(page){
        this.page = page;
        this.repositoryName = page.locator('.wb-break-word a').filter({ visible: true });
        this.issuesTab = page.locator('#issues-tab');
        this.newIssueLink = page.getByRole('link', { name: 'New issue' });
        this.createIssuePage = page.getByRole('heading', { name: 'Create new issue' });
        this.issueTitleInput = page.getByRole('textbox', { name: 'Add a title' });
        this.createIssueBtn = page.getByTestId('create-issue-button');
        this.issueTitle = page.getByTestId('issue-title');
        this.profile = page.getByRole('button', { name: 'Open user navigation menu' })
        this.signOutBtn = page.getByRole('link', { name: 'Sign out' })
        this.mainSignOutBtn = page.getByRole('button', { name: 'Sign out', exact: true });
    }

    async getIssueTitle(){
        return this.issueTitle.textContent();
    }

    async createIssue(issueName){
        await this.repositoryName.click();
        await this.issuesTab.click();
        await this.newIssueLink.click();
        await this.createIssuePage.isVisible();
        await this.issueTitleInput.fill(issueName);
        await this.createIssueBtn.click();
    }

    async signOut(){
        await this.profile.click();
        await this.signOutBtn.click();
        await this.mainSignOutBtn.click();
    }
}

module.exports = {IssuePage}