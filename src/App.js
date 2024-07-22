import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Section from "./components/Section";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    url: "https://www.twitch.tv/directory/game/thesims",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/369252_IGDB-90x120.jpg",
    alt: "Imagem do jogo The sims",
  },
  {
    url: "https://www.twitch.tv/directory/game/Stardew%20Valley",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/490744_IGDB-144x192.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  {
    url: "https://www.twitch.tv/directory/category/dont-starve-together",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/488634_IGDB-144x192.jpg",
    alt: "Imagem do jogo TFT",
  },
]

const ChannelsListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem do streamer maykbrito",
  },
  {
    url: "https://www.twitch.tv/gratis150ml",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/774dcf07-a145-4fdf-8f5d-2e2f24a7cb0f-profile_image-70x70.png",
    alt: "Imagem do streamer gratis150ml",
  },
  {
    url: "https://www.twitch.tv/loud_voltan",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/18586730-d555-44f3-9173-d623c09c9f0a-profile_image-70x70.png",
    alt: "Imagem do streamer loud_voltan",
  },
]

const socialListData = [
  {
    url: "https://www.linkedin.con/in/laysadiniz",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    alt: "Logo do Linkedin",
  },
  {
    url: "https://www.instagram.com/santosdlaysa",
    imageUrl: "https://img.freepik.com/vetores-gratis/instagram-icone-novo_1057-2227.jpg?size=626&ext=jpg",
    alt: "Logo do Instagram",
  },

  {
    url: "https://www.github.com/santosdlaysa",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/733/733609.png",
    alt: "Logo do Github",
  }
]


function App() {
  return (
    <div>
      <Header />
      <main>
        <Section 
        title="Meu Jogos"
        subtitle="Os games que eu mais curto jogar!" 
        className="games-list"
        >
          {
            gamesListData.map((item) => (
              <ListItem 
              url={item.url}
              imageUrl={item.imageUrl}
              alt={item.alt}
              />
            ))
        }
        </Section>

        <Section 
        title="Canais e Streamers"
        subtitle="Listas de canais e transmissões que mais curto"
        className="channel-list"
        >
          {
            ChannelsListData.map((item) => (
              <ListItem 
              url={item.url}
              imageUrl={item.imageUrl}
              alt={item.alt}
              />
            ))
          }
        </Section>
        <Section 
        title="Minhas Redes"
        subtitle="Se conecte comigo agora mesmo!"
        className="social-list">
        {
            socialListData.map((item) => (
              <ListItem 
              url={item.url}
              imageUrl={item.imageUrl}
              alt={item.alt}
              />
            ))
        }
        </Section>

      </main>
    </div>
  );
}

export default App;
