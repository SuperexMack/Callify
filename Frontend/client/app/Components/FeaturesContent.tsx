import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Connect instantly with a secure one-on-one video calling system built using WebRTC for low latency and high-quality streaming.",
      name: "Feature 01",
      designation: "One-on-One Video Calling",
      src: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=3000&auto=format&fit=crop",
    },
    {
      quote:
        "Create or join private rooms with a unique room ID, making it easy to start calls without any complex setup.",
      name: "Feature 02",
      designation: "Room-Based Calling",
      src: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=3000&auto=format&fit=crop",
    },
    {
      quote:
        "Experience real-time audio and video synchronization with optimized peer-to-peer connections.",
      name: "Feature 03",
      designation: "Real-Time Streaming",
      src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=3000&auto=format&fit=crop",
    },
    {
      quote:
        "Simple and intuitive UI that lets users start a video call in just a few clicks—no learning curve required.",
      name: "Feature 04",
      designation: "Minimal & Clean UI",
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3000&auto=format&fit=crop",
    },
    {
      quote:
        "Built to perform reliably even on unstable networks, ensuring smooth communication without frequent drops.",
      name: "Feature 05",
      designation: "Stable Connection Handling",
      src: "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?q=80&w=3000&auto=format&fit=crop",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}