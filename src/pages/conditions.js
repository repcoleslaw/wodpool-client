import React, { useState } from "react";
import { Link } from "react-router-dom";

import {Radio, Button} from 'antd';

function Conditions(props) {
  const [read, setRead] = useState(false);

  return (
    <div>
      This is the conditions screen that all new users will see on first signup.
      The will read this page, and hit next.
      <Radio onChange={setRead(true)}>
        I have read and agree to the terms of service
      </Radio>
      <Button disabled={!read}>
        <Link to="/home">Go To Home</Link>
      </Button>
    </div>
  );
}

export default Conditions;
