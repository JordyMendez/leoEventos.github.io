import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Video, Globe, MapPin, Users, BookOpen } from "lucide-react";

const links = [
  {
    label: "Consultas / reservas grupos",
    url: "https://wa.me/+593963327414",
    icon: <Users className="text-green-600 h-5 w-5" />,
  },
  {
    label: "Carta del servicio",
    url: "https://drive.google.com/drive/folders/1b-RUimKk46N8Mjk6jke8GUjvaV8W7Yem?usp=sharing",
    icon: <BookOpen className="text-purple-600 h-5 w-5" />,
  },
  {
    label: "Ubicación",
    url: "https://maps.app.goo.gl/L5TJ4xLwGuJefRxWA",
    icon: <MapPin className="text-red-500 h-5 w-5" />,
  },
  {
    label: "TikTok",
    url: "https://www.tiktok.com/@leos_event?_t=ZM-8wexAS6OddA&_r=1",
    icon: <Video className="text-pink-600 h-5 w-5" />,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/leos_eventos?igsh=MWNkeXQyNGpuM2Nvcg==",
    icon: <Instagram className="text-pink-500 h-5 w-5" />,
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/share/16qfx6obB6/",
    icon: <Globe className="text-blue-600 h-5 w-5" />,
  },
];

const LeoEventos = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 py-10 px-4">
      <div className="flex flex-col items-center mb-6 text-center">
        <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center shadow-lg mb-4">
          <img
            src="/public/leo.png"
            alt="Logo Leo Eventos"
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-800">Leo&apos;s Eventos</h1>
        <p className="text-sm text-gray-600 mt-1">
          🎉 Organización de eventos y servicio de catering | 📍 Rocafuerte -
          Manabí
        </p>
        <div className="flex flex-wrap justify-center space-x-4 mt-4">
          <a
            href="https://www.tiktok.com/@leos_event?_t=ZM-8wexAS6OddA&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Video className="h-6 w-6 text-pink-600 hover:text-black transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/leos_eventos?igsh=MWNkeXQyNGpuM2Nvcg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-6 w-6 text-pink-500 hover:text-black transition-colors" />
          </a>
          <a
            href="https://www.facebook.com/share/16qfx6obB6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="h-6 w-6 text-blue-600 hover:text-black transition-colors" />
          </a>
          <a
            href="https://maps.app.goo.gl/L5TJ4xLwGuJefRxWA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin className="h-6 w-6 text-red-600 hover:text-black transition-colors" />
          </a>
        </div>
      </div>

      <div className="w-full max-w-md space-y-4">
        {links.map((link, index) => (
          <Card key={index}>
            <CardContent className="p-0">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-6 py-4 text-base font-medium text-gray-800 hover:bg-gray-200 transition rounded-xl"
              >
                {link.label}
                {link.icon}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LeoEventos;
