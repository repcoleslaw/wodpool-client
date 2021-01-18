import React from 'react'

import {Collapse, Button, Modal} from 'antd'
const { Panel } = Collapse;

const text = `  A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.`

;


const uploadModal = () => {
  return(
    <Modal>

    </Modal>
  )
}

function Workouts() {
  return (
    <div>
        <Collapse >
    <Panel header="Week 1" key="1" >
      <p>{text}</p>
      <Button>Download</Button>
      <Button>Upload</Button>
    </Panel>
    <Panel header="Week 2" key="2">
      <p>{text}</p>
      <Button>Download</Button>
      <Button>Upload</Button>
    </Panel>
    <Panel header="Week 3" key="3">
      <p>{text}</p>
      <Button>Download</Button>
      <Button>Upload</Button>
    </Panel>
    <Panel header="Week 4" key="4">
      <p>{text}</p>
      <Button>Download</Button>
      <Button>Upload</Button>
    </Panel>
    <Panel header="Week 5" key="5">
      <p>{text}</p>
      <Button>Download</Button>
      <Button>Upload</Button>
    </Panel>
  </Collapse>,
    </div>
  )
}

export default Workouts
