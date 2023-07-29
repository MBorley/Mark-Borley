import { useState } from "react";

const Emoji = () => {
    const emojis = ['😊', '😢'];
    const [emojiIndex, setEmojiIndex] = useState(0);

    const changeMood = () => {
        let nextIndex = emojiIndex + 1;
        console.log(nextIndex);
        if (nextIndex == emojis.length)
            nextIndex = 0;
        setEmojiIndex(nextIndex);

    };

    return (
        <div>
            <span role="img" aria-label="emoji">{emojis[emojiIndex]}</span>
            <button onClick={changeMood}>Change Mood</button>
        </div>
    );
}

export default Emoji;