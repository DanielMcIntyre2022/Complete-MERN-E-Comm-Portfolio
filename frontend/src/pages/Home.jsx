import Products from "../components/Products";

function Home() {
  return (
    <div className="products-container mt-5 w-90% mx-auto ">
      <h1>Latest Products</h1>
      <Products/>
    </div>
  )
}

export default Home;