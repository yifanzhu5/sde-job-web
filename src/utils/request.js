// import axios from 'axios'
// const { parse, compile } = require("path-to-regexp")
// import { message } from 'antd'


// export default function request(options) {
//   let { data, url } = options

//   try {
//     let domain = ''
//     const urlMatch = url.match(/[a-zA-z]+:\/\/[^/]*/)
//     if (urlMatch) {
//       ;[domain] = urlMatch
//       url = url.slice(domain.length)
//     }

//     const match = parse(url)
//     url = compile(url)(data)
//     url = domain + url
//   } catch (e) {
//     message.error(e.message)
//   }

//   options.url = url

//   return axios(options).then(response => {
//     const { statusText, status, data } = response

//     let result = {}
//     if (typeof data === 'object') {
//       result = data
//       if (Array.isArray(data)) {
//         result.list = data
//       }
//     } else {
//       result.data = data
//     }

//     return Promise.resolve({
//       success: true,
//       message: statusText,
//       statusCode: status,
//       ...result,
//     })
//   }).catch(error => {
//     const { response, message } = error

//     let msg
//     let statusCode

//     if (response && response instanceof Object) {
//       const { data, statusText } = response
//       statusCode = response.status
//       msg = data.message || statusText
//     } else {
//       statusCode = 600
//       msg = error.message || 'Network Error'
//     }

//   })
// }
