import React, {useState} from 'react';
import {Modal, Card, Button} from 'antd';



import app from "../base";




function Join (props) {

    const cardStyle ={
        margin:"2em",
        padding:"2em",
    }
    const hovercardStyle ={
        margin:"2em",
        padding:"2em",
        boxShadow:"5px 5px 8px #eeeeee"
    }

    const [modal, setModal] = useState(false);

    
    const handleModal = (e) => {
        setModal(true);

    }

    const handleModalOk = (e) =>{
        setModal(false);
    }

    const handleModalClose = (e) =>{
        setModal(false);
    }

    



    return (
        <>
            <Card style={cardStyle} hoverable={hovercardStyle}>
                <h1>{props.name}</h1>
                <Button onClick={handleModal}>Join</Button>
                {props.max}

 
            </Card>
            <Modal
                title={props.name}
                visible={modal}
                onOk={handleModalOk}
                onCancel={handleModalClose}
                okText="Join!"
            >
                <h1>{props.name}</h1>
                <p style={{color:"grey"}}>pool id: {props.id}</p>
                <p></p>
                
            </Modal>

        </>
    )
}

export  {Join}
