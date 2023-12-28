window.passport = new window.immutable.passport.Passport({
  baseConfig: new window.immutable.config.ImmutableConfiguration({
    environment: window.immutable.config.Environment.SANDBOX,
  }),
  clientId: "OrJQAzzHN97dlEXf9WynaYPwCC4foFM9",
  redirectUri: "https://tiger-hip-pipefish.ngrok-free.app",
  logoutRedirectUri: "https://tiger-hip-pipefish.ngrok-free.app/logout.html",
  audience: "platform_api",
  scope: "openid offline_access email transact",
});
