import React from "react";
import { Card } from "../Card/Card.component";
import "./CardList.style.css";

export const CardList = ({ monsters }) => {
  return (
    <div className={"card-list"}>
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};
