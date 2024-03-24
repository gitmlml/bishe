
// const models = require('../server/db')
// const express = require('express')
// const router = express.Router()
// const mysql = require('mysql')
const axios = require('axios')
export function addUser (user, callback) {
// eslint-disable-next-line indent
    axios({
    method: 'post',
    url: '/api/user/add',
    // eslint-disable-next-line indent
        data: {
    // eslint-disable-next-line indent
            username: user.username,
      // eslint-disable-next-line indent
            password: user.password
    }
  })
    .then(res => {
      callback(res)
    })
}
