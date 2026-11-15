exports.handler = async () => {
  const clientKey = process.env.TIKTOK_CLIENT_KEY || "";
  return {
    statusCode: 200,
    body: JSON.stringify({
      keyLength: clientKey.length,
      keyStart: clientKey.substring(0, 4),
      keyEnd: clientKey.substring(clientKey.length - 4)
    })
  };
};
