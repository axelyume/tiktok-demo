exports.handler = async (event) => {
  const code = event.queryStringParameters?.code;
  if (!code) {
    return { statusCode: 302, headers: { Location: "/callback.html?error=1" } };
  }
  const params = new URLSearchParams();
  params.append("client_key", process.env.TIKTOK_CLIENT_KEY);
  params.append("client_secret", process.env.TIKTOK_CLIENT_SECRET);
  params.append("code", code);
  params.append("grant_type", "authorization_code");
  params.append("redirect_uri", "https://tiktok-demoye.netlify.app/callback.html");
  const res = await fetch("https://open.tiktokapis.com/v2/oauth/token/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params
  });
  const data = await res.json();
  const token = data?.data?.access_token || "";
  return {
    statusCode: 302,
    headers: { Location: `/callback.html?access_token=${encodeURIComponent(token)}` }
  };
};
