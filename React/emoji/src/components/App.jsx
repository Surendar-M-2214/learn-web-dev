import React from "react";
import Emoji from "../emojipedia"
import Entry from "./Entry";

console.log(Emoji)
console.log("hi")
function CreateEmoji(emoji){
  return(
    <Entry 
   icon={emoji.emoji}
    name={emoji.name}
    meaning={emoji.meaning}

    />
  )
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
{Emoji.map(CreateEmoji)}
        
      </dl>
    </div>
  );
}

export default App;
