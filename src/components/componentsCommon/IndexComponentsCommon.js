import { useState } from "react";
import Button from "./Button";

const IndexComponentsCommon = () => {
    const [activate, setaActivate] = useState(false)

    return (
        <div className="mx-auto px-4 sm:px-6 md:px-8 max-w-screen-xl bg-gray-100 flex justify-center items-center flex-col">
            <h1>Banco de pruebas para componentes "{activate ? "true" : "false"}" </h1>
            <button onClick={evt => setaActivate(!activate)}>
                Click me
            </button>
            <Button text="Registrar" loading={activate}/>
        </div>
    );
}

export default IndexComponentsCommon;