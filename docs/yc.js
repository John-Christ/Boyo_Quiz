const axios = require('axios')

// Anonymous test key. Replace with your key.
const SECRET_KEY = 'sk_live_d2acec067LM2OJ9b1d5418b9b7d9'

axios.post(
  'https://online.yoco.com/v1/charges/',
  {
    token: 'tok_mXAV2IAmPOPEEvTmAvTrzSaPX',
    amountInCents: 500,
    currency: 'ZAR',
  },
  {
    headers: {
      'X-Auth-Secret-Key': SECRET_KEY,
    },
  },
)
.then(res => {
  // res.status will contain the HTTP status code
  // res.data will contain the response body
})
.catch(error => {
  // handle errors
})
