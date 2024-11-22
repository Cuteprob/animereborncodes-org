'use client';

import { useState } from 'react';

const YouTubeVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <div className="relative overflow-hidden pt-[56.25%]">
        {!showVideo ? (
          <div className="absolute inset-0 cursor-pointer" onClick={() => setShowVideo(true)}>
            <img
              src="/Gb_4Ld-a4AAJ-og.jpeg"
              alt="Anime Reborn Video Thumbnail"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-black bg-opacity-50 p-4 transition-transform hover:scale-110">
                <svg
                  className="h-12 w-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            className="absolute inset-0 h-full w-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nKwPyV_kCEY?autoplay=1"
            title="Anime Reborn Gameplay and Codes Guide"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default YouTubeVideo;
