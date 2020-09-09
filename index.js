const i18next = require('i18next')
const Backend = require('i18next-fs-backend')

i18next.use(Backend).init({
  // initImmediate: false,
  lng: 'en',
  fallbackLng: 'en',
  preload: ['en'],
  ns: ['translation'],
  defaultNS: 'translation',
  backend: {
    loadPath: 'locales/{{lng}}/{{ns}}.yml'
  }
}, (err, t) => {
  if (err) return console.error(err)
  console.log('i18next is ready...')
  console.log(t('welcome'))
  console.log(t('welcome', { lng: 'de' }))
})


const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')

const express = require('express')
const app = express()

const adminBro = new AdminBro({
  databases: [],
  rootPath: '/admin',
})

const router = AdminBroExpress.buildRouter(adminBro)

app.use(adminBro.options.rootPath, router)

app.get('/', (req, res) => {
  res.send(i18next.t('welcome'))
})

app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
