import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AhlButton } from "./button";

type Color = "primary" | "success" | "danger";
type TextColor = "white" | "black" | "gray";

const meta: Meta<typeof AhlButton> = {
  title: "Components/AhlButton",
  component: AhlButton,
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "select",
      options: ["primary", "success", "danger"],
    },
    text: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof AhlButton>;

export const Basic: Story = {
  args: {
    size: "medium",
    color: "primary",
    text: "Click Me",
  },
  render: (args) => {
    const [color, setColor] = useState<Color>("primary");
    const [text, setText] = useState("Click Me");
    return (
      <div className="flex flex-col items-start gap-4">
        <AhlButton {...args} color={color} text={text} />
        <div className="flex gap-4">
          <label className="flex flex-col gap-1 text-sm font-medium">
            Color
            <select
              value={color}
              onChange={(e) => setColor(e.target.value as Color)}
              className="border rounded px-2 py-1"
            >
              <option value="primary">Primary</option>
              <option value="success">Success</option>
              <option value="danger">Danger</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-sm font-medium">
            Text
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="border rounded px-2 py-1"
            />
          </label>
        </div>
      </div>
    );
  },
};

export const Primary: Story = {
  args: { ...Basic.args, color: "primary", text: "Primary" },
};

export const Success: Story = {
  args: { ...Basic.args, color: "success", text: "Success" },
};

export const Danger: Story = {
  args: { ...Basic.args, color: "danger", text: "Danger" },
};

export const Small: Story = {
  args: { ...Basic.args, size: "small", text: "Small" },
};

export const Medium: Story = {
  args: { ...Basic.args, size: "medium", text: "Medium" },
};

export const Large: Story = {
  args: { ...Basic.args, size: "large", text: "Large" },
};
