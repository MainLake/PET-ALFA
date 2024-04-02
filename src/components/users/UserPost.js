import { useEffect, useState } from "react";

import { getPetsUser } from "../../api/users";
import { authUserStore } from "../../context/globalContext";

import { useNavigate } from "react-router";

const UserPost = () => {
  const [posts, setPosts] = useState([]);
  const { user, isAuthenticated } = authUserStore();

  const navigate = useNavigate();

  useEffect(() => {

    if(!isAuthenticated) {
      navigate('/Login');
      return;
    }

    const getDataPetsUser = async () => {
      const response = await getPetsUser(user.dataToken.token);

      if(response.error) {
        console.log(response.error);
        return;
      }

      console.log(response);

      setPosts([...response.data]);
      
    }
    getDataPetsUser();

  }, [isAuthenticated]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Mis mascotas perdidas</h1>
      <div className="row">
        {posts.map((post) => (
          <div
            key={post._id}
            className="col-xs-12 col-sm-6 col-md-12 col-lg-3 mb-4"
          >
            <div className="card">
              <img
                className="card-img-top"
                src={post.identify.image.url}
                alt={post.name}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">Nombre: {post.name}</h5>
                <p className="card-text">
                  <strong>Descripción:</strong> {post.details.description}
                </p>
                <p className="card-text">
                  <strong>Fecha de Publicación:</strong>{" "}
                  {new Date(post.publication.published).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                {/* <p className="card-text">
                  <strong>Última vez visto:</strong> {post.last_seen}
                </p> */}
                <p className="card-text">
                  <strong>Fecha de Pérdida:</strong>{" "}
                  {new Date(post.publication.lost_date).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p className="card-text">
                  <strong>Tamaño:</strong> {post.details.size}
                </p>
                <p className="card-text">
                  <strong>Especie:</strong> {post.details.specie}
                </p>
                <p className="card-text">
                  <strong>Raza:</strong> {post.details.breed}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPost;
