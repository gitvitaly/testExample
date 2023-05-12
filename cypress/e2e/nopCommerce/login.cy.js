import { onLoginPage } from "../../support/nopCommerce/login_page";
const user = require("../../fixtures/user.json");

describe('Login Scenarios', () => {
  it("Validate successful login", { tags: 'smoke' }, function () {
    onLoginPage.login(user.successLogin.email, user.successLogin.password);
    onLoginPage.assertSuccessfulLogin();
  });

  it("Unsuccessful Login with Wrong User Name", { tags: "smoke" }, () => {
    onLoginPage.login(user.unsuccessLogin.invalid_login_email, user.successLogin.password);
    onLoginPage.assertUnsuccessfulLoginWithWrongEmail();
  });

  it("Unsuccessful Login with Wrong password", { tags: "smoke" }, () => {
    onLoginPage.login(user.successLogin.email, user.unsuccessLogin.invalid_password);
    onLoginPage.assertUnsuccessfulLoginWithWrongPassword();
  });

  it("Unsuccessful Login with empty field email ", { tags: "smoke" }, () => {
    onLoginPage.login(user.unsuccessLogin.empty_field_email, user.successLogin.password);
    onLoginPage.assertUnsuccessfulLoginWithEmptyFieldEmail();
  });

  it("Unsuccessful Login with empty field password ", { tags: "smoke" }, () => {
    onLoginPage.login(user.successLogin.email, user.unsuccessLogin.empty_field_password);
    onLoginPage.assertUnsuccessfulLoginWithEmptyFieldPassword();
  });
});

