<div align="center"><img src="./assets/logo-white.gif" alt="chameleon log" width="500px" /></div>

# Sumário

- [Introdução](#introdução)
- [Detalhes da aplicação](#Detalhes-da-aplicação)
  - [Página Inicial](#página-inicial)
  - [Details](#details)
  - [Biography](#biography)
  - [Discography](#discography)
  - [Album Details](#album-details)
  - [Track](#track)
  - [Videos Music](#videos-music)
  - [Favorites](#favorites)
- [Tecnologias](#tecnologias)
- [APIs](#apis)
- [Testes](#testes)
- [Deploy](#deploy)

---

# Introdução

Chameleon é uma aplicação que onde permite que a pessoa usuária obtenha informações sobre suas bandas favoritas, procurando promover a experiência de estar em um ambiente feito especialmente para a banda pesquisada. Também possui a funcionalidade de salvar bandas, tracks e albums em favoritos, sendo armazenados no local storage, tornando o acesso prático sem a necessidade de cadastro e login.

---

# Detalhes da aplicação

## Página inicial

A página inicial possui uma barra de busca, onde a pessoa usuária insere o nome da banda, cantor ou cantora que deseja obter informações. Quando possui favoritos, um seletor com os logos correspondentes será renderizado logo abaixo da barra de busca.

<img src="./assets/initial-page.gif" alt="initial page">  <img src="./assets/initial-page-mobile.gif" alt="initial page mobile" width="168px">

Caso a pessoa usuária digite o nome da banda incorretamente ou o nome de uma banda que não está no banco de dados uma mensagem será renderizada na tela.

<img src="./assets/message-initial.gif" alt="initial page">  <img src="./assets/message-initial-mobile.gif" alt="initial page mobile" width="168px">

## Details
### Detalhes da banda ou artista

A página details apresenta alguns detalhes iniciais da banda:
- Ano de formação;
- Estilo;
- Gênero musical;
- Pais;
- Quantidade de membros.
Já oferecendo a opção de adicionar a banda em favoritos.

<img src="./assets/details.png" alt="initial page" width="725px">  <img src="./assets/details-mobile.gif" alt="initial page mobile" width="168px">

## Biography 
### Biografia da banda ou artista

Essa página exibe a biografia da banda ou artista, podendo estar disponível em vários idiomas, para selecionar um dos idiomas um seletor é renderizado com as opções. Como imagem de fundo da biografia, fotos da banda são renderizadas dinamicamente em intervalos de 3 segundos.

<img src="./assets/biography.gif" alt="initial page">  <img src="./assets/biography-mobile.gif" alt="initial page mobile" width="168px">

## Discography 
### Discografia da banda ou artista

Exibe os álbuns da banda ou artista ordenado pelo ano de lançamento, podendo ser filtrados pelo titulo, ao clicar em um dos álbuns, a pessoa usuária será redirecionada para a página de detalhes desse album.

<img src="./assets/discography.gif" alt="initial page">  <img src="./assets/discography-mobile.gif" alt="initial page mobile" width="168px">

## Album Details 
### Destalhes do album selecionado

Após a pessoa usuária escolher um album, será redirecionada para a página com detalhes desse album, contendo a historia do album, podendo estar disponível em vários idiomas, contendo um seletor para a escolha. Também é exibido as tracks desse album, podendo ser filtradas pelo nome, ao clicar em uma track, a pessoa usuária será redirecionada para a página dessa track.

<img src="./assets/album-details.gif" alt="initial page">  <img src="./assets/album-details-mobile.gif" alt="initial page mobile" width="168px">


## Track
### Letra da musica escolhido junto ao vídeo quando disponível

Ao clicar em um track a pessoa usuária é redirecionada para uma página com a letra e o vídeo quando disponível, o vídeo por padrão acompanhara o scroll, porém a pessoa usuária tem a opção de deixá-lo na parte superior da página ou até mesmo fecha-lo através de butões na parte inferior do vídeo.

<img src="./assets/track.gif" alt="initial page">  <img src="./assets/track-mobile.gif" alt="initial page mobile" width="168px">

## Videos Music  

Exibe uma lista de todas as tracks que possuem vídeos, podendo ser filtradas, ao clicar em uma track, a pessoa usuária será direcionada para a página Track

<img src="./assets/video-music.gif" alt="initial page">  <img src="./assets/video-music-mobile.gif" alt="initial page mobile" width="168px">

## Favorites

Exibe as tracks e álbuns salvos em favoritos, sendo que ao ser clicado é redirecionado para a página album details ou a página track, podendo também ser filtrado a partir de seus títulos.

<img src="./assets/favorites.gif" alt="initial page">  <img src="./assets/favorites-mobile.gif" alt="initial page mobile" width="168px">


# Tecnologias


