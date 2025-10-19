'use client';
import Image from 'next/image';

const logos = [
  {
    id: 1,
    src: '/logos/Gateway park - AM Logo.jpeg',
    alt: 'AM Architects',
  },
  {
    id: 2,
    src: '/logos/PBK Logo (002).jpeg',
    alt: 'PBK Architects',
  },
  {
    id: 3,
    src: '/logos/4C-HorizLogo-Black.png',
    alt: '4Creeks Architects',
  },
  {
    id: 4,
    src: '/logos/AParchitects-6x6.jpg',
    alt: 'AP Architects',
  },
  {
    id: 5,
    src: '/logos/Chas-Rhoades.jpg',
    alt: 'Chas Rhoades Architects',
  },
  {
    id: 6,
    src: '/logos/id-FINAL.jpg',
    alt: 'ID Architects',
  },
  {
    id: 7,
    src: '/logos/Klassen K Vert Transparant.png',
    alt: 'Klassen K Architects',
  },
  {
    id: 8,
    src: '/logos/Mangini Logo - Color .jpg',
    alt: 'Mangini',
  },
  {
    id: 9,
    src: '/logos/OMA_Prof Corp_Color_No Info.jpg',
    alt: 'OMA Architects',
  },
  {
    id: 10,
    src: '/logos/QKI_Logo_CMYK_Color.png',
    alt: 'QKI Architects',
  },
  {
    id: 11,
    src: '/logos/RRM-Logo.png',
    alt: 'RRM Architects',
  },
  {
    id: 12,
    src: '/logos/YH-Logo-V-Color-Transp.png',
    alt: 'YH Architects',
  },
  {
    id: 13,
    src: '/logos/wbe.png',
    alt: 'WBE Electrical Contracting',
  },
  {
    id: 14,
    src: '/logos/4Creeks - DKJ Logo-Black@4x.png',
    alt: 'DKJ Architects',
  }
];

export default function Logos() {
  return (
    <section className="pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-7 gap-6 place-items-center">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 aspect-square w-full"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, (max-width: 1280px) 14vw, 14vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
