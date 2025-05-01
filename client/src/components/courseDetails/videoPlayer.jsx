import React from 'react'
import { Button, Dialog } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'

import { useRef, useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SettingsIcon from '@mui/icons-material/Settings';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
import Crop169Icon from '@mui/icons-material/Crop169';
import Crop32Icon from '@mui/icons-material/Crop32';
import Crop54Icon from '@mui/icons-material/Crop54';
import { setIsPreview } from '../../redux/coursePreview';


const VideoPlayer = ({course}) => {
  const {isPreview}=useSelector((state)=>state.preview)
  const dispatch=useDispatch()
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [isTheaterMode,setIsTheaterMode]=useState(false)
  const [isFullScreen, setIsFullScreen]=useState(false)
  
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
  
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  
  const handleEnded = () => {
    setIsPlaying(false);
  };
  return (
    <Dialog open={isPreview}>
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
      <div className="fixed inset-0  max-w-[980px] flex flex-col items-center justify-center px-4">
      <div
          className=" w-[70%] bg-[#16161D] rounded-xl text-white p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="videoplayer"
        >
          {/* header section */} 
          <header className='flex justify-between items-center mb-5'>
            <div>{course.title}</div>
            <div><Button onClick={()=>dispatch(setIsPreview(false))}><CloseIcon /></Button></div>
          </header>
          <main>
            <div className=" relative bg-gray-800 mb-5 rounded-lg shadow-lg overflow-hidden">
              <video
                ref={videoRef}
                onEnded={handleEnded}
                className="w-full h-full"
                src="https://www.w3schools.com/html/mov_bbb.mp4"
              ></video>
              <div className="flex flex-col w-full bg-cyan-700 py-4 absolute bottom-0">
                <div className="w-full bg-amber-950 h-0.5"></div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-6 text-white">
                    {/* Play/Pause */}
                    <div className="flex flex-col items-center">
                      <button onClick={togglePlay} className="px-3 py-2 rounded hover:bg-white/10">
                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                      </button>
                      <span className="text-xs mt-1">{isPlaying?"Pause":"Play"}</span>
                    </div>

                    {/* Next */}
                    <div className="flex flex-col items-center next">
                      <button className="px-3 py-2 rounded hover:bg-white/10">
                        <SkipNextIcon />
                      </button>
                      <span className="text-xs mt-1">Next</span>
                    </div>

                    {/* Sound */}
                    <div className="flex flex-col items-center sound">
                      <button className="px-3 py-2 rounded hover:bg-white/10">
                        {isMute ? <VolumeOffIcon /> : <VolumeDownIcon />}
                      </button>
                      <span className="text-xs mt-1">{isMute? "Unmute(m)":"Mute(m)"}</span>
                    </div>

                    {/* Time */}
                    <div className="flex flex-col items-center time">
                      <div className="text-sm">
                        <span>35:28</span> / <span>58:32</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="switch relative inline-block w-10 h-3.5 bg-emerald-300 rounded">
                      <input type="text"className="input w-0 h-0 " />
                      <span className="slider absolute top-0 left-0
                      right-0 bottom-0">Autoplay</span>
                    </div>
                    <div className="flex flex-col items-center subtitle">
                      <button><ClosedCaptionOffIcon /></button>
                      <span className="text-xs text-white mt-1">Subtitles</span>
                    </div>
                    <div className="flex flex-col items-center settings">
                      <button><SettingsIcon /></button>
                      <span className="text-xs text-white mt-1">Settings</span>
                    </div>
                    <div className="flex flex-col items-center miniplayer">
                      <button><Crop54Icon /></button>
                      <span className="text-xs text-white mt-1">MiniPlayer</span>
                    </div>
                    <div className="flex flex-col items-center viewMode">
                      <button>{isTheaterMode ? <Crop169Icon /> : <Crop32Icon />}</button>
                      <span className="text-xs text-white mt-1">{isTheaterMode?"Theater view(t)":"Default view(t)"}</span>
                    </div>
                    <div className="flex flex-col items-center fullscreen">
                      <button>{isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}</button>
                      <span className="text-xs text-white mt-1">{isFullScreen ?"Exit Full Screen":"Fullscreen"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <section>
            <h1>Free Sample Videos:</h1>
            <div>
              more courses videos
              
            </div>
          </section>
          </div>
      </div>

  </Dialog>
  )
}

export default VideoPlayer