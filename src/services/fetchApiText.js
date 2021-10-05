const fetchApiText = async (url) => {
  const objResp = await fetch(url);
  if (!objResp.ok) return { error: true };
  const resp = await objResp.text();
  console.log(resp);
  return JSON.parse(resp);
};

export default fetchApiText;
