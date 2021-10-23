const fetchApiText = async (url) => {
  const objResp = await fetch(url);
  if (!objResp.ok) return { error: true };
  const resp = await objResp.text();
  return JSON.parse(resp);
};

export default fetchApiText;
