import React, {
    useState,
    useEffect,
    useRef
  } from "react";
import './style.css'
  function getCurrentFrame(index) {
    // return `/carimage/ezgif-frame-${index.toString()}.jpg`;
    return `https://github.com/marcelo0410/Misc/blob/151b4e2be95cb242d3b90a830b0bfc6e2426836e/ezgif-frame-${index.toString()}.jpg?raw=true`
    // return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    //   .toString()
    //   .padStart(4, "0")}.jpg`;
  }
  
const Ani = ({ scrollHeight, numFrames, width, height }) => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [frameIndex, setFrameIndex] = useState(0);
  
    function preloadImages() {
      for (let i = 1; i <= numFrames; i++) {
        const img = new Image();
        const imgSrc = getCurrentFrame(i);
        img.src = imgSrc;
        setImages((prevImages) => [...prevImages, img]);
      }
    }
  
    const handleScroll = () => {
      const scrollFraction = window.scrollY / (scrollHeight - window.innerHeight);
      const index = Math.min(
        numFrames - 1,
        Math.ceil(scrollFraction * numFrames)
      );
  
      if (index <= 0 || index > numFrames) {
        return;
      }
  
      setFrameIndex(index);
    };
  
    const renderCanvas = () => {
      const context = canvasRef.current.getContext("2d");
      context.canvas.width = width;
      context.canvas.height = height;
    };
  
    useEffect(() => {
      preloadImages();
      renderCanvas();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    useEffect(() => {
      if (!canvasRef.current || images.length < 1) {
        return;
      }
  
      const context = canvasRef.current.getContext("2d");
      let requestId;
  
      const render = () => {
        context.drawImage(images[frameIndex], 0, 0);
        requestId = requestAnimationFrame(render);
      };
  
      render();
  
      return () => cancelAnimationFrame(requestId);
    }, [frameIndex, images]);
  
    return (
      <div style={{ height: scrollHeight }}>
        <canvas ref={canvasRef} className="cc"/>
        {/* <img src={require("../carimage/ezgif-frame-1.jpg")}></img> */}
      </div>
    );
  }
  export default Ani
  