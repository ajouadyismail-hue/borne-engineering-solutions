import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="w-full h-[380px] sm:h-[480px] lg:h-[560px] relative mt-16 overflow-hidden">
      {/* Photo de fond */}
      <Image
        src="/hero-banner.jpg"
        alt="Borne de recharge électrique — Borne Engineering Solutions"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Légère surcouche sombre */}
      <div className="absolute inset-0 bg-navy/20" />

      {/* Logo en haut au centre — sans arrière-plan */}
      <div className="absolute top-8 sm:top-12 inset-x-0 flex justify-center">
        <Image
          src="/logo-transparent.png"
          alt="Borne Eng Solutions"
          width={180}
          height={197}
          className="h-28 sm:h-36 w-auto object-contain drop-shadow-lg"
          priority
        />
      </div>

      {/* Dégradé bas pour fondre avec la section suivante */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </div>
  );
}
