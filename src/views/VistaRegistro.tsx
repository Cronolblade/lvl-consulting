import { useNavigate } from "react-router-dom";
import ImagenFondo from "../assets/images/ImagenFondo.jpg";
import { InputFormulario } from "../components/auth/InputFormulario";
import { InputContrasena } from "../components/auth/InputContrasena";
import { BotonesSociales } from "../components/auth/BotonesSociales";
import { useState } from "react";

export function VistaRegistro() {
  const [correo, setCorreo] = useState("");
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");

  const navigate = useNavigate();

  const esCorreoValido = (correo: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  };

  const manejarRegistro = () => {
    if (!correo || !nombre || !contrasena) {
      alert("Por favor, llena todos los campos obligatorios.");
      return;
    }

    if (!esCorreoValido(correo)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    const nuevoUsuario = {
      correo,
      nombre,
      contrasena,
    };

    localStorage.setItem("usuarioLogueado", JSON.stringify(nuevoUsuario));
    alert("¡Usuario creado con éxito! Redirigiendo al Dashboard...");
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ImagenFondo})` }}
    >
      <div className="absolute inset-0 bg-[#222222]/50"></div>

      <div className="relative z-10 flex flex-col w-96 h-131.25 bg-white rounded-lg border border-[#E9E9EF] p-8 gap-5.5 shadow-2xl">
        <div className="flex flex-col w-full h-92.75 gap-6">
          <div className="flex flex-col w-full h-78.25 gap-3">
            <h2 className="w-54.75 h-4.5 mx-auto text-[#092083] font-inter font-semibold text-[14px] leading-4.5 text-center">
              Crear Cuenta
            </h2>

            <div className="flex flex-col w-full h-70.75 gap-4">
              <p className="w-full h-4.5 text-[#6D788B] font-inter font-normal text-[12px] leading-4.5 text-center">
                Únete a la comunidad de LVL Consulting
              </p>

              <div className="flex flex-col w-full h-62.25 gap-4">
                <div className="flex flex-col w-full h-49.5 gap-4.5">
                  <InputFormulario
                    label="Correo electrónico"
                    tipo="email"
                    placeholder="Introducir la dirección del correo electrónico"
                    esObligatorio={true}
                    valor={correo}
                    alCmabiar={(e) => setCorreo(e.target.value)}
                  />

                  <InputFormulario
                    label="Nombre del usuario"
                    tipo="text"
                    placeholder="Introducir nombre del usuario"
                    esObligatorio={true}
                    valor={nombre}
                    alCmabiar={(e) => setNombre(e.target.value)}
                  />

                  <InputContrasena
                    label="Contraseña"
                    placeholder="Introducir la contraseña"
                    valor={contrasena}
                    alCambiar={(e) => setContrasena(e.target.value)}
                  />
                </div>
                <p className="w-full h-8.75 text-[#6D788B] font-inter font-normal text-[12px] leading-4.5 text-left">
                  Al registrarte aceptas los{" "}
                  <a
                    href="#"
                    className="underline decoration-solid text-[#092083]"
                  >
                    Términos de uso de LVL Consulting
                  </a>
                </p>
              </div>
            </div>
          </div>

          <button
            className="flex items-center justify-center w-full h-8.5 gap-2.5 py-2 px-2.5 rounded-lg bg-[#092083] hover:opacity-90 transition-opacity"
            onClick={manejarRegistro}
          >
            <span className="w-26 h-4.5 text-white font-inter font-medium text-[12px] leading-4.5 text-center">
              Crear usuario
            </span>
          </button>
        </div>
        <div className="flex flex-col w-full h-17 gap-4 justify-end">
          <div className="flex items-center justify-center w-full h-4.5 gap-3.75">
            <div className="w-[94.5px] h-0 border-t border-[#6D788B]"></div>
            <span className="w-25 h-4.5 text-[#6D788B] font-inter font-normal text-[12px] leading-4.5 text-center">
              Crear cuenta con
            </span>
            <div className="w-[94.5px] h-0 border-t border-[#6D788B]"></div>
          </div>
          <BotonesSociales />
        </div>
      </div>
    </div>
  );
}
