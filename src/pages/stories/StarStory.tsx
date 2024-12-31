import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StarStory = () => {
  return (
    <div className="min-h-screen bg-gray-600 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-[rgb(248,247,247)] p-8 rounded-lg shadow-lg">
        <Link to="/">
          <Button variant="outline" className="mb-6">
            ← Back to Stories
          </Button>
        </Link>
        
        <img 
          src="https://w0.peakpx.com/wallpaper/1014/179/HD-wallpaper-you-re-next-grim-reaper-dog-tags-ring.jpg" 
          alt="YOU ARE MY NEXT INTERNET STAR"
          className="mx-auto w-2/5 rounded-lg mb-6"
        />
        
        <h1 className="text-center text-4xl font-bold mb-6 text-[#801b6a]">
          YOU ARE MY NEXT INTERNET STAR
        </h1>
        
        <hr className="border-t-2 border-gray-300 my-6" />
        
        <p className="mb-8"><b>Excerpt: Internet Star is a creepy story about a Japanese girl who visits a scary website and gets the fright of her life.</b></p>
        
        <div className="space-y-4 text-justify text-lg leading-relaxed">
          <p>A 19-year old girl was attending university in Japan.</p>
          
          <p>In her second year of study, she decided that she wanted to improve her English, so she transferred to a university in the United States. She had always wanted to live in the USA, but she did not anticipate how difficult the change would be for her.</p>
          
          <p>The course she was studying required her to submit a lot of reports. While she was attending the university in Japan, she submitted all her reports in Japanese. However, in the American university, all of the reports had to be in English. This caused a big problem for the girl because her command of the English language was not very good. She found that she had to spend hours upon hours checking the spelling and grammar, while typing up her reports.</p>
          
          <p>Another problem was that she didn't own a laptop. Luckily, the university library had a computer lab with approximately 50 computers that was open 24 hours a day. Unfortunately, there were always long queues of people waiting to use them. Every morning, she had to attend lectures and, every evening, she had to queue for a computer. This all took its toll and, after a while, the girl became fed up with the daily grind.</p>
          
          <p>Late one night, after the Japanese girl had been sitting over a computer for hours, she began to get restless. It was almost 2 AM and she was extremely tired. It was getting difficult for her to keep her eyes open. Leaning back in her chair, she yawned and stretched out her arms in front of her. Her fingers happened to nudge the computer keyboard aside.</p>
          
          <p>She was about to begin typing again when she happened to glance down and noticed a bit of paper, that there was something scratched into the desk under the keyboard. It seemed to be an Internet URL. She thought it was odd that someone had taken the time to find a Website address. With curiosity and boredom, she decided to look it up.</p>
          
          <p>After typing the website address into the browser, she waited a few seconds and a page appeared on the screen. What she saw horrified her.</p>
          
          <p>There was a picture of man covered in blood, lying on the floor of a dimly-lit room. It looked so real that it turned her stomach and made her feel like throwing up. Looking closely, she saw a caption below the image.</p>
          
          <p>It read: "Dumb guy, aged around 30. Killed by me today."</p>
          
          <p>A chill went down her spine as she stared at the gruesome picture.</p>
          
          <p>The girl immediately shut down her computer and, grabbing her handbag, she hurried out of the computer lab. She returned to her dorm room alone and spent the night tossing and turning in bed. The horrible photo she had seen was never far from her mind.</p>
          
          <p>"Could it be real?" she asked herself. Maybe it's just a imagination. People post crazy pictures on the Internet all the time. The Web is full of weird and disturbing Websites.</p>
          
          <p>The next morning, after breakfast, her curiosity got the better of her. She skipped her first lecture and headed straight for the computer labs. When she found a free computer, she sat down, typed in the URL and held her breath. Perhaps what she had seen last night was just her imagination.</p>
          
          <p>When the Website appeared, she saw that the image had changed. Instead of a dead body in a dimly-lit room, the photo showed a blond woman walking down a busy street. The girl breathed a sigh of relief. The picture appeared to have been taken from a distance and the woman seemed unaware that she was being photographed.</p>
          
          <p>The caption underneath read: "Stupid woman, around 25 years old."</p>
          
          <p>That evening, the girl went back to her dorm room and didn't speak to anyone. She was still unnerved and couldn't stop thinking about the strange website. As soon as she woke up the next morning, she dressed and went back to the computer lab.</p>
          
          <p>There was hardly anyone around. She sat down at a free computer and typed in the website URL. To her horror, the image had changed again. It was the same dimly-lit room, but this time a blond woman lay on the floor. Blood was flowing from her nose and mouth. There was a large knife sticking out of her chest.</p>
          
          <p>Under the photo were the words: "Stupid woman, around 25 years old. Killed by me today."</p>
          
          <p>The girl was horrified and immediately contacted the police. Over the phone, it was difficult for her to explain the situation. Her English was not very good and she spent a long time repeating herself and trying to find the right words to describe what she had found. In the end, she wasn't even sure if the police had understood what she was trying to say. However, they took her name, address, phone number and the URL of the Website.</p>
          
          <p>When she hung up the phone, the girl was shaking. She couldn't seem to get the awful pictures out of her mind.</p>
          
          <p>She had to take another look. That evening, she returned to the computer lab again and, with mixed feelings of fear and curiosity, she entered the URL of the website.</p>
          
          <p>When the page loaded, she discovered that the image that had been there just a few hours before, was gone. Instead, there was a picture of a girl, taken from behind. She had short, black hair, a lime-green t-shirt and was sitting in front of a computer.</p>
          
          <p>The girl got a sinking feeling in the pit of her stomach and she broke out into a cold sweat. She recognized the hair. She recognized the clothes. She was staring at a picture of herself.</p>
          
          <p>Her name, address and phone number were written under the picture, followed by a single sentence:</p>
          
          <p>"You are my next internet star..."</p>
          
          <p>The Japanese girl ran out of the computer lab and went straight back to her dorm room. She packed up her belongings and, by the next morning, she was on a flight back to Japan. She never returned to the United States again.</p>
        </div>
      </div>
    </div>
  );
};

export default StarStory;