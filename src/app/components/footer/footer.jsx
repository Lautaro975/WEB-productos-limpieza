import Arrayredes from "@/app/data/redesSociales/redesSociales";
import Link from "next/link";
import { redesurl } from "@/app/data/redesSociales/dataRedes";

function Footer() {
  const socialLinks = [
    { name: "Instagram", url: redesurl[1] },
    { name: "WhatsApp", url: redesurl[0] },
    { name: "TikTok", url: redesurl[2] },
  ];

  return (
    <footer className=" text-white flex flex-col justify-center items-center gap-8 pt-4">
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
