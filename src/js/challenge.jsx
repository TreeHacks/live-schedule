import React, { useEffect, useState } from "react";
import { emojify } from "react-emojione";
import Remarkable from "remarkable";

const md = new Remarkable({
  breaks: true,
  linkify: true
});

export default function Challenge({ match }) {
  const [content, setContent] = useState("");
  const challengeId = match.params.challengeId;

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/TreeHacks/challenges-2020/master/${challengeId}.md`
    )
      .then(r => r.text())
      .then(raw => {
        setContent(
          md.render(
            emojify(raw.replace(/<!--[^>]*-->/g, ""), { output: "unicode" })
          )
        );
      })
      .catch(e => {
        setContent(`Failed to load: ${e}`);
      });
  }, [challengeId]);

  return (
    <div
      className="container challenge"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
