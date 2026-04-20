import Google from "../../assets/svg/registro/google.svg";
import Facebook from "../../assets/svg/registro/facebook.svg";
import Adobe from "../../assets/svg/registro/adobe.svg";

export function BotonesSociales() {
  return (
    <div className="flex w-33.5 h-8.5 gap-4 mx-auto">
      <button className="w-8.5 h-8.5 rounded-lg bg-[#F2F2F2] flex items-center justify-center hover:opacity-80 transition-opacity">
        <img src={Google} alt="Iniciar sesión con Google" className="w-4 h-4" />
      </button>

      <button className="w-8.5 h-8.5 rounded-lg bg-[#3C5A9A] flex items-center justify-center hover:opacity-90 transition-opacity">
        <img
          src={Facebook}
          alt="Iniciar sesión con Facebook"
          className="w-4 h-4"
        />
      </button>

      <button className="w-8.5 h-8.5 rounded-lg bg-[#FF5F2D] flex items-center justify-center hover:opacity-90 transition-opacity">
        <img
          src={Adobe}
          alt="Iniciar sesión con otra red"
          className="w-6.25 h-6.25"
        />
      </button>
    </div>
  );
}
