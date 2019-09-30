// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const randomWords = require('random-words');

async function getWord() {
  return Promise.resolve(randomWords().toUpperCase());
}

exports.handler = async (event, context) => {
  try {
    const subject = await getWord();
    return {
      statusCode: 200,
      body: JSON.stringify(`${subject}`)
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
