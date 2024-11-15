import "./style/style.css"
import Nav from "./components/navbar"

function Home() {
  return (
    <div className="homepage">
      <Nav />
       <h1 className="heading"> Homepage </h1>
       <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique tempore, assumenda vitae magnam voluptatem maiores perferendis praesentium
        , temporibus excepturi pariatur vero perspiciatis porro ipsa neque laborum quibusdam mollitia? Velit?</p>
    </div>
  )
} export default Home