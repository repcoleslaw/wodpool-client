import React, { useState } from "react";
import { Modal, Card, Button } from "antd";

const CustomCard = ({ children }) => (
  <Card
    style={{
      margin: "2em",
      padding: "2em",
    }}
    hoverable={{
      margin: "2em",
      padding: "2em",
      boxShadow: "5px 5px 8px #eeeeee",
    }}
  >
    {children}
  </Card>
);

const Heading = ({ text }) => (text ? <h1>{text}</h1> : null);

const Pool = ({ text = "Unassigned" }) => (
  <p style={{ color: "grey" }}>Pool ID: {text}</p>
);

const Join = ({ id, max, name }) => {
  const [modal, setModal] = useState(false);

  const toggleModalState = (anticipatedStateValue) => () =>
    setModal(anticipatedStateValue);

  const handleModalOpen = toggleModalState(true);
  const handleModalClose = toggleModalState(false);

  const Name = React.createElement(Heading, {
    text: name,
  });

  return (
    <>
      <CustomCard>
        <Name />
        <Button onClick={handleModalOpen}>Join</Button>
        {max}
      </CustomCard>
      <Modal
        title={name}
        visible={modal}
        onOk={handleModalClose}
        onCancel={handleModalClose}
        okText="Join!"
      >
        <Name />
        <Pool text={id} />
      </Modal>
    </>
  );
};

Join.defaultProps = {};
Join.propTypes = {};

export default Join;
