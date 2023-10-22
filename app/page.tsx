import { CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils/indexx";

export default async function Home() {
  const allCars = await fetchCars()
  return (
    <main className='overflow-hidden'>
      <Hero />
      <div id="discover"
        className="mt-12 padding-x paddig-y max-width"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore the car you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Fuel" />
            <CustomFilter title="Year" />
          </div>
        </div>
      </div>
    </main>
  )
}
