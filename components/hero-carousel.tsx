"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"

const slides = [
	{
		id: 1,
		image: "/images/dubai-skyline.png",
		title: "MUVU General Trading",
		subtitle: "Your trusted partner in general trading",
		description: "We provide comprehensive trading solutions in the United Arab Emirates",
	},
	{
		id: 2,
		image: "/images/marine-shipping.png",
		title: "High Quality Products",
		subtitle: "Excellence in every detail",
		description: "We import and export a diverse range of high-quality products",
	},
	{
		id: 3,
		image: "/images/port-operations-new.jpg",
		title: "Marine Shipping Services",
		subtitle: "Advanced logistics solutions",
		description: "We provide comprehensive ship services across all major UAE ports",
	},
]

export default function HeroCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isAutoPlaying, setIsAutoPlaying] = useState(true)
	const [mounted, setMounted] = useState(false)
	const { t, isLoaded } = useLanguage()

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		if (!isAutoPlaying || !mounted) return
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length)
		}, 6000)
		return () => clearInterval(interval)
	}, [isAutoPlaying, mounted])

	const goToSlide = (index: number) => {
		setCurrentSlide(index)
	}
	const goToPrevious = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
	}
	const goToNext = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length)
	}
	const handleMouseEnter = () => setIsAutoPlaying(false)
	const handleMouseLeave = () => setIsAutoPlaying(true)

	// Scroll to section logic (copied from القديم)
	const scrollToSection = useCallback(
		(sectionId: string, event?: React.MouseEvent) => {
			if (event) {
				event.preventDefault()
				event.stopPropagation()
			}
			const id = sectionId.replace(/^#/, "")
			const element = document.getElementById(id)
			if (element) {
				const yOffset = -80
				const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
				window.scrollTo({ top: y, behavior: "smooth" })
			} else {
				const el = document.querySelector(sectionId.startsWith("#") ? sectionId : `#${sectionId}`)
				if (el) {
					const yOffset = -80
					const y = (el as HTMLElement).getBoundingClientRect().top + window.pageYOffset + yOffset
					window.scrollTo({ top: y, behavior: "smooth" })
				}
			}
		},
		[]
	)

	const handleDiscoverServices = useCallback(
		(event: React.MouseEvent) => {
			event.preventDefault()
			event.stopPropagation()
			scrollToSection("services", event)
		},
		[scrollToSection]
	)

	const handleContactUs = useCallback(
		(event: React.MouseEvent) => {
			event.preventDefault()
			event.stopPropagation()
			scrollToSection("contact", event)
		},
		[scrollToSection]
	)

	return (
		<div className="relative w-full h-screen overflow-hidden bg-background">
			{/* Slides Container - Fade Transition */}
			<div className="relative h-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				{slides.map((slide, index) => (
					<div
						key={slide.id}
						className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
							mounted && index === currentSlide
								? "opacity-100 z-10"
								: !mounted && index === 0
								? "opacity-100 z-10"
								: "opacity-0 z-0"
						}`}
					>
						{/* Background Image with enhanced parallax effect */}
						<div
							className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
							style={{
								backgroundImage: `url(${slide.image})`,
								transform: currentSlide === index ? "scale(1)" : "scale(1.05)",
							}}
						>
							{/* Enhanced gradient overlay with #051b38 color and reduced transparency */}
							<div
								className="absolute inset-0"
								style={{
									background: `linear-gradient(to right, rgba(5, 27, 56, 0.45), rgba(5, 27, 56, 0.25), rgba(5, 27, 56, 0.35))`,
								}}
							/>
						</div>
						{/* Content - Perfect vertical centering */}
						<div className="relative z-10 h-full flex items-center justify-center">
							<div className="container mx-auto px-16 sm:px-20 lg:px-8">
								<div className="max-w-4xl mx-auto text-center px-4 sm:px-0">
									{/* Animated content with staggered entrance */}
									<div
										className={`transition-all duration-1000 ease-out ${
											(mounted && currentSlide === index) || (!mounted && index === 0)
												? "opacity-100 translate-y-0"
												: "opacity-0 translate-y-8"
										}`}
										style={{
											transitionDelay:
												(mounted && currentSlide === index) || (!mounted && index === 0) ? "300ms" : "0ms",
										}}
									>
										{/* Subtitle */}
										<div className="mb-6 sm:mb-8">
											<span
												className="inline-block px-6 py-3 backdrop-blur-sm font-medium tracking-wide shadow-lg bg-transparent text-primary-foreground mb-6 sm:mb-8 leading-tight"
												style={{
													borderRadius: "0",
													borderBottom: "2px solid #0ea5e9",
												}}
											>
												{isLoaded ? t(`heroSubtitle${slide.id}`) : slide.subtitle}
											</span>
										</div>
										{/* Title with enhanced animation */}
										<h2
											className={`font-bold mb-6 sm:mb-8 leading-tight transition-all duration-1000 ease-out ${
												(mounted && currentSlide === index) || (!mounted && index === 0)
													? "opacity-100 translate-y-0 scale-100"
													: "opacity-0 translate-y-12 scale-95"
											}`}
											style={{
												fontSize: "3.2rem",
												color: "#0ea5e9",
												transitionDelay:
													(mounted && currentSlide === index) || (!mounted && index === 0) ? "500ms" : "0ms",
											}}
										>
											{isLoaded ? t(`heroTitle${slide.id}`) : slide.title}
										</h2>
										{/* Description */}
										<p
											className={`text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0 transition-all duration-1000 ease-out ${
												(mounted && currentSlide === index) || (!mounted && index === 0)
													? "opacity-100 translate-y-0"
													: "opacity-0 translate-y-8"
											}`}
											style={{
												transitionDelay:
													(mounted && currentSlide === index) || (!mounted && index === 0) ? "700ms" : "0ms",
											}}
										>
											{isLoaded ? t(`heroDescription${slide.id}`) : slide.description}
										</p>
										{/* CTA Buttons with enhanced animations */}
										<div
											className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 ease-out ${
												(mounted && currentSlide === index) || (!mounted && index === 0)
													? "opacity-100 translate-y-0"
													: "opacity-0 translate-y-8"
											}`}
											style={{
												transitionDelay:
													(mounted && currentSlide === index) || (!mounted && index === 0) ? "900ms" : "0ms",
											}}
										>
											<Button
												size="lg"
												className="text-primary-foreground px-8 py-4 text-lg sm:text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform w-full sm:w-auto"
												style={{ backgroundColor: "#0ea5e9", borderRadius: "0" }}
												onClick={handleDiscoverServices}
											>
												{isLoaded ? t("services") : "Our Services"}
											</Button>
											<Button
												variant="outline"
												size="lg"
												className="text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg sm:text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-sm bg-transparent w-full sm:w-auto"
												style={{
													backgroundColor: "transparent",
													borderColor: "#0ea5e9",
													borderWidth: "2px",
													borderRadius: "0",
												}}
												onClick={handleContactUs}
											>
												{isLoaded ? t("contactUs") : "Contact Us"}
											</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			{/* Navigation Arrows */}
			<Button
				variant="ghost"
				size="icon"
				className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-primary-foreground border border-primary-foreground/20 backdrop-blur-sm w-12 h-12 sm:w-14 sm:h-14 transition-all duration-300 hover:scale-110"
				onClick={goToPrevious}
				style={{ borderRadius: "0" }}
			>
				<ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
			</Button>
			<Button
				variant="ghost"
				size="icon"
				className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-primary-foreground border border-primary-foreground/20 backdrop-blur-sm w-12 h-12 sm:w-14 sm:h-14 transition-all duration-300 hover:scale-110"
				onClick={goToNext}
				style={{ borderRadius: "0" }}
			>
				<ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
			</Button>
			{/* Dots Navigation */}
			<div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20">
				<div
					className="flex space-x-3 bg-black/20 backdrop-blur-sm px-4 py-3 border border-primary-foreground/20"
					style={{ borderRadius: "0" }}
				>
					{slides.map((_, index) => (
						<button
							key={index}
							className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
								(mounted && index === currentSlide) || (!mounted && index === 0)
									? "bg-primary-foreground scale-125"
									: "bg-primary-foreground/40 hover:bg-primary-foreground/70"
							}`}
							onClick={() => goToSlide(index)}
						/>
					))}
				</div>
			</div>
			{/* Progress Bar */}
			<div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
				<div
					className="h-full bg-primary transition-all duration-300 ease-linear"
					style={{
						width: `${((currentSlide + 1) / slides.length) * 100}%`,
					}}
				/>
			</div>
		</div>
	)
}