import { useState } from "react";

import { authUserStore } from "../../context/globalContext";
import { addComment } from "../../api/pets";

import { CSpinner } from "@coreui/react";

const CommentsPet = ({ comments, idPet, setComments }) => {

    console.log(comments)

    const { user, isAuthenticated } = authUserStore();
    const [comment, setComment] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [mensaje, setMensaje] = useState("")

    const onClickAddComment = async () => {
        setLoading(true);
        const token = user.dataToken.token;
        if (comment.trim() === "") {
            setError("El comentario es necesario");
            setTimeout(() => {
                setError("");
            }, 3000);
            return;
        }

        const response = await addComment(idPet, comment, token);
        console.log("Respuesta mensaje: ", response)

        if (response.error) {
            setError(response.error);
            setTimeout(() => {
                setError("");
            }, 3000);
            setLoading(false);
            return;
        }
        setMensaje("Comentario agregado con éxito");
        setTimeout(() => {
            setMensaje("");
        }, 3000);
        setComment("");
        setLoading(false);
    }

    return (
        <div className="container my-5">
            <div>
                <h3 className="mb-4 text-center">Comentarios de la mascota perdida</h3>

                <div className="text-center">
                    {error && <div className="alert alert-danger">{error}</div>}
                    {mensaje && <div className="alert alert-success">{mensaje}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="commentInput" className="form-label">Agregar comentario</label>
                    <textarea
                        id="commentInput"
                        value={comment}
                        className="form-control"
                        onChange={evt => setComment(evt.target.value)}
                        placeholder="Escribe tu comentario aquí..."
                        rows={4}
                    ></textarea>
                    {isAuthenticated ? (
                        <div className="text-center mt-2">
                            <button onClick={onClickAddComment} className="btn btn-primary">
                                {
                                    !loading ? (
                                        "Agregar comentario"
                                    ) :
                                    (
                                        <CSpinner color="primary" />
                                    )
                                }
                            </button>
                        </div>
                    ) : (
                        <div className="text-center mt-2">
                            <p>Para agregar un comentario, por favor inicia sesión.</p>
                            <button className="btn btn-primary" disabled>Iniciar sesión</button>
                        </div>
                    )}
                </div>

                <div>
                    <h4>Comentarios</h4>
                    <ul className="list-group">
                        {comments.length === 0 ? (
                            <li className="list-group-item">No hay comentarios</li>
                        ) : (
                            comments.map((comment, index) => (
                                <li key={index} className="list-group-item">
                                    <div>
                                        <h5 className="mb-1"><span className="text-primary">Comentario:</span> {comment.title}</h5>
                                        <p className="mb-1 text-muted">Usuario: {comment.user.name}</p>
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>



    );
}

export default CommentsPet;