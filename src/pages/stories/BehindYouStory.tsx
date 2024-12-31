import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BehindYouStory = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" className="mb-8 text-white" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Stories
          </Link>
        </Button>
        
        <div className="bg-white rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://cdn.gencraft.com/prod/user/e0b9a798-b13a-4431-bff7-451215008a71/bf7898d1-41ee-40bf-a6f8-ed03f4186fbe/image/image0_0.jpg"
            alt="I'm Behind You... Turn Around"
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">"I'm Behind You... Turn Around..."</h1>
            <hr className="my-6 border-gray-200" />
            <div className="prose max-w-none">
              <p className="mb-4">It is night. Darkness welcomes you warmly. You are alone in your house.</p>
              <p>The rest of your family had gone out of town to attend a wedding.</p> 
              <p>Imagine you are lying in your bed. The lights are switched off; the weather outside is cool.</p> 
              <p>You look out the window to see the tree dancing to the rhythm of the graceful winds. You have your phone in your hand, it’s light; brightening your face.</p>
              <p>You look at the time. 2:00 am. It's a bit late and so you decide to sleep. The door to your room is shut.</p> 
              <p>You put your phone by your side. With its light gone; darkness engulfs your room.</p>
              <p>You close your eyes and lighten yourself, your tired body cries for some rest. As you begin drifting off to sleep a sudden tone agitates your mind. You open your eyes to find your phone flashing with light. Somebody was calling you at this time of night.</p>
              <p>You check the name, an unknown number, and so you decide to ignore; reject the call and try to go back to sleep.</p>
              <p>But the person on the other end seems adamant enough. You hear a ding; the phone’s screen shines again.</p>
              <p>You open it to find a text message from the same number. You scratch your head and try to think, slowly you click on the view message prompt. A sudden tingling sense of fear grips your mind when you read what it said.</p>
              <p>‘Open the door, I am outside’</p>
              <p>You control your fear; think maybe it's just a prank. But soon you hear a knock on the front door. You start panicking, another text greets you with a chill.</p>
              <p>"That’s me, open up… I know you are all alone."</p>
              <p>Three knocks again. This time in rapid succession seems like the person was getting impatient.</p>
              <p>You jump out of bed, take your phone in hand and decide to look out the window, it is dark; suddenly you see a shadow leaping past towards the back of the house.</p>
              <p>The phone vibrates again, a new message pops up. "Did you lock the back door?"</p>
              <p>You realize the horrifying truth and rush towards the back door near the kitchen.</p>
              <p>Through the window you see a shadow creeping up towards the door. You decide to fight this intruder and arm yourself with a frying pan.</p>
              <p>The phone gives out another cry,</p>
              <p>"Ready or not I am coming in."</p>
              <p>A sudden gush of energy rushes to your veins, you clasp the pan tightly in your hands. You hear the doorknob making a whirl, you pressed tightly together with your teeth and hide behind the door. Slowly the door opens inwards and u see a shadow on the floor creeping into the room.</p>
              <p>Moonlight enlightens the room, the stranger strides in. You are hidden, a sudden rush of energy gushes to your veins.</p> 
              <p>The pan lifts high in the air and comes crashing down on his head. He goes down, crying in pain. As he falls down moonlight lights his face, you take a look at the poor man lying on the ground.</p>
              <p>A sudden sense of fear and pain rushes through your heart. You couldn’t believe your eyes. The man struck is your uncle.</p>
              <p>He lies on the floor. You head to the kitchen and fill a glass with water. As the waterfalls on his face, he wakes up seeing you next to him.</p>
              <p>Still, in shock, he tells you that your mother had asked him to check on you.</p>
              <p>He knocked thrice but nobody opened it. He thought you were asleep and tried to check the back door when you put him in his uncomfortable situation.</p>
              <p>You are shocked, you apologize to him. You beat your mind, how could have you been so stupid.</p>
              <p>He stood up and started to leave, you made sense of all the situation. You laugh at yourself.</p>
              <p>As he left he too apologized for the inconvenience he caused. He said that he would have called you but was unable to do because he had forgotten his phone.</p>
              <p>These words stung your heart like a malicious bee. You sent your uncle and closed the door. If he didn’t send those texts then who did.</p>
              <p>Your heartbeat goes faster as the phone in your hand begins to shake. You take a look at it with your trembling hands.</p>
              <p>A new message prompt comes into your view. One look and your fear heighten.</p>
              <p>It says</p>
              <p>"I am in, look behind you."</p>
              <p>you gently turns your head with fear.</p>
              <p>There stood a mysterious black creature fully covered with a black jacket staring and smiling at you...saying that</p>
              <p>"Are you ready...?"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehindYouStory;
