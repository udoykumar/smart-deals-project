import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CreateProduct = () => {
  const { user } = useAuth();
  // const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();
  const handleCreateProduct = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const price_min = e.target.price_min.value;
    const price_max = e.target.price_max.value;
    console.log({ title, image, price_min, price_max });
    const newProduct = {
      title,
      image,
      price_min,
      price_max,
      seller_name: user.displayName,
      email: user.email,
      seller_image: user.photoURL,
      created_at: new Date().toISOString(),
    };

    axiosSecure.post("/products", newProduct).then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your product has been created",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });

    // axios.post("http://localhost:5000/products", newProduct).then((data) => {
    //   console.log(data.data);
    //   if (data.data.insertedId) {
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: "Your product has been created",
    //       showConfirmButton: false,
    //       timer: 2000,
    //     });
    //   }
    // });
    e.target.reset();
  };
  return (
    <div className="lg:w-1/2 mx-auto">
      <form onSubmit={handleCreateProduct}>
        <fieldset className="fieldset">
          {/* name  */}
          <label className="label">Name</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Product Name"
          />
          {/* image url  */}
          <label className="label">Image Url</label>
          <input
            type="text"
            name="image"
            className="input"
            placeholder="Image Url"
          />
          {/* min price  */}
          <label className="label">Min price</label>
          <input
            type="text"
            name="price_min"
            className="input"
            placeholder="Minimum Price"
          />
          {/* max price  */}
          <label className="label">Max Price</label>
          <input
            type="text"
            name="price_max"
            className="input outline-none"
            placeholder="Max price"
          />

          <button className="btn btn-primary mt-4 w-1/2">Add Product</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateProduct;
