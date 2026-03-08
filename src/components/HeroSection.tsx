import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/8ee0b21a-4bf9-47e6-ad9b-5a26cff25778/files/a9852a3b-01b0-4ba8-a058-7a99994c5611.jpg',
  'https://cdn.poehali.dev/projects/8ee0b21a-4bf9-47e6-ad9b-5a26cff25778/files/617c9839-58ac-461c-834b-751becc1784d.jpg',
  'https://cdn.poehali.dev/projects/8ee0b21a-4bf9-47e6-ad9b-5a26cff25778/files/f80b3f6c-1550-466c-8a1a-c9f9d2bce524.jpg',
];

const services = [
  'Личная безопасность и самозащита',
  'Накаутирующие удары руками и ногами',
  'Подготовка к соревнованиям',
  'Программы похудения',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const imgInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    const svcInterval = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => {
      clearInterval(imgInterval);
      clearInterval(svcInterval);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white/90 shadow-2xl md:h-56 md:w-56">
                <img
                  src="https://cdn.poehali.dev/templates/creative-portfolio-ru/portrait.jpg"
                  alt="Персональный тренер"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                  Персональный тренер
                </p>
                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Александр Громов
                </p>
                <p className="text-lg font-light text-white/70 md:text-xl">
                  50 лет практического опыта · Самозащита · Боевые искусства
                </p>

                <div className="pt-2 h-8 overflow-hidden">
                  {services.map((service, i) => (
                    <p
                      key={service}
                      className={cn(
                        'text-base text-red-400 font-medium transition-all duration-500',
                        serviceIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 absolute'
                      )}
                    >
                      → {service}
                    </p>
                  ))}
                </div>

                <div className="flex flex-col gap-3 pt-6 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-none border-2 border-white bg-white px-8 py-3 text-sm font-semibold uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-white"
                  >
                    Записаться на тренировку
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center justify-center rounded-none border-2 border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white/80 transition-all hover:border-white hover:text-white"
                  >
                    Узнать больше
                  </a>
                </div>

                <div className="flex gap-6 pt-4">
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 transition-colors hover:text-white"
                    aria-label="Telegram"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </a>
                  <a
                    href="https://vk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 transition-colors hover:text-white"
                    aria-label="VKontakte"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.043-2.763-5.32-2.763-5.788 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.625 2.18-3.625.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 z-20">
        <p className="text-xs uppercase tracking-[0.3em] text-white/30">Опыт с 1974 года</p>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/30 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
