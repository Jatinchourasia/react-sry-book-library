import React from "react";
import { storiesOf } from "@storybook/react";
import { Requirement } from './../components/Requirement/Requirement';


const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return (
    <div>
      <Requirement />
    </div>
  );
});
