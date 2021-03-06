import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useProducts from "../../Hooks/useProducts/useProducts";
import ManageNewProducts from "../ManageNewProducts/ManageNewProducts";
import "../ManageProducts/ManageProducts.css";

const ManageProducts = () => {
  const [products, setProducts] = useProducts();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      console.log("deleted", id);
      const url = `https://thawing-hamlet-83781.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = products.filter((product) => products._id !== id);
            setProducts(remaining);
          }
        });
    }
    window.location.reload();
  };

  const navigateToAddItem = () => {
    navigate("/dashboard/addProduct");
  };

  if (!user) {
    navigate("/login");
  }

  return (
    <div>
      <div className="table-container my-5">
        <div className="mt-15">
          <h2 className="text-center text-xl font-semibold">FEATURED</h2>
          <h2 className="text-center text-3xl font-bold mb-2">PRODUCTS</h2>
          <hr />
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Min-Order</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="data-row">
                <td>
                  {" "}
                  <img className="w-20 rounded-lg" src={p.img} alt="" />
                </td>
                <td>{p.name}</td>
                <td>${p.price}</td>
                <td>{p.availableQuantity}</td>
                <td>{p.minimumOrder}</td>
                <td>
                  <div>
                    <button style={{ backgroundColor: "#36AE7C" }} className="btn border-0" onClick={() => handleDelete(p._id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Manage New Product */}
      <div>
        <ManageNewProducts />
      </div>
      {/* Add new Product Button */}
      <div className="text-center my-10">
        <button onClick={navigateToAddItem} style={{ backgroundColor: "#36AE7C" }} className="add-item-btn btn border-0">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default ManageProducts;
