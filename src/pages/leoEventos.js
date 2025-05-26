import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Video, Globe, MapPin, Users, BookOpen } from "lucide-react";
const links = [
    {
        label: "Consultas / reservas grupos",
        url: "https://wa.me/+593963327414",
        icon: _jsx(Users, { className: "text-green-600 h-5 w-5" }),
    },
    {
        label: "Carta del servicio",
        url: "https://drive.google.com/drive/folders/1b-RUimKk46N8Mjk6jke8GUjvaV8W7Yem?usp=sharing",
        icon: _jsx(BookOpen, { className: "text-purple-600 h-5 w-5" }),
    },
    {
        label: "Ubicación",
        url: "https://maps.app.goo.gl/L5TJ4xLwGuJefRxWA",
        icon: _jsx(MapPin, { className: "text-red-500 h-5 w-5" }),
    },
    {
        label: "TikTok",
        url: "https://www.tiktok.com/@leos_event?_t=ZM-8wexAS6OddA&_r=1",
        icon: _jsx(Video, { className: "text-pink-600 h-5 w-5" }),
    },
    {
        label: "Instagram",
        url: "https://www.instagram.com/leos_eventos?igsh=MWNkeXQyNGpuM2Nvcg==",
        icon: _jsx(Instagram, { className: "text-pink-500 h-5 w-5" }),
    },
    {
        label: "Facebook",
        url: "https://www.facebook.com/share/16qfx6obB6/",
        icon: _jsx(Globe, { className: "text-blue-600 h-5 w-5" }),
    },
];
const LeoEventos = () => {
    return (_jsxs("div", { className: "min-h-screen flex flex-col items-center bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 py-10 px-4", children: [_jsxs("div", { className: "flex flex-col items-center mb-6 text-center", children: [_jsx("div", { className: "w-20 h-20 rounded-full overflow-hidden flex items-center justify-center shadow-lg mb-4", children: _jsx("img", { src: "/public/leo.png" // ← EDITA AQUÍ la ruta de tu logo
                            , alt: "Logo Leo Eventos", className: "object-cover w-full h-full" }) }), _jsx("h1", { className: "text-2xl font-bold text-gray-800", children: "Leo's Eventos" }), _jsx("p", { className: "text-sm text-gray-600 mt-1", children: "\uD83C\uDF89 Organizaci\u00F3n de eventos y servicio de catering | \uD83D\uDCCD Rocafuerte - Manab\u00ED" }), _jsxs("div", { className: "flex flex-wrap justify-center space-x-4 mt-4", children: [_jsx("a", { href: "https://www.tiktok.com/@leos_event?_t=ZM-8wexAS6OddA&_r=1", target: "_blank", rel: "noopener noreferrer", children: _jsx(Video, { className: "h-6 w-6 text-pink-600 hover:text-black transition-colors" }) }), _jsx("a", { href: "https://www.instagram.com/leos_eventos?igsh=MWNkeXQyNGpuM2Nvcg==", target: "_blank", rel: "noopener noreferrer", children: _jsx(Instagram, { className: "h-6 w-6 text-pink-500 hover:text-black transition-colors" }) }), _jsx("a", { href: "https://www.facebook.com/share/16qfx6obB6/", target: "_blank", rel: "noopener noreferrer", children: _jsx(Globe, { className: "h-6 w-6 text-blue-600 hover:text-black transition-colors" }) }), _jsx("a", { href: "https://maps.app.goo.gl/L5TJ4xLwGuJefRxWA", target: "_blank", rel: "noopener noreferrer", children: _jsx(MapPin, { className: "h-6 w-6 text-red-600 hover:text-black transition-colors" }) })] })] }), _jsx("div", { className: "w-full max-w-md space-y-4", children: links.map((link, index) => (_jsx(Card, { children: _jsx(CardContent, { className: "p-0", children: _jsxs("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "flex items-center justify-between w-full px-6 py-4 text-base font-medium text-gray-800 hover:bg-gray-200 transition rounded-xl", children: [link.label, link.icon] }) }) }, index))) })] }));
};
export default LeoEventos;
