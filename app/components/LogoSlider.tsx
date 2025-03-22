import Image from "next/image";

const images = [
  "/images/logo/ABDUL LATIF JAMEEL HOSPITAL.png",
  "/images/logo/16022348465380.png",
  "/images/logo/Al metals.jpg",
  "/images/logo/AJEX LOGISTIC SERVICES.png",
  "/images/logo/AJLAN & BROTHERS.jpg",
  "/images/logo/AL FANAR COMPANY.png",
  "/images/logo/AL GHANDI AUTO.png",
  "/images/logo/AL HARAMAIN MEDICAL COMPLEX.jpg",
  "/images/logo/AL HATAB BAKERY.png",
  "/images/logo/Al Majdouie.png",
  '/images/logo/Anjum.jpg', 
  '/images/logo/ARABIAN INTERNATIONAL COMPANY.jfif', 
  '/images/logo/Arabian Metal Industries.JPG', 
  '/images/logo/avjzz8axdsrdvrubf4hq.webp', 
  '/images/logo/Aztracon.jpg', 
  '/images/logo/Badan Agricultural.jpg', 
  '/images/logo/bindajim_co_logo.jfif', 
  '/images/logo/Carrier.png', 
  '/images/logo/CGC.KW_BIG.png', 
  '/images/logo/changan.JPG', 
  '/images/logo/chrysler.png', 
  '/images/logo/Daewoo_E&C_CI_(eng).svg.png', 
  '/images/logo/Dammam Pharma.png', 
  '/images/logo/download (3).jpeg', 
  '/images/logo/Dr. Bassam Al-Hemsi Medical Cebte.png', 
  '/images/logo/Dutest Qatar.JPG', 
  '/images/logo/eram engineering.jpg',
  '/images/logo/GS.png', 
  '/images/logo/honda.webp', 
  '/images/logo/Hyundai_Heavy_Industries-Logo.wine.svg', 
  '/images/logo/jamal jaroudi.jpg', 
  '/images/logo/Juffali.jpg',
  '/images/logo/Lexus.png', 
  '/images/logo/liebherr.JPG', 
  '/images/logo/logo with logistic en.jpg', 
  '/images/logo/Madarek.jpeg', 
  '/images/logo/MAYYAR UNITED Support Services.png', 
  '/images/logo/MercedesBenz.jpg',
  '/images/logo/Mesc.png',
  '/images/logo/Movenpick-new-logo-916x515.jpg',
  '/images/logo/Mtex.png',
  '/images/logo/Naqua_logo.png',
  '/images/logo/Pannon Work.jpg',
  '/images/logo/pngegg.png',
  '/images/logo/pngwing.com.png',
  '/images/logo/Prodar.JPG',
  '/images/logo/Pure Beverage co.jfif',
  '/images/logo/Pwc.png',
  '/images/logo/Qassim_University_logo.svg.png',
  '/images/logo/Sakura.png',
  '/images/logo/samsung.png',
  '/images/logo/Saudi Master Baker.JPG',
  '/images/logo/Saudi Paper Group.jpg',
  '/images/logo/saudibio-logo-201x90@2x.png',
  '/images/logo/Savage-Logo.jpg',
  '/images/logo/Schneider-Electric-logo-jpg-.png',
  '/images/logo/Siemens-logo-500x281.png',
  '/images/logo/Spimaco Addwaeih.jfif',
  '/images/logo/Técnicas_Reunidas-Logo.wine.svg',
  '/images/logo/tenas.jpg',
  '/images/logo/Teyseer Motors WLL.jpg',
  '/images/logo/Tulip Inn.png',
  '/images/logo/United Motors Group.png',
  '/images/logo/URE Industrial.jpg',
  '/images/logo/Venus.png',
  '/images/logo/Westin.png',
  '/images/logo/WPPCO.png',
];


export default function LogoSlider() {

  return (
<div className="w-full overflow-hidden py-10">
  <div className="logos-slide flex gap-5 w-max whitespace-nowrap animate-slide">
    {[...images, ...images].map((image, i) => (
      <Image
        width={150}
        height={100}
        key={i}
        src={image}
        alt={`Image ${i}`}
        className="h-20 shrink-0"
      />
    ))}
  </div>
</div>


  );
}
