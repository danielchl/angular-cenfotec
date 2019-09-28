export const CONFIG = {
  i18nPath: "assets/i18n/",
  defaultLang: "en",
  patterns: {
    email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
  },
  adminUser: {
    email: "admin@cenfo.com",
    password: "Test1234!"
  },

  api: {
    basePath: "http://localhost:3000"
  },

  pagination: {
    page: 1,
    pageSize: 20,
  }

};
