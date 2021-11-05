const fetchApi = async (url) => {
  const objResp = await fetch(url);
  if (!objResp.ok) return { error: true };
  const resp = await objResp.json();
  return resp;
};

export default fetchApi;
