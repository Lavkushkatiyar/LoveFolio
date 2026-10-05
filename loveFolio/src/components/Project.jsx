const technologies = [
    "HTML",
    "CSS",
    "ES6",
    "JavaScript",
    "Developer Tools",
    "Bootstrap",
];

function LaptopIllustration() {
    return (
        <div
            className="
        pointer-events-none
        absolute
        right-[35px]
        top-1/2
        h-[290px]
        w-[390px]
        -translate-y-1/2

        max-[1100px]:right-[25px]
        max-[1100px]:h-[255px]
        max-[1100px]:w-[340px]

        max-[900px]:right-[20px]
        max-[900px]:h-[225px]
        max-[900px]:w-[300px]

        max-[700px]:relative
        max-[700px]:right-auto
        max-[700px]:top-auto
        max-[700px]:mx-auto
        max-[700px]:mt-10
        max-[700px]:h-[240px]
        max-[700px]:w-full
        max-[700px]:translate-y-0
      "
        >
            <svg
                viewBox="0 0 390 290"
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <g transform="rotate(17 210 110)">
                    {/* Laptop screen */}
                    <path
                        d="M102 32 L322 32 Q332 32 332 42 L332 170 L102 170 Z"
                        fill="#FFB84D"
                        stroke="#FF553F"
                        strokeWidth="7"
                    />

                    {/* Screen */}
                    <rect
                        x="117"
                        y="48"
                        width="200"
                        height="105"
                        rx="3"
                        fill="#FFD77D"
                    />

                    {/* Mountains */}
                    <path
                        d="M125 132 L166 91 L194 121 L226 72 L293 132 Z"
                        fill="#FF8050"
                    />

                    <path
                        d="M190 132 L222 103 L270 132 Z"
                        fill="#FF2727"
                    />

                    {/* Sun */}
                    <circle
                        cx="151"
                        cy="78"
                        r="19"
                        fill="#FFD15B"
                    />

                    <circle
                        cx="167"
                        cy="116"
                        r="21"
                        fill="#FFD15B"
                    />

                    {/* Decorative elements */}
                    <circle
                        cx="274"
                        cy="78"
                        r="10"
                        fill="#FF9D57"
                    />

                    <circle
                        cx="294"
                        cy="110"
                        r="7"
                        fill="#FF9D57"
                    />

                    <rect
                        x="254"
                        y="123"
                        width="35"
                        height="13"
                        rx="2"
                        fill="#3C3C24"
                    />

                    {/* Laptop base */}
                    <path
                        d="M102 170 L332 170 L371 213 L60 213 Z"
                        fill="#FFB84D"
                        stroke="#FF553F"
                        strokeWidth="7"
                    />

                    <path
                        d="M60 213 L371 213 L351 230 L82 230 Z"
                        fill="#FFA94D"
                    />
                </g>
            </svg>
        </div>
    );
}

function TechnologyList() {
    return (
        <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((technology) => (
                <span
                    key={technology}
                    className="
            inline-flex
            min-h-[30px]
            items-center
            justify-center
            rounded-[5px]
            border
            border-[#e7e7eb]
            bg-white
            px-3
            text-[11px]
            font-medium
            leading-none
            text-[#344054]
            shadow-[0_1px_2px_rgba(16,24,40,0.04)]
          "
                >
                    {technology}
                </span>
            ))}
        </div>
    );
}

function ProjectActions() {
    return (
        <div
            className="
        mt-6
        flex
        items-center
        gap-[17px]

        max-[500px]:flex-col
        max-[500px]:items-stretch
      "
        >
            <a
                href="#"
                className="
          flex
          h-[49px]
          w-[165px]
          items-center
          justify-center
          rounded-[28px]
          border
          border-[#ffb33a]
          bg-[#ffba4b]
          text-[13px]
          font-semibold
          text-[#034ca3]
          shadow-[0_3px_5px_rgba(0,0,0,0.16)]
          transition-transform
          duration-150
          hover:-translate-y-px

          max-[500px]:w-full
        "
            >
                View Demo
            </a>

            <a
                href="#"
                className="
          flex
          h-[49px]
          w-[192px]
          items-center
          justify-center
          rounded-[28px]
          border-[3px]
          border-[#064ca5]
          bg-white
          text-[13px]
          font-semibold
          text-[#034ca3]
          shadow-[0_2px_4px_rgba(0,0,0,0.08)]
          transition-transform
          duration-150
          hover:-translate-y-px

          max-[500px]:w-full
        "
            >
                View Project Details
            </a>
        </div>
    );
}

export default function QTripCard() {
    return (
        <article
            className="
        relative
        mx-auto
        flex
        min-h-[420px]
        w-full
        overflow-hidden
        rounded-[19px]
        bg-[#f1f1fa]
        px-[48px]
        py-[42px]
        shadow-[0_2px_5px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]

        max-[900px]:px-[36px]
        max-[900px]:py-9

        max-[700px]:flex-col
        max-[700px]:px-[28px]
        max-[700px]:py-8

        max-[500px]:px-5
        max-[500px]:py-7
      "
        >
            {/* Project content */}
            <div
                className="
          relative
          z-10
          w-[55%]
          min-w-0

          max-[900px]:w-[58%]
          max-[700px]:w-full
        "
            >
                {/* Title */}
                <h2
                    className="
            m-0
            text-[30px]
            font-bold
            leading-[1.05]
            tracking-[-0.6px]
            text-[#0c4da2]
          "
                >
                    QTripDynamic
                </h2>

                {/* Date */}
                <span
                    className="
            mt-2
            block
            text-[12px]
            font-normal
            leading-[1.2]
            text-[#555d6d]
          "
                >
                    Aug 2022
                </span>

                {/* Description */}
                <p
                    className="
            mt-4
            max-w-[455px]
            text-[13px]
            font-normal
            leading-[1.6]
            text-[#4f5869]
          "
                >
                    QTrip is a travel website aimed at travellers looking for a
                    multitude of adventures in different cities.
                </p>

                {/* Project intro */}
                <p
                    className="
            mt-2
            text-[13px]
            font-normal
            leading-[1.6]
            text-[#4f5869]
          "
                >
                    During the course of this project,
                </p>

                {/* Features */}
                <ul
                    className="
            mt-1
            max-w-[650px]
            list-disc
            space-y-0.5
            pl-[25px]
            text-[13px]
            font-normal
            leading-[1.6]
            text-[#4f5869]
          "
                >
                    <li>
                        Created web pages using HTML and CSS and made them dynamic using
                        JavaScript
                    </li>

                    <li>
                        Improved UX with multi-select filters, image carousels
                    </li>

                    <li>
                        Utilised localStorage to persist user preferences at client-side
                    </li>
                </ul>

                {/* Technologies */}
                <TechnologyList />

                {/* Additional technologies */}
                <button
                    type="button"
                    className="
            mt-2
            flex
            items-center
            gap-2
            border-0
            bg-transparent
            p-0
            text-[11px]
            font-medium
            text-[#27364a]
          "
                >
                    <span>+15 more</span>

                    <span
                        className="
              h-[7px]
              w-[7px]
              rotate-45
              border-b-[1.5px]
              border-r-[1.5px]
              border-[#27364a]
            "
                    />
                </button>

                {/* Actions */}
                <ProjectActions />
            </div>

            {/* Illustration */}
            <LaptopIllustration />
        </article>
    );
}