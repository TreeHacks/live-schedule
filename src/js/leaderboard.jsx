import React from "react";
import { hackpacks } from "./content.json";

function Leaderboard() {
  return (
    <div id="leaderboard" className="section">
      <h1 className="section-heading">Leaderboard</h1>
      <hr />
      <p>
        Welcome to the TreeHacks leaderboard! Hackers compete individually
        against one another, and at the end of TreeHacks, individuals at the top
        of the leaderboard will earn a special prize. Earn points and move up
        the leaderboard by attending workshops, speaker events, HackX events,
        and more!
        <br />
        <br />
        To earn points, simply scan your ID badge with a TreeHacks organizer
        stationed at the entrance of each event. Your points will automatically
        be updated, and you can view your ranking on either the TreeHacks mobile
        app or the online leaderboard.
        <br />
        <br />
        You can earn points for virtually any event throughout the duration of
        TreeHacks! To find a full list of events, visit the event schedule on
        the TreeHacks mobile app.
      </p>
    </div>
  );
}

export default Leaderboard;
