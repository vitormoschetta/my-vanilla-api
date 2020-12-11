module.exports = async function (context, req) {
    context.res = {
      body: {
        text: "Texto de uma API"
      }
    };
  };