import Carousel from '../../components/carousel/Carousel'
import Hero_items from '../../components/hero_items/Hero_items'
import Brands from '../../components/brands/Brands'
import Electronics from '../../components/electronics/Electronics'
import Frequently from '../../components/frequently/Frequently'
import Categories from '../../components/categories/Categories'
import Sale from '../../components/sale/Sale'
const Home = () => {
  return (
    <div>
      <Carousel/>
      <Hero_items/>
      <Brands/>
      <Sale/>
      <Categories/>
      <Electronics/>
      <Frequently/>
    </div>
  )
}

export default Home
