exports.handler = async () => {
  const key = process.env.TIKTOK_CLIENT_KEY || "";
  return {
    statusCode: 200,
    body: JSON.stringify({
      keyLength: key.length,
      keyStart: key.slice(0, 4),
      keyEnd: key.slice(-4)
    })
  };
};
