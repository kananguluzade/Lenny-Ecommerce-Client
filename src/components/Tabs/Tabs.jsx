import React from "react";
import './Tabs.scss';
import { Tabs as TabsComponent } from "antd";

const Tabs = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Detail Product`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `Merchant`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Reviews`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "4",
      label: `Related Product`,
      children: `Content of Tab Pane 4`,
    },
  ];
  return (
    <div>
      <TabsComponent defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default Tabs;
