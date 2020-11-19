import React from "react";
import { Header, Segment } from "semantic-ui-react";
import Tree from "react-d3-tree";

export default function Networks() {
  const nodeSvgShape = {
    shape: "rect",
    shapeProps: {
      width: 140,
      height: 80,
      fill: "Blue",
    },
  };

  const myTreeData = [
    {
      name: "DABID",
      attributes: {
        keyA: "IMMORTAL",
        keyB: "IMBA",
        keyC: "GAPANGBUHAT",
      },
      nodeSvgShape,
      children: [
        {
          name: "Dok",
          attributes: {
            keyA: "Challenger Player",
            keyB: "Top 1 ADC SEA",
            keyC: "WORLDS",
          },
          nodeSvgShape,
        },
        {
          name: "Brits",
          nodeSvgShape,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Networks</h1>
      <Header as="h3">Welcome!</Header>
      <Segment basic className="main-content">
        <div
          style={{
            border: "1px solid black",
            width: "85vw",
            height: "50vh",
          }}
        >
          <Tree
            data={myTreeData}
            orientation="vertical"
            pathFunc="step"
            collapsible={false}
            separation={{
              siblings: 3,
            }}
          />
        </div>
      </Segment>
    </div>
  );
}
