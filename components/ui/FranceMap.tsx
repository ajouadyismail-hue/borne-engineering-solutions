// Carte simplifiée de France métropolitaine
// Régions surlignées en terracotta selon les zones d'intervention

interface FranceMapProps {
  className?: string;
}

const REGIONS = [
  // ── Régions EN INTERVENTION ─────────────────────────────────────────
  {
    id: "hauts-de-france",
    label: "Hauts-de-France",
    active: true,
    d: "M 188,14 L 307,12 L 322,30 L 333,86 L 270,98 L 237,103 L 197,96 L 177,74 L 185,38 Z",
  },
  {
    id: "normandie",
    label: "Normandie",
    active: true,
    d: "M 36,52 L 124,22 L 188,14 L 177,74 L 197,96 L 192,138 L 136,162 L 105,168 L 46,138 L 20,94 L 27,64 Z",
  },
  {
    id: "ile-de-france",
    label: "Île-de-France",
    active: true,
    d: "M 237,103 L 270,98 L 280,124 L 269,152 L 245,158 L 225,148 L 222,124 Z",
  },
  {
    id: "grand-est",
    label: "Grand Est",
    active: true,
    d: "M 307,12 L 402,37 L 412,94 L 416,173 L 391,213 L 352,223 L 329,207 L 327,176 L 333,132 L 333,86 L 322,30 Z",
  },
  {
    id: "centre-val-de-loire",
    label: "Centre-Val de Loire",
    active: true,
    d: "M 197,96 L 237,103 L 222,124 L 225,148 L 245,158 L 248,250 L 212,264 L 128,258 L 106,246 L 105,168 L 136,162 L 192,138 Z",
  },
  {
    id: "bourgogne-franche-comte",
    label: "Bourgogne-Franche-Comté",
    active: true,
    d: "M 269,152 L 280,124 L 329,132 L 327,176 L 352,223 L 391,213 L 388,282 L 342,327 L 292,327 L 267,297 L 251,267 L 251,162 Z",
  },

  // ── Régions hors intervention ────────────────────────────────────────
  {
    id: "bretagne",
    label: "Bretagne",
    active: false,
    d: "M 20,182 L 88,174 L 93,190 L 97,220 L 61,254 L 6,250 L 2,212 Z",
  },
  {
    id: "pays-de-la-loire",
    label: "Pays de la Loire",
    active: false,
    d: "M 88,174 L 105,168 L 136,162 L 192,138 L 225,148 L 245,158 L 248,250 L 207,263 L 127,257 L 97,228 L 97,220 L 93,190 Z",
  },
  {
    id: "nouvelle-aquitaine",
    label: "Nouvelle-Aquitaine",
    active: false,
    d: "M 97,228 L 127,257 L 207,263 L 248,250 L 251,322 L 241,388 L 191,436 L 107,440 L 41,400 L 37,348 L 57,290 Z",
  },
  {
    id: "auvergne-rhone-alpes",
    label: "Auvergne-Rhône-Alpes",
    active: false,
    d: "M 248,250 L 267,297 L 292,327 L 342,327 L 388,282 L 406,352 L 376,427 L 316,440 L 267,426 L 251,392 L 251,322 Z",
  },
  {
    id: "occitanie",
    label: "Occitanie",
    active: false,
    d: "M 107,440 L 191,436 L 241,388 L 251,392 L 267,426 L 316,440 L 300,482 L 127,482 L 109,462 Z",
  },
  {
    id: "paca",
    label: "Provence-Alpes-Côte d'Azur",
    active: false,
    d: "M 316,440 L 376,427 L 412,437 L 402,482 L 310,482 L 300,482 Z",
  },
];

const CORSE = "M 416,414 L 429,398 L 444,420 L 438,478 L 424,484 L 412,470 Z";

export default function FranceMap({ className = "" }: FranceMapProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 450 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
        aria-label="Carte des zones d'intervention"
      >
        {/* Fond doux */}
        <rect width="450" height="500" fill="transparent" />

        {/* Régions */}
        {REGIONS.map((r) => (
          <path
            key={r.id}
            d={r.d}
            fill={r.active ? "#D97757" : "#E7E5E4"}
            stroke="#FAF9F7"
            strokeWidth="2"
            strokeLinejoin="round"
            opacity={r.active ? 1 : 0.7}
          >
            <title>{r.label}</title>
          </path>
        ))}

        {/* Corse */}
        <path
          d={CORSE}
          fill="#E7E5E4"
          stroke="#FAF9F7"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity={0.7}
        >
          <title>Corse</title>
        </path>

        {/* Labels pour les zones actives */}
        <text x="247" y="58"  textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="sans-serif">Hauts-de-France</text>
        <text x="118" y="105" textAnchor="middle" fill="white" fontSize="8" fontWeight="600" fontFamily="sans-serif">Normandie</text>
        <text x="252" y="132" textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="sans-serif">IDF</text>
        <text x="368" y="130" textAnchor="middle" fill="white" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Grand Est</text>
        <text x="178" y="210" textAnchor="middle" fill="white" fontSize="8" fontWeight="600" fontFamily="sans-serif">Centre</text>
        <text x="320" y="240" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="600" fontFamily="sans-serif">Bourg.-F.C.</text>
      </svg>
    </div>
  );
}
