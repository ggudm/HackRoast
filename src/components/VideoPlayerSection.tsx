import { Play, Lock, Infinity, CheckCircle2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function VideoPlayerSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [duration, setDuration] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Вставьте URL вашего видео здесь (прямая ссылка на .mp4/.mov файл)
  const videoUrl = '/vid.MOV';

  // Форматирование времени в формат M:SS
  const formatDuration = (seconds: number | null): string => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error('Video play was prevented:', error);
        setHasError(true);
        setErrorMessage('Не удалось воспроизвести видео. Попробуйте обновить страницу.');
      });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Проверка доступности файла
    const checkVideoFile = async () => {
      try {
        const response = await fetch(videoUrl, { method: 'HEAD' });
        if (!response.ok) {
          console.warn(`Video file check: ${response.status} ${response.statusText}`);
        } else {
          console.log('Video file is accessible');
        }
      } catch (error) {
        console.warn('Could not check video file:', error);
      }
    };
    checkVideoFile();

    const handlePlayEvent = () => {
      setIsPlaying(true);
      setHasError(false);
    };
    const handlePauseEvent = () => {
      setIsPlaying(false);
    };
    const handleLoadedData = () => {
      setIsLoaded(true);
      setHasError(false);
      console.log('Video loaded successfully');
    };
    const handleLoadedMetadata = () => {
      if (video.duration && isFinite(video.duration)) {
        setDuration(video.duration);
        console.log('Video duration:', video.duration);
      }
    };
    const handleError = (e: Event) => {
      const error = video.error;
      let errorMsg = 'Ошибка загрузки видео';
      
      if (error) {
        switch (error.code) {
          case MediaError.MEDIA_ERR_ABORTED:
            errorMsg = 'Загрузка видео была прервана';
            break;
          case MediaError.MEDIA_ERR_NETWORK:
            errorMsg = 'Ошибка сети при загрузке видео';
            break;
          case MediaError.MEDIA_ERR_DECODE:
            errorMsg = 'Видео не может быть декодировано. Возможно, формат не поддерживается браузером.';
            break;
          case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
            errorMsg = 'Формат видео не поддерживается. Рекомендуется конвертировать в MP4 (H.264).';
            break;
          default:
            errorMsg = `Ошибка видео: ${error.message || 'Неизвестная ошибка'}`;
        }
      }
      
      console.error('Video error:', {
        code: error?.code,
        message: error?.message,
        errorMsg,
        event: e,
        videoSrc: video.currentSrc,
        networkState: video.networkState,
        readyState: video.readyState,
        canPlayType: {
          quicktime: video.canPlayType('video/quicktime'),
          mp4: video.canPlayType('video/mp4'),
          m4v: video.canPlayType('video/x-m4v')
        }
      });
      
      setIsLoaded(false);
      setHasError(true);
      setErrorMessage(errorMsg);
    };
    const handleCanPlay = () => {
      console.log('Video can play');
      setIsLoaded(true);
      setHasError(false);
    };
    const handleLoadStart = () => {
      console.log('Video load started');
      setHasError(false);
    };
    const handleStalled = () => {
      console.warn('Video stalled');
    };
    const handleWaiting = () => {
      console.log('Video waiting for data');
    };

    video.addEventListener('play', handlePlayEvent);
    video.addEventListener('pause', handlePauseEvent);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('stalled', handleStalled);
    video.addEventListener('waiting', handleWaiting);

    // Попытка загрузить видео
    video.load();

    return () => {
      video.removeEventListener('play', handlePlayEvent);
      video.removeEventListener('pause', handlePauseEvent);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('stalled', handleStalled);
      video.removeEventListener('waiting', handleWaiting);
    };
  }, [videoUrl]);

  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: '#0a0506' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="leading-tight" style={{ color: '#FCF2D9' }}>
              Посмотри, как это работает
            </h2>
            <p className="text-xl" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>
              Узнай, что такое хакатон и как собрать команду мечты за 15 минут
            </p>
          </div>

          {/* Video Player */}
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
            <div className="aspect-video bg-black relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls={isPlaying}
                playsInline
                preload="auto"
                muted={false}
              >
                <source src={videoUrl} type="video/quicktime" />
                <source src={videoUrl} type="video/mp4" />
                <source src={videoUrl} type="video/x-m4v" />
                Ваш браузер не поддерживает видео.
              </video>
              
              {/* Overlay */}
              {!isPlaying && !hasError && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              )}

              {/* Play Button */}
              {!isPlaying && !hasError && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center group z-10"
                  aria-label="Play video"
                >
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all shadow-2xl"
                    style={{ backgroundColor: '#81021F' }}
                  >
                    <Play size={40} className="text-white ml-1" fill="white" />
                  </div>
                </button>
              )}

              {/* Error Message */}
              {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/90 p-8 z-20">
                  <div className="text-center text-white space-y-4 max-w-md">
                    <p className="text-lg font-semibold">⚠️ Ошибка загрузки видео</p>
                    <p className="text-sm text-white/80">{errorMessage}</p>
                    <p className="text-xs text-white/60">
                      Формат MOV может не поддерживаться вашим браузером. 
                      Рекомендуется конвертировать видео в MP4 (H.264) для лучшей совместимости.
                    </p>
                    <button
                      onClick={() => {
                        setHasError(false);
                        if (videoRef.current) {
                          videoRef.current.load();
                        }
                      }}
                      className="mt-4 px-4 py-2 rounded-lg text-sm"
                      style={{ backgroundColor: '#81021F', color: 'white' }}
                    >
                      Попробовать снова
                    </button>
                  </div>
                </div>
              )}

              {/* Video Info */}
              {!isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-end justify-between">
                    <div className="space-y-2">
                      <div className="inline-block px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#FDA72E' }}>
                        Бесплатный урок
                      </div>
                      <h3 className="text-white">
                        Что такое хакатон — как собрать команду мечты?
                      </h3>
                      <p className="text-white/80">{formatDuration(duration)}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Полный доступ',
                description: 'После регистрации получи доступ ко всем урокам',
                icon: Lock,
              },
              {
                title: 'Без ограничений',
                description: 'Смотри видео в любое время и пересматривай',
                icon: Infinity,
              },
              {
                title: 'С практикой',
                description: 'К каждому уроку практические задания',
                icon: CheckCircle2,
              },
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl p-6 space-y-3 hover:scale-105 transition-all"
                  style={{ backgroundColor: 'rgba(252, 242, 217, 0.05)', border: '1px solid rgba(252, 242, 217, 0.1)' }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(253, 167, 46, 0.2)' }}
                  >
                    <Icon size={24} style={{ color: '#FDA72E' }} />
                  </div>
                  <h4 style={{ color: '#FCF2D9' }}>{card.title}</h4>
                  <p className="text-sm" style={{ color: 'rgba(252, 242, 217, 0.6)' }}>{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}