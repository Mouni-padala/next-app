
import Genetic from '../dashboard/page';
const marketingProductsData = [
  { "timestamp": "2023-01-01T00:00:00Z", "new": 5, "completed": 3, "canceled": 1 },
  { "timestamp": "2023-02-01T00:00:00Z", "new": 7, "completed": 4, "canceled": 2 },
  { "timestamp": "2023-03-01T00:00:00Z", "new": 10, "completed": 6, "canceled": 3 },
  { "timestamp": "2023-04-01T00:00:00Z", "new": 8, "completed": 5, "canceled": 2 },
  { "timestamp": "2023-05-01T00:00:00Z", "new": 12, "completed": 9, "canceled": 3 },
  { "timestamp": "2023-06-01T00:00:00Z", "new": 6, "completed": 4, "canceled": 1 }
];
export default function Graph() {
  return (
    <div>
 <div><h1>Marketing Products Line Graph</h1>
      <Genetic data={marketingProductsData} /></div>
 </div>
  )
}

