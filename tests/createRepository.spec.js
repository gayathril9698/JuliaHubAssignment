require('dotenv').config(); 
const {test, expect} = require('@playwright/test')
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('config.properties');
const {LoginPage} = require('../PageObjects/LoginPage')
const {DashboardPage} = require('../PageObjects/DashboardPage')
const {IssuePage} = require('../PageObjects/IssuePage')

test.beforeEach('Login to gitHub', async({page})=>{
  const loginPage = new LoginPage(page);
  console.log(properties.get('BASE_URL'));
  await page.goto(properties.get('BASE_URL'));
  await loginPage.login(properties.get("UserName"), properties.get("Password"));
  expect(await loginPage.getDashboardText()).toBe("Dashboard");
})

test('Verify user is able to create Repository and issue and created issue is displayed on the dashboard page', async ({page})=>{
  const dashboardPage = new DashboardPage(page);
  const issuePage = new IssuePage(page);
  await dashboardPage.createRepository(properties.get('RespositoryName'));
  expect(await dashboardPage.verifyRepositoryCreated()).toBe(properties.get('RespositoryName'))
  await issuePage.createIssue(properties.get("IssueName"));
  expect(await issuePage.getIssueTitle()).toBe(properties.get("IssueName"));
})

test.afterEach('Logout from application and verify user is on the login page', async ({page})=>{
  const issuePage = new IssuePage(page);
  const loginPage = new LoginPage(page);
  await issuePage.signOut();
  expect(await loginPage.verifyUserOnLoginPage).toBeTruthy();
})

