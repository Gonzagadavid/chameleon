import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    expect(video).toHaveProperty('src', `${expectEmbedVideo}?modestbranding=1&control=1`);
  });

  it('ao ser passado o nome de uma track sem video o mesmo retorna null', () => {
    renderWithReduxAndRouter(<VideoContainer trackName="sem video" />, STATE);

    expect(screen.queryByTestId('video-music')).toBeNull();
  });

  it('verifica o funcionamento dos botões do video', async () => {
    renderWithReduxAndRouter(<VideoContainer trackName={strTrack} />, STATE);

    const closeVideo = screen.getByTestId('close-video');
    const videoContainer = screen.getByTestId('video-container');
    const stikyVideo = screen.getByTestId('sticky-video');

    expect(closeVideo).toBeInTheDocument();
    expect(stikyVideo).toBeInTheDocument();
    expect(videoContainer).toBeInTheDocument();

    expect(videoContainer.className).toBe('Video sticky');

    userEvent.click(stikyVideo);
    expect(videoContainer.className).toBe('Video ');

    userEvent.click(stikyVideo);
    expect(videoContainer.className).toBe('Video sticky');

    userEvent.click(closeVideo);
    expect(videoContainer).not.toBeInTheDocument();
  });
});
