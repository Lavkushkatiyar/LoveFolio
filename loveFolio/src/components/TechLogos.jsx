import {
  BrainCircuit,
  Bot,
  CircleDot,
  Container,
  Database,
  FileCode2,
  FlaskConical,
  Flower2,
  KeyRound,
  Layers,
  Network,
  Server,
  ShieldCheck,
  Wind,
  Waypoints,
  Zap,
} from 'lucide-react';

export function NodeLogo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M128 16L24 76V196L128 256L232 196V76L128 16Z" fill="#339933"/>
      <path d="M128 16L24 76V196L128 256V136L180 106L128 76V16Z" fill="#43853D"/>
      <path d="M128 136V256L232 196V76L180 106V166L128 136Z" fill="#68A063"/>
    </svg>
  );
}

export function ReactLogo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="10" fill="#61DAFB" />
      <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(0 50 50)" />
      <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(120 50 50)" />
    </svg>
  );
}

export function JSLogo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="16" fill="#F7DF1E"/>
      <path d="M67.3 104c3.3 5.4 7.6 9.4 14.8 9.4 6.2 0 10.2-3.1 10.2-7.4 0-5.1-4-7-10.8-9.9l-3.7-1.6c-10.6-4.5-17.7-10.1-17.7-22.3 0-12.3 9.7-21.5 24.8-21.5 10.8 0 18.5 3.8 23.9 13.3l-11.4 7.3c-2.9-5.1-6.1-7.2-12.4-7.2-4.9 0-8.2 2.6-8.2 6.1 0 4.2 2.8 6 9.5 8.9l3.7 1.6c12.7 5.4 19.3 10.8 19.3 23.1 0 13.9-10.9 22.8-27.4 22.8-15.3 0-24.6-7.3-29.8-17.4l15.2-9.2zM23 104c2.6 4.6 6 8 11.7 8 5.4 0 8.8-2.2 8.8-10.9V51.7h17v50.2c0 17.5-10.2 25.1-25.2 25.1-12.7 0-21-6.4-25.3-15.8L23 104z" fill="#000000"/>
    </svg>
  );
}

export function HTMLLogo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none">
      <path d="M71 460L30 0h452l-41 460L256 512" fill="#E34F26"/>
      <path d="M256 472l142-39 34-385H256" fill="#EF652A"/>
      <path d="M256 176h-80l-5-56h170V68H108l16 176h132l-6 68-54 15-54-15-3-38H87l7 86 162 45 162-45 17-190H256" fill="#FFFFFF"/>
    </svg>
  );
}

export function CSSLogo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none">
      <path d="M71 460L30 0h452l-41 460L256 512" fill="#1572B6"/>
      <path d="M256 472l142-39 34-385H256" fill="#33A9DC"/>
      <path d="M256 230h-74l5 56h69v56h-125l-16-176h210v-56H108l16 176h132v56" fill="#FFFFFF"/>
      <path d="M256 342l54-15 7-71h56l-13 143-104 29" fill="#FFFFFF"/>
    </svg>
  );
}

export function BootstrapLogo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="20" fill="#7952B3"/>
      <path d="M33 24h19.5c6.2 0 10.8 1.4 13.8 4.2 3 2.8 4.5 6.7 4.5 11.7 0 3.7-.9 6.7-2.7 9-1.8 2.3-4.3 3.9-7.5 4.8v.3c4.1.7 7.2 2.4 9.3 5.1 2.1 2.7 3.2 6.2 3.2 10.6 0 5.6-1.7 10-5.1 13.2-3.4 3.2-8.5 4.8-15.3 4.8H33V24zm14.5 21.8h5.3c2.7 0 4.7-.6 6-1.8 1.3-1.2 2-2.9 2-5.1 0-2.3-.7-4-2-5.1-1.3-1.1-3.3-1.7-6-1.7h-5.3v15.7zm0 29.5h6.2c3.1 0 5.5-.7 7-2.1 1.5-1.4 2.3-3.4 2.3-6 0-2.6-.8-4.5-2.3-5.8-1.5-1.3-3.9-2-7-2h-6.2v15.9z" fill="#FFFFFF"/>
    </svg>
  );
}

export function MongoLogo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M64 4c-3.2 13-16 35.6-32 58.7C16 85.8 20 114 43 124c18.5 8 38.5 2 48-12 11.5-17 9.5-44.5-9-70.5C66 21 64.5 10 64 4z" fill="#47A248"/>
      <path d="M64 4v118c2-.4 3.8-1 5.5-1.8 18.5-8 38.5-2 48-12 11.5-17 9.5-44.5-9-70.5C92.5 21 78.5 10 64 4z" fill="#499D4A"/>
      <path d="M64 4c-.5 6-2 17-18 38.7C28 65.8 32 94 55 104c5 2.2 10 3.2 15 3.5V4z" fill="#3F8E42"/>
    </svg>
  );
}

