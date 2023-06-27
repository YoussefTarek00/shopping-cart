import React from "react";
import { Row, Col } from "react-bootstrap";
import storeitems from "../data/storeitems.json"
import StoreItem from "./StoreItem";
const Store = () => {
  return (
    <>
      <h2>Store</h2>
      <Row md={2} xs={1} lg={3} className="g-3">
    {storeitems.map((item) => (
      <Col key={item.id}>
        <StoreItem  {...item}/>
      </Col>
    ))}
      </Row>
    </>
  );
};

export default Store;
