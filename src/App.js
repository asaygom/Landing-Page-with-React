import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Carousel.jsx";
import Card from "./components/Card.jsx"
import Featurette from "./components/Featurette.jsx";
import Footer from "./components/Footer.jsx";

const services = [{id:1,name:"Pack Reductivo",description:"Cavitación, Lipolaser, Vacumterapia, Drenaje Linfático, Maderoterapia",img:"https://z-p3-scontent.fscl29-1.fna.fbcdn.net/v/t39.30808-6/323123429_561928335417229_8473490656178974830_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF3GGc24xHgdUtab1oH1uQyZGvrVSeVDm5ka-tVJ5UObq_noahN9T2EOBU-tPTWDx8&_nc_ohc=v19ke1wez6sAX96ctjp&_nc_zt=23&_nc_ht=z-p3-scontent.fscl29-1.fna&oh=00_AfDkPDlCE69Y6pqtLCvjFwDzog68mJCDw167YRtw4ZdI_w&oe=6481CCD1"},
{id:2,name:"Pack Reafirmante",description:"Radiofrecuencia, Ondas Rusas, Lipolaser, Drenaje Linfático, Maderoterapia, Metalotarapia",img:"https://z-p3-scontent.fscl29-1.fna.fbcdn.net/v/t39.30808-6/321884970_825175408923042_3946956324507041095_n.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGQP4Vp7YYo5GgeWlas6tHvWJC15nW5kKRYkLXmdbmQpBFsOScigfB2lp6onATSgKc&_nc_ohc=i-YaFsnj28QAX9Fa_zs&_nc_zt=23&_nc_ht=z-p3-scontent.fscl29-1.fna&oh=00_AfBq-NkLmGdiI5oiNOOxA7kDgIXB7u-tX49y-ZK0wAyUgw&oe=6481F84B"},
{id:3,name:"Pack Anticelulítico",description:"Lipolaser, Cavitación, Ondas Rusas, Radiofrecuencia, Maderoterapia, Drenaje Linfático",img:"https://z-p3-scontent.fscl29-1.fna.fbcdn.net/v/t39.30808-6/325445293_474066038257054_5677950352525928646_n.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGKA-m8oGETH6JC3pEfkMuU6rjR3qDUv4bquNHeoNS_hgEBB9IdyCRLdw-pE-AnSRc&_nc_ohc=T-bUI5O_3jwAX9M7aFo&_nc_zt=23&_nc_ht=z-p3-scontent.fscl29-1.fna&oh=00_AfCHS3sQj87k10naW-doocsbry6vfVLdQy0Vib82vxgu1g&oe=648219AB"}]

const articles = [{id:1,name:"Beneficios del lipolaser",description:`El lipolaser es el mejor aliado en el tratamiento corporal ✨
Se puede moldear el cuerpo sin cirugías? 
Combatir la flacidez?
Reducir centímetros? 
Si, claro que se puede💁🏻‍♀️
Ven y disfruta de éstos beneficios y más`,img:"https://z-p3-scontent.fscl29-1.fna.fbcdn.net/v/t39.30808-6/350943987_240647612032693_7683887697896211638_n.jpg?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH3ezR3H4CkUbYLobsw4AUUn7cAAz5U4gGftwADPlTiAX0O4O0EOFY42FZeptT_9Bk&_nc_ohc=84PFR8jH65cAX8SbdMm&_nc_zt=23&_nc_ht=z-p3-scontent.fscl29-1.fna&oh=00_AfA_YGO2yNugKHXSTDy_GBGBTEA6-VGvBH_jN5b0JD1Ggg&oe=64818130"},
  {id:2,name:"Beneficios de la radiofrecuencia facial",description:`Notas tu cutis apagado? 
  Sin vitalidad?
  Deseas rejuvenecer la piel de tu rostro? 
  Pregunta por el tratamiento facial, son varias sesiones para darle cariño a tu rostro y cuello con un método no invasivo✨
  Dale brillo a tu rostro y renuevate cada vez más`,img:"https://z-p3-scontent.fscl29-1.fna.fbcdn.net/v/t39.30808-6/333150764_686307836570707_7688785810730353003_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGCaL6YOiKSDCW8-bjZZl7_LzZCKEmJs_8vNkIoSYmz_9EWp-dqwhGLRzD-a8DwWOQ&_nc_ohc=mR9zMFylZ7cAX8IF_hi&_nc_zt=23&_nc_ht=z-p3-scontent.fscl29-1.fna&oh=00_AfDFqBPMtMOlH9mFL9xYLKsGvPs-8INnwJb1QKqqQ4BROQ&oe=648251A8"},
  {id:3,name:"Beneficios de la maderoterapia",description:`Quieres moldear tu cuerpo?
  Eliminar toxinas, tratar la retención de líquidos, adiposidad localizada, combatir la celulitis?
  La maderoterapia es la técnica del momento, es la técnica para ti✨
  Es un tratamiento integral para distintas zonas del cuerpo
  Y además de sus grandes beneficios estéticos, también puedes disminuir el nivel de estrés, equilibrar las energías del cuerpo, ayudar al sistema nervioso, estimular la producción de colágeno y elastina y mucho más....
  Y tu? Te atreves a probar la técnica más solicitada?💁🏻‍♀️
  Recuerda que la Evaluación es gratuita 🤩`,img:"https://z-p3-scontent.fscl29-1.fna.fbcdn.net/v/t39.30808-6/325738742_1255754941954916_468602773711056562_n.jpg?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFY1Xc4B8gQD9lGlpY5NQJDGJNZQwDcij0Yk1lDANyKPWRRg6BAzpBsFt-wc7Z6MvI&_nc_ohc=73dMZqLse_UAX-wySP2&_nc_zt=23&_nc_ht=z-p3-scontent.fscl29-1.fna&oh=00_AfBSFMLMeaZkUWXuaEOkjy2o8056FDP2s7P9qFWaHm2HJQ&oe=64814DFB"}]

function App() {
  return (
    <div>
			<Navbar />
			<Carousel />
      <div className="container text-center">
        <div id="Services" className="row">
        {services.map((item)=>{
          return <Card key={item.id} cardTitle={item.name} cardDescription={item.description} cardImg={item.img}/>
        })}
        </div>
        <div id="Articles" >
          {articles.map((item,index)=>{
            if(index%2 == 0){return (<div key={item.id}><hr className="featurette-divider"></hr> <Featurette key={item.id} cardTitle={item.name} cardDescription={item.description} cardImg={item.img} cardPosition="col-md-7 order-md-2" cardPosition2="col-md-5 order-md-1"/></div>)}
            else{return (<div key={item.id}><hr className="featurette-divider"></hr> <Featurette key={item.id} cardTitle={item.name} cardDescription={item.description} cardImg={item.img} cardPosition="col-md-7" cardPosition2="col-md-5"/></div>)}
          })}
          <hr className="featurette-divider"></hr>
        </div>
      </div>
      <Footer />
		</div>
  );
}

export default App;
