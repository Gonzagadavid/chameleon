const embedVideo = (music) => music && music.strMusicVid.replace(/watch\?v=/g, 'embed/').replace('http', 'https');

export default embedVideo;
