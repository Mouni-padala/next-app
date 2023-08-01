import Image from 'next/image'
import Img from '../public/imag1.PNG';
import Img2 from '../public/imag2.PNG';
import Img3 from '../public/imag3.PNG';
import Img4 from '../public/imag4.PNG';
import Genetic from './components/dashboard/page';
// const marketingProductsData = [
//   { "timestamp": "2023-01-01T00:00:00Z", "new": 5, "completed": 3, "canceled": 1 },
//   { "timestamp": "2023-02-01T00:00:00Z", "new": 7, "completed": 4, "canceled": 2 },
//   { "timestamp": "2023-03-01T00:00:00Z", "new": 10, "completed": 6, "canceled": 3 },
//   { "timestamp": "2023-04-01T00:00:00Z", "new": 8, "completed": 5, "canceled": 2 },
//   { "timestamp": "2023-05-01T00:00:00Z", "new": 12, "completed": 9, "canceled": 3 },
//   { "timestamp": "2023-06-01T00:00:00Z", "new": 6, "completed": 4, "canceled": 1 }
// ];
export default function Home() {
  return (
    <div>
 <div>
  <Image className="img-tag" src={Img} alt="message" />
  <Image className="img-tag2" src={Img2} alt="check-ins" />
  <Image className="img-tag3" src={Img3} alt="files" />
  <Image className="img-tag4" src={Img4} alt="users" />
 </div>
 <Genetic/>
 {/* <div><h1>Marketing Products Line Graph</h1>
      <Genetic data={marketingProductsData} /></div> */}
 </div>
  )
}

