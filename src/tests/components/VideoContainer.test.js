import { screen } from '@testing-library/react';
import React from 'react';
import VideoContainer from '../../components/VIdeoContainer';
import embedVideo from '../../functions/embedVideo';
import { DEFAULT_STATE } from '../../redux/reducers';
import renderWithReduxAndRouter from '../helpers/renderWithReduxAndRouter';
import METALLICA_VIDEOS from '../mocks/data/VIDEOS';

const { mvids } = METALLICA_VIDEOS;
const [music] = mvids;
const { strTrack } = music;
const expectEmbedVideo = embedVideo(music);
const STATE = { ...DEFAULT_STATE, artistCurrent: 'metallica', musicVideos: mvids };

describe('verifica a renderização e o funcionamento do componete VideoContainer', () => {
  it('verifica ao ser passado uma trackName o video é renderizado', () => {
    renderWithReduxAndRouter(<VideoContainer trackName={strTrack} />, STATE);

    const video = screen.getByTestId('video-music');
    expect(video).toBeInTheDocument();

    expect(video).toHaveProperty('src', expectEmbedVideo);
  });

  it('ao ser passado o nome de uma track sem video o mesmo retorna null', () => {
    renderWithReduxAndRouter(<VideoContainer trackName="sem video" />, STATE);

    expect(screen.queryByTestId('video-music')).toBeNull();
  });
});
