import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "High Shine Auto Detail",
    tagline: "Your Car Deserves The Best",
    phone: "(209) 345-0595",
    phoneHref: "tel:+12093450595",
    email: "info@highshineautodetail.com",
    address: "1400 N 9th St, Modesto, CA 95350, USA",
    city: "Modesto",
    serviceAreas: ["Modesto", "Ceres", "Turlock", "Salida", "Riverbank"],
    license: "CA Business License #123456",
    since: "2010",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "noir",
    niche: "auto-detailing",
  },

  services: [
    { icon: "sparkles", title: "Ceramic Coating", desc: "Long-lasting protection and incredible gloss for your vehicle's paint.", urgent: false },
    { icon: "wrench", title: "Paint Correction", desc: "Remove swirls, scratches, and imperfections to restore your car's finish.", urgent: false },
    { icon: "truck", title: "Full Detail Package", desc: "Comprehensive interior and exterior cleaning for a showroom finish.", urgent: false },
    { icon: "home", title: "Interior Detail", desc: "Deep cleaning and conditioning for a fresh and spotless cabin.", urgent: false },
    { icon: "shield-check", title: "PPF (Paint Protection Film)", desc: "Invisible film protecting your paint from chips, scratches, and road debris.", urgent: false },
    { icon: "scissors", title: "Window Tinting", desc: "Enhance privacy, reduce heat, and protect your interior from UV rays.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Modesto, CA", stars: 5, text: "High Shine Auto Detail did an incredible ceramic coating on my Tesla Model 3 last month. The car looks better than new, and the water just beads right off. It was worth every penny for the protection and the amazing finish!" },
    { name: "Mark T.", location: "Ceres, CA", stars: 5, text: "Had a full detail package done on my truck before selling it. They transformed it! The interior looked brand new, and the exterior shine was fantastic. Got a great price for the truck thanks to their amazing work." },
    { name: "Jessica R.", location: "Turlock, CA", stars: 5, text: "My car had so many swirl marks, but High Shine's paint correction service made it look flawless. The team was professional, explained everything clearly, and delivered outstanding results. Highly recommend them!" }
  ],

  trustBadges: [
    "IDA Certified Detailers", "XPEL Certified Installers", "5-Star Rated", "Premium Products Used", "Experienced Technicians"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Cars Detailed", suffix: "+", decimals: 0 },
    { value: 14, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Certified Pros", desc: "Our technicians are highly trained and certified in the latest detailing techniques." },
    { icon: "sparkles", title: "Showroom Finish", desc: "We use premium products and meticulous methods to achieve an unparalleled shine." },
    { icon: "shield-check", title: "Long-Lasting Protection", desc: "From ceramic coatings to PPF, we offer solutions that protect your investment." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work and ensure you're thrilled with the results." },
    { icon: "clock", title: "Efficient Service", desc: "We work diligently to get your vehicle back to you looking pristine and on time." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Clear, upfront quotes with no hidden fees, so you know exactly what to expect." }
  ],

  formServiceOptions: ["Ceramic Coating", "Paint Correction", "Full Detail Package", "Interior Detail", "PPF (Paint Protection Film)", "Window Tinting"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!