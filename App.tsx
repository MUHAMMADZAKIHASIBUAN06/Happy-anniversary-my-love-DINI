
import React, { useState, useRef } from 'react';
import { Page } from './types';
import { 
  START_DATE, 
  GOMBALAN_LIST, 
  ANNIVERSARY_MESSAGE, 
  FUTURE_HOPES, 
  ROMANTIC_MUSIC_URL,
  WHATSAPP_NUMBER,
  GALLERY_IMAGES 
} from './constants';
import GiftBox from './components/GiftBox';
import LoveRain from './components/LoveRain';
import FloatingHearts from './components/FloatingHearts';
import CuteDoll, { CuteDollLeft } from './components/CuteDoll';
import { 
  Heart, 
  ChevronRight, 
  ChevronLeft, 
  Send, 
  MessageCircle, 
  ImageIcon, 
  Sparkles, 
  Star, 
  User, 
  ArrowLeft 
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.GIFT);
  const [gombalanIndex, setGombalanIndex] = useState(0);
  const [replyText, setReplyText] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const calculateDays = () => {
    const today = new Date();
    const diff = Math.abs(today.getTime() - START_DATE.getTime());
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play blocked:", e));
    }
    setCurrentPage(Page.INTRO);
  };

  const handleSendWA = () => {
    const message = encodeURIComponent(`Halo Sayang! Ini balasanku buat kejutan anniversary kita: ${replyText}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  // HALAMAN BALASAN: Render terpisah untuk stabilitas maksimal
  if (currentPage === Page.REPLY) {
    return (
      <div className="fixed inset-0 z-[100] bg-pink-50 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl flex flex-col h-[85vh] overflow-hidden border-2 border-pink-100">
          {/* Header Chat - Statis & Rigid */}
          <div className="bg-pink-500 p-4 flex items-center gap-4 text-white shrink-0">
            <button 
              onClick={() => setCurrentPage(Page.FINAL)} 
              className="p-2 hover:bg-pink-600 rounded-full transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-500 shadow-sm">
              <User size={20} />
            </div>
            <div className="text-left">
              <p className="font-bold text-base leading-tight">Sayangku ❤️</p>
              <p className="text-[10px] opacity-80 uppercase tracking-tighter">Membalas pesan indahmu...</p>
            </div>
          </div>

          {/* Chat Body - Background statis */}
          <div className="flex-1 p-5 bg-white overflow-hidden flex flex-col">
            <div className="self-start bg-pink-50 text-pink-800 p-4 rounded-2xl rounded-tl-none max-w-[90%] mb-6 shadow-sm border border-pink-100">
              <p className="text-sm font-medium italic">"Tuliskan balasanmu di bawah ya, Sayang. Nanti otomatis terkirim ke WhatsApp aku! ✨"</p>
            </div>

            {/* Area Input - Sangat Rigid & Stabil */}
            <div className="flex-1 w-full bg-pink-50/30 rounded-2xl border-2 border-pink-100 p-2">
              <textarea 
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Tulis di sini..."
                className="w-full h-full bg-transparent outline-none p-3 text-pink-900 resize-none text-lg font-medium placeholder:text-pink-300"
                autoFocus
              />
            </div>
          </div>

          {/* Action Button - Statis */}
          <div className="p-4 bg-white border-t border-pink-50 shrink-0">
            <button 
              onClick={handleSendWA}
              disabled={!replyText.trim()}
              className="w-full bg-pink-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 disabled:bg-pink-200 transition-colors shadow-md active:bg-pink-600"
            >
              Kirim ke WhatsApp <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden flex items-center justify-center selection:bg-pink-300">
      <audio ref={audioRef} loop>
        <source src={ROMANTIC_MUSIC_URL} type="audio/mpeg" />
      </audio>

      {/* Elemen Latar Belakang */}
      {currentPage !== Page.GIFT && (
        <>
          <LoveRain />
          <FloatingHearts />
          <CuteDoll />
          <CuteDollLeft />
          <div className="fixed inset-0 pointer-events-none z-10">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="absolute animate-pulse text-yellow-300 opacity-30"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              >
                <Star size={Math.random() * 10 + 5} fill="currentColor" />
              </div>
            ))}
          </div>
        </>
      )}

      {/* Konten Halaman Utama */}
      <div className="animate-slide-up min-h-screen w-full flex flex-col items-center justify-center p-6 text-center z-30 relative">
        
        {currentPage === Page.GIFT && (
          <div className="text-center relative">
            <h1 className="text-5xl sm:text-7xl font-romantic text-pink-600 mb-16 drop-shadow-2xl animate-float">
              Special Gift for You... ✨
            </h1>
            <div className="animate-glow">
              <GiftBox onOpen={handleStart} />
            </div>
          </div>
        )}

        {currentPage === Page.INTRO && (
          <div className="max-w-md bg-white/90 backdrop-blur-xl p-8 rounded-[3rem] shadow-2xl border-4 border-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <Sparkles className="text-yellow-400 w-8 h-8 animate-spin" style={{ animationDuration: '5s' }} />
            </div>
            <div className="mb-6 relative">
              <Heart className="w-16 h-16 text-red-500 mx-auto heartbeat fill-red-500" />
            </div>
            <h2 className="text-3xl font-romantic text-pink-600 mb-4 font-bold">Hai Sayangku... ❤️</h2>
            <div className="text-base text-pink-900 leading-relaxed mb-8 italic font-medium whitespace-pre-line px-4">
              {ANNIVERSARY_MESSAGE}
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-6 rounded-[2rem] mb-8 shadow-xl">
              <p className="font-black text-5xl mb-1">{calculateDays()}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-90">Hari Indah Bersamamu</p>
            </div>
            <button 
              onClick={() => setCurrentPage(Page.GOMBALAN)}
              className="w-full flex items-center justify-center gap-4 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg active:scale-95"
            >
              Lanjut Yuk <ChevronRight size={20} />
            </button>
          </div>
        )}

        {currentPage === Page.GOMBALAN && (
          <div className="max-w-md w-full bg-white/95 backdrop-blur-md p-6 rounded-[3rem] shadow-2xl border-2 border-pink-100">
            <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-square shadow-md">
              <img 
                src={GOMBALAN_LIST[gombalanIndex].image} 
                alt="Kenangan" 
                className="w-full h-full object-cover transition-transform duration-1000"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('unsplash')) {
                    target.src = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500";
                  }
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 text-white text-left bg-black/20 backdrop-blur-sm p-3 rounded-xl">
                <p className="font-romantic text-xl italic">Kenangan #{gombalanIndex + 1}</p>
              </div>
            </div>
            <p className="text-xl font-romantic text-pink-700 leading-snug min-h-[6rem] mb-6 px-4">
              "{GOMBALAN_LIST[gombalanIndex].text}"
            </p>
            <div className="flex justify-between items-center px-4 mb-2">
              <button 
                onClick={() => gombalanIndex > 0 ? setGombalanIndex(i => i-1) : setCurrentPage(Page.INTRO)} 
                className="p-3 bg-pink-50 text-pink-500 rounded-full hover:bg-pink-100"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {GOMBALAN_LIST.map((_, i) => (
                  <div key={i} className={`h-2 rounded-full transition-all ${i === gombalanIndex ? 'bg-pink-500 w-8' : 'bg-pink-100 w-2'}`} />
                ))}
              </div>
              <button 
                onClick={() => gombalanIndex < GOMBALAN_LIST.length - 1 ? setGombalanIndex(i => i+1) : setCurrentPage(Page.GALLERY)} 
                className="p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 shadow-md"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        )}

        {currentPage === Page.GALLERY && (
          <div className="max-w-4xl w-full bg-white/95 backdrop-blur-md p-8 rounded-[3.5rem] shadow-2xl border-4 border-white overflow-hidden">
            <div className="flex flex-col items-center mb-6">
              <ImageIcon className="text-pink-600 w-8 h-8 mb-2" />
              <h2 className="text-4xl font-romantic text-pink-600">Our Gallery ✨</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8 max-h-[45vh] overflow-y-auto p-3 custom-scrollbar bg-pink-50/30 rounded-2xl">
              {GALLERY_IMAGES.map((img, idx) => (
                <div key={idx} className="relative rounded-xl overflow-hidden shadow-sm border-2 border-white aspect-[3/4]">
                  <img 
                    src={img} 
                    alt="Gallery" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1516589174184-c68526614460?w=200";
                    }}
                  />
                </div>
              ))}
            </div>
            <button 
              onClick={() => setCurrentPage(Page.FINAL)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full font-bold shadow-lg flex items-center gap-3 mx-auto transition-transform active:scale-95"
            >
              Surat Terakhir <Heart size={18} fill="currentColor" />
            </button>
          </div>
        )}

        {currentPage === Page.FINAL && (
          <div className="max-w-lg bg-white/98 backdrop-blur-2xl p-10 rounded-[4rem] shadow-2xl border-8 border-pink-50 relative overflow-hidden">
            <h2 className="text-4xl sm:text-5xl font-romantic text-pink-600 mb-8">Happy Anniversary! 🌹</h2>
            <div className="text-lg text-pink-900 leading-relaxed mb-10 text-left italic border-l-4 border-pink-200 pl-6 whitespace-pre-line font-medium">
              {FUTURE_HOPES}
            </div>
            <button 
              onClick={() => setCurrentPage(Page.REPLY)}
              className="w-full flex items-center justify-center gap-4 bg-pink-600 hover:bg-pink-700 text-white px-8 py-5 rounded-[2rem] font-bold shadow-lg transition-all active:scale-95"
            >
              <MessageCircle size={24} /> Balas Pesan Sayang
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
