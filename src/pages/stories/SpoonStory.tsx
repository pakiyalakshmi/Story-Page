import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SpoonStory = () => {
  return (
    <div className="min-h-screen bg-gray-600 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-[rgb(228,216,216)] p-8 rounded-lg shadow-lg">
        <Link to="/">
          <Button variant="outline" className="mb-6">
            ← Back to Stories
          </Button>
        </Link>
        
        <img 
          src="https://media.istockphoto.com/id/184991366/id/foto/mata-pada-sendok.jpg?s=1024x1024&w=is&k=20&c=kxdzXYB-NQcMi-wDXISJH-Y87aC29TIJalCKKvN_HcE=" 
          alt="1 Spoon 2 Eyeball"
          className="mx-auto w-2/5 rounded-lg mb-6"
        />
        
        <h1 className="text-center text-4xl font-bold mb-6 text-[rgb(158,92,123)]">
          1 Spoon And 2 Eye Balls
        </h1>
        
        <hr className="border-t-2 border-gray-300 my-6" />
        
        <div className="space-y-4 text-justify text-lg leading-relaxed">
          <p><span className="text-xl font-bold">Excerpt:</span> 2 Spoons and My 2 Eye Balls is a scary story about a shocking viral video on the internet. They say it's the most disgusting and disturbing video ever made.</p>
          
          <p>There are all kinds of shocking videos on the internet, showing people doing sick, disgusting and horrific things. For some reason, people watch the videos and then post their reactions on Youtube. Perhaps you've heard of some of the shock videos.</p>
          
          <p>They usually have weird titles like: 3 Guys 1 Crowbar, 2 Girls 1 Poop and 1 Man 1 Cactus.</p>
          
          <p>I've watched every one of them, but today I watched one video that is more disturbing than all of the rest put together.</p>
          
          <p>The title of the video is: 1 Guy 2 Spoons.</p>
          
          <p>You're probably already wondering what it's about, but let me assure you, it's far more disgusting than anything you can think up. It shows a man using 2 spoons to pop out his eyeballs. Yes, that's right. He actually digs in behind his own eyeballs and pops them out of his head using the spoons.</p>
          
          <p>When I watched the video, I was so disturbed by it that I almost threw up. As sickening as the video was, I forced myself to watch it to the end. I wish I hadn't.</p>
          
          <p>Here's a good piece of advice for you: Be careful what you watch, because that which you see can never be unseen.</p>
          
          <p>When the video was over, I heard my mom calling me from downstairs, telling me that dinner was ready. I raced downstairs and took a seat at the kitchen table. My father was reading the newspaper. My mother was setting the table.</p>
          
          <p>"That's odd," my father remarked. "This article claims there's a new viral video going around on the internet. They say it's dangerous. Apparently, it causes anyone who sees it to go insane and try to pop out their own eyeballs…"</p>
          
          <p>My father broke off and looked up.</p>
          
          <p>"Oh my God!" my mother screamed and fainted. "Oh my God! What have you done?" My father, with high peak of tension and with fear, approached me.</p>
          
          <p>But it was already too late.</p>
          
          <p>I could feel the spoons in my hands, but I couldn't see a thing. Because my eyeballs are in the spoons of my hand.</p>
        </div>
      </div>
    </div>
  );
};

export default SpoonStory;