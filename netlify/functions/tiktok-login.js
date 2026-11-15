exports.handler = async () => {
  const clientKey = process.env.TIKTOK_CLIENT_KEY;
  if (!clientKey) {
    return {
      statusCode: 500,
      body: "Brak TIKTOK_CLIENT_KEY w środowisku Netlify."
    };
  }
  const redirectUri = "https://tiktok-demoye.netlify.app/callback.html";
  const scope = "user.info.basic,video.upload,video.publish";
  const state = Math.random().toString(36).substring(2);
  const url = `https://www.tiktok.com/v2/auth/authorize/?client_key=${clientKey}&scope=${scope}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;
  return {
    statusCode: 302,
    headers: { Location: url }
  };
};
