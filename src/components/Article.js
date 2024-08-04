import React from "react";

// Function to determine the appropriate emoji string based on reading time
function getReadingTimeEmoji(minutes) {
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    return "☕️".repeat(cups);
  } else {
    const bentos = Math.ceil(minutes / 10);
    return "🍱".repeat(bentos);
  }
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const readingTimeEmoji = getReadingTimeEmoji(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {readingTimeEmoji} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
