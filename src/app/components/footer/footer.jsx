import Arrayredes from "@/app/data/redesSociales";
import Link from "next/link";

function Footer() {
  const instagramUser = "wf_detail";
  const instagramUrl = `https://www.instagram.com/${instagramUser}/`;

  const phoneNumber = "542235370292"; // Reemplaza con el número de WhatsApp
  const message = encodeURIComponent(
    "Hola, estoy interesado en sus productos."
  ); // Mensaje opcional
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const tiktokuser = "wf_detail";
  const tiktokmUrl = `https://www.tiktok.com/@${tiktokuser}/`;

  const socialLinks = [
    { name: "Instagram", url: instagramUrl },
    { name: "WhatsApp", url: whatsappUrl },
    { name: "TikTok", url: tiktokmUrl },
  ];

  return (
    <footer className=" text-white flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center gap-3">
        <h3 className=" font-sans font-bold">Seguinos</h3>
        <div className="flex  gap-4">
          {Arrayredes.map((url, index) => {
            return (
              <Link
                key={index}
                href={socialLinks[index]?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img loading="lazy" src={url} className="w-8 h-8" />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="h-8">
        © [{new Date().getFullYear()}] [WF-Detail]. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}

export default Footer;
