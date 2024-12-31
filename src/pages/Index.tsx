import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import StoryCard from "@/components/StoryCard";
import RatingSection from "@/components/RatingSection";
import ContactForm from "@/components/ContactForm";
import { Menu } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stories = [
    {
      title: "1 Spoon and 2 Eye Balls",
      excerpt: "A shocking story about a disturbing viral video on the internet.",
      image: "https://media.istockphoto.com/id/184991366/id/foto/mata-pada-sendok.jpg?s=1024x1024&w=is&k=20&c=kxdzXYB-NQcMi-wDXISJH-Y87aC29TIJalCKKvN_HcE=",
      link: "/stories/spoon"
    },
    {
      title: "Girl in the Mirror",
      excerpt: "A young boy meets a mysterious girl who only appears in mirrors.",
      image: "https://i.pinimg.com/originals/bf/10/a4/bf10a4a1774adb5eb8c2d43fc04133a2.jpg",
      link: "/stories/mirror"
    },
    {
      title: "You Are My Next Internet Star",
      excerpt: "A Japanese student discovers a terrifying website.",
      image: "https://w0.peakpx.com/wallpaper/1014/179/HD-wallpaper-you-re-next-grim-reaper-dog-tags-ring.jpg",
      link: "/stories/star"
    },
    {
      title: "Endless Loop in the Desert",
      excerpt: "A man trapped in a nightmarish desert loop.",
      image: "https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/0e98d7cb-0ffd-462d-88e8-8285a041b7b8/DallEGeneratedImages/dalle-b6b7cea1-2627-4805-a841-2f016ff7690c0251685071212913652900.jpg",
      link: "/stories/desert"
    },
    {
      title: "Her Old Piano",
      excerpt: "A mysterious piano with a dark secret.",
      image: "https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/0e98d7cb-0ffd-462d-88e8-8285a041b7b8/DallEGeneratedImages/dalle-c650894c-50da-42c4-8f14-7696f9c78b090251685070677547255700.jpg",
      link: "/stories/piano"
    },
    {
      title: "I'm Behind You... Turn Around",
      excerpt: "A terrifying night alone at home.",
      image: "https://cdn.gencraft.com/prod/user/e0b9a798-b13a-4431-bff7-451215008a71/bf7898d1-41ee-40bf-a6f8-ed03f4186fbe/image/image0_0.jpg",
      link: "/stories/behind-you"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-white text-xl font-bold">Horror Stories</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
                <a href="#stories" className="text-gray-300 hover:text-white px-3 py-2">Stories</a>
                <a href="#ratings" className="text-gray-300 hover:text-white px-3 py-2">Ratings</a>
                <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white"
              >
                <Menu />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2">Home</a>
              <a href="#stories" className="text-gray-300 hover:text-white block px-3 py-2">Stories</a>
              <a href="#ratings" className="text-gray-300 hover:text-white block px-3 py-2">Ratings</a>
              <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://media.istockphoto.com/id/1022236966/photo/conceptual-background-on-history-education-literature-topics.jpg?s=612x612&w=0&k=20&c=YMti30QgV34p8S60u9s0I4NY4FmEqL-J9LE2uJcJTQE=')",
            filter: "brightness(0.3)"
          }}
        />
        <div className="z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Read Something That Matters</h1>
          <p className="text-xl text-gray-300 mb-8">Stop Wasting Valuable Time With Stories That Just Aren't You.</p>
          <Button 
            size="lg" 
            className="bg-red-700 hover:bg-red-800 text-white"
            asChild
          >
            <a href="#stories">Read Stories</a>
          </Button>
        </div>
      </div>

      {/* Stories Section */}
      <section id="stories" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <StoryCard key={index} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* Ratings Section */}
      <section id="ratings" className="py-20 bg-gray-800">
        <div className="max-w-3xl mx-auto px-4">
          <RatingSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-white"><i className="fa fa-instagram"></i></a>
            <a href="#" className="hover:text-white"><i className="fa fa-snapchat"></i></a>
            <a href="#" className="hover:text-white"><i className="fa fa-pinterest-p"></i></a>
            <a href="#" className="hover:text-white"><i className="fa fa-linkedin"></i></a>
          </div>
          <p>&copy; 2024 Horror Stories. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;