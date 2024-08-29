//carousel/src/Card.test.js
import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

const TEST_CARD = {
  caption: "Test Caption",
  src: "test.jpg",
  currNum: 1,
  totalNum: 3
};

it("renders Card component without crashing", () => {
  render(<Card {...TEST_CARD} />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Card {...TEST_CARD} />);
  expect(asFragment()).toMatchSnapshot();
});