export function GitLogo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M122.7 57.3L70.7 5.3c-3.6-3.6-9.4-3.6-13 0l-13 13 16.4 16.4c3.8-1.3 8.3-.4 11.3 2.6 3 3 3.9 7.4 2.6 11.3l15.8 15.8c3.8-1.3 8.3-.4 11.3 2.6 4.1 4.1 4.1 10.8 0 14.9-4.1 4.1-10.8 4.1-14.9 0-3.1-3.1-4-7.6-2.6-11.4l-14.7-14.7v38.8c1.3.7 2.4 1.7 3.2 3 4.1 4.1 4.1 10.8 0 14.9-4.1 4.1-10.8 4.1-14.9 0-4.1-4.1-4.1-10.8 0-14.9 1.1-1.1 2.4-1.9 3.8-2.4V52.8c-1.4-.5-2.7-1.3-3.8-2.4-3.1-3.1-4-7.6-2.6-11.4L42.2 24.3 5.3 61.2c-3.6 3.6-3.6 9.4 0 13l52 52c3.6 3.6 9.4 3.6 13 0l52.4-52.4c3.6-3.6 3.6-9.5 0-13.1z" fill="#F05032"/>
    </svg>
  );
}

export function ExpressLogo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <text x="64" y="82" textAnchor="middle" fill="#222222" fontSize="54" fontWeight="500" fontFamily="Arial, sans-serif" letterSpacing="-4">ex</text>
    </svg>
  );
}

export function RestLogo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M40 40H27v48h13M88 40h13v48H88M75 32 53 96" stroke="#374151" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function LinuxLogo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <ellipse cx="64" cy="75" rx="34" ry="43" fill="#222222"/>
      <ellipse cx="64" cy="82" rx="21" ry="31" fill="#ffffff"/>
      <circle cx="64" cy="38" r="24" fill="#222222"/>
      <ellipse cx="55" cy="40" rx="6" ry="9" fill="#ffffff"/>
      <ellipse cx="73" cy="40" rx="6" ry="9" fill="#ffffff"/>
      <circle cx="56" cy="42" r="2.5" fill="#222222"/>
      <circle cx="72" cy="42" r="2.5" fill="#222222"/>
      <path d="m57 51 7-4 7 4-7 7-7-7Z" fill="#f2a900"/>
      <path d="M43 111c-12 4-22 2-24-3-1-5 9-9 22-10l8 5-6 8ZM85 103c13 1 23 5 22 10-1 5-12 7-24 3l-6-8 8-5Z" fill="#f2a900"/>
    </svg>
  );
}

export function HttpLogo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <circle cx="64" cy="64" r="43" stroke="#2563eb" strokeWidth="7"/>
      <path d="M21 64h86M64 21c13 12 19 26 19 43s-6 31-19 43M64 21C51 33 45 47 45 64s6 31 19 43" stroke="#2563eb" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}

export function RenderTechIcon({ iconName, className = "w-10 h-10" }) {
  const key = iconName?.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (key) {
    case 'alembic': return <FlaskConical className={className} color="#d6a2e8" />;
    case 'css':
    case 'css3': return <CSSLogo className={className} />;
    case 'celery': return <Flower2 className={className} color="#37814a" />;
    case 'deno': return <CircleDot className={className} color="#252a39" />;
    case 'docker': return <Container className={className} color="#2496ed" />;
    case 'fastapi': return <Zap className={className} color="#009688" />;
    case 'git': return <GitLogo className={className} />;
    case 'html':
    case 'html5': return <HTMLLogo className={className} />;
    case 'jwt': return <KeyRound className={className} color="#d6b65b" />;
    case 'js':
    case 'javascript': return <JSLogo className={className} />;
    case 'llm': return <BrainCircuit className={className} color="#b18cff" />;
    case 'node':
    case 'nodejs': return <NodeLogo className={className} />;
    case 'ollama': return <Bot className={className} color="#252a39" />;
    case 'openrouter': return <Waypoints className={className} color="#ff8a65" />;
    case 'postgresql': return <Database className={className} color="#699eca" />;
    case 'pydantic': return <ShieldCheck className={className} color="#e5a04b" />;
    case 'python': return <FileCode2 className={className} color="#ffd43b" />;
    case 'rag': return <Network className={className} color="#a78bfa" />;
    case 'rest':
    case 'restapi': return <RestLogo className={className} />;
    case 'react': return <ReactLogo className={className} />;
    case 'redis': return <Server className={className} color="#d82c20" />;
    case 'sqlalchemy': return <Layers className={className} color="#cf4b32" />;
    case 'tailwind':
    case 'tailwindcss': return <Wind className={className} color="#38bdf8" />;
    case 'bootstrap': return <BootstrapLogo className={className} />;
    case 'mongo': return <MongoLogo className={className} />;
    case 'express': return <ExpressLogo className={className} />;
    case 'linux': return <LinuxLogo className={className} />;
    case 'http': return <HttpLogo className={className} />;
    default: {
      const name = iconName || '?';
      const initials = name.replace(/[^a-z0-9]/gi, '').slice(0, 2).toUpperCase() || '?';
      const hue = [...name].reduce((value, character) => value + character.charCodeAt(0), 0) % 360;
      return (
        <span
          className={`${className} inline-flex items-center justify-center rounded-md font-bold`}
          style={{ color: `hsl(${hue} 75% 70%)` }}
          aria-label={`${name} icon`}
        >
          {initials}
        </span>
      );
    }
  }
}
