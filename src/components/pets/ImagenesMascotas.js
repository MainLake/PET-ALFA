import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import Cropper from 'react-easy-crop'
import CarreteImagenes from "./CarreteImagenes";

import getCroppedImg from "../../utilities/cropimage"

const ImagenesMascotas = ({setGallery, gallery}) => {
    const [files, setFiles] = useState([]);
    const [image, setImage] = useState(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }

    const getCropImage = async () => {
        console.log(croppedAreaPixels);
        try {
            const croppedImage = await getCroppedImg(
                image,
                croppedAreaPixels,
                0
            )
            const blob = await fetch(croppedImage).then(r => r.blob());
            blob.name = Math.random().toString(36).substring(7) + '.jpg';
            setGallery( dataPrev => [...dataPrev, {
                preview: URL.createObjectURL(blob),
                file: blob
            }]);
            // setFiles([...files, {
            //     preview: URL.createObjectURL(blob),
            //     file: blob
            // }]);
            setImage(null);
            // setGallery( dataPrev => [...dataPrev, blob] );
        } catch (e) {
            console.log(e);
        }
    }

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
        const url = URL.createObjectURL(acceptedFiles[0]);
        setImage(url);
    }, []);

    const handleDeleteImage = (index) => {
        const newFiles = gallery.filter((file, i) => i !== index);
        setGallery(newFiles);
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    {
                        gallery.length <= 4 ? (
                            <div {...getRootProps()} className={`dropzone border rounded-lg p-5 text-center ${isDragActive ? 'bg-primary text-white' : 'bg-light'}`}>
                                <input {...getInputProps()} />
                                <div className="">
                                        <p className="m-0">Arrastra y suelta archivos aquí, o haz clic para seleccionar archivos</p>
                                </div>
                            </div>
                        ) : (
                            <div className="alert alert-warning" role="alert">
                                No puedes subir más de 5 imágenes
                            </div>
                        )
                    }
                    <CarreteImagenes imagenes={gallery} handleDeleteImage={handleDeleteImage} />
                </div>
                <div className="col-md-6">
                    {image && (
                        <div className="container border border-2 rounded">
                            <h3 className="mb-4">Recortar Imagen</h3>
                            <div className="cropContainer">
                                <Cropper
                                    image={image}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={4 / 3}
                                    onCropChange={setCrop}
                                    onCropComplete={onCropComplete}
                                    onZoomChange={setZoom}
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3 mb-2">
                                <button className="btn btn-primary" type="button" onClick={getCropImage}>
                                    Agregar
                                </button>
                                <button className="btn btn-secondary" type="button" onClick={() => setImage(null)}>
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImagenesMascotas;
