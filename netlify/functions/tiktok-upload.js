exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");
    const token = body.access_token;
    if (!token) return { statusCode: 400, body: "Brak tokenu." };

    const init = await fetch("https://open.tiktokapis.com/v2/post/publish/video/init/", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        post_info: { title: "Mój filmik", privacy_level: "SELF_ONLY", disable_comment: false },
        source_info: { source: "FILE_UPLOAD", video_size: body.video_size, chunk_size: body.video_size, total_chunk_count: 1 }
      })
    });
    const initData = await init.json();
    return { statusCode: 200, body: JSON.stringify(initData) };
  } catch (e) {
    return { statusCode: 500, body: "Błąd: " + e.message };
  }
};
