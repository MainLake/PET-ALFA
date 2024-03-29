import React, { useEffect, useState } from "react";

const UserPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

  }, []);

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
                src={post.image.url}
                alt={post.name}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">Nombre: {post.name}</h5>
                <p className="card-text">
                  <strong>Descripción:</strong> {post.description}
                </p>
                <p className="card-text">
                  <strong>Fecha de Publicación:</strong>{" "}
                  {new Date(post.date).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p className="card-text">
                  <strong>Última vez visto:</strong> {post.last_seen}
                </p>
                <p className="card-text">
                  <strong>Fecha de Pérdida:</strong>{" "}
                  {new Date(post.lost_date).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p className="card-text">
                  <strong>Tamaño:</strong> {post.size}
                </p>
                <p className="card-text">
                  <strong>Especie:</strong> {post.specie}
                </p>
                <p className="card-text">
                  <strong>Raza:</strong> {post.breed}
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
