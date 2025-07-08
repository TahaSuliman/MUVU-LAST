"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

// Custom CSS for smooth transitions
const styles = `
@keyframes slideUp {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  10% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  90% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-100%);
    opacity: 0;
  }
  90% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
  }
}

.carousel-container {
  position: relative;
  overflow: hidden;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide.active {
  opacity: 1;
  transform: translateY(0);
}

.carousel-slide.next {
  animation: slideUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.carousel-slide.prev {
  animation: slideDown 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.carousel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(9, 32, 63, 0.1);
  transition: opacity 0.5s ease-in-out;
}

.carousel-overlay.active {
  animation: fadeIn 0.5s ease-in-out forwards;
}

.carousel-overlay.prev {
  animation: fadeOut 0.5s ease-in-out forwards;
}
`

interface VerticalCarouselProps {
  images: string[]
  altText: string
}

export default function VerticalCarousel({ images, altText }: VerticalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => {
          const next = (prev + 1) % images.length
          setNextIndex(next)
          return next
        })
      }, 500) // Delay before changing index to allow animation
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  useEffect(() => {
    // Add custom styles to the document
    const style = document.createElement('style')
    style.textContent = styles
    document.head.appendChild(style)
    return () => style.remove()
  }, [])

  return (
    <div className="carousel-container relative h-full overflow-hidden">
      {/* Current slide */}
      <div className={`carousel-slide ${transitioning ? 'prev' : 'active'}`}>
        <Image
          src={images[currentIndex]}
          alt={altText}
          fill
          className="object-cover"
        />
        <div className={`carousel-overlay ${transitioning ? 'prev' : 'active'} absolute inset-0`} />
      </div>

      {/* Next slide */}
      {transitioning && (
        <div className="carousel-slide next">
          <Image
            src={images[nextIndex]}
            alt={altText}
            fill
            className="object-cover"
          />
          <div className="carousel-overlay next absolute inset-0" />
        </div>
      )}
    </div>
  )
}
