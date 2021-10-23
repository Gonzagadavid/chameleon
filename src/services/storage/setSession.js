const setSession = (key, content) => sessionStorage.setItem(key, JSON.stringify(content));

export default setSession;
