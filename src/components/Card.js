import React, { useState } from 'react';
import EditTask from '../modals/EditTask';
import { Card as MUICard, CardContent, CardHeader, Button, Checkbox } from '@mui/material';

const Card = ({ taskObj, index, deleteTask, updateListArray, toggleComplete }) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ];

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    const handleDelete = () => {
        deleteTask(index);
    };

    return (
        <MUICard style={{ margin: '10px', backgroundColor: colors[index % 5].secondaryColor }}>
            <CardHeader
                style={{ backgroundColor: colors[index % 5].primaryColor, borderRadius: '5px' }}
                title={taskObj.Name}
                action={
                    <Checkbox
                        checked={taskObj.completed}
                        onChange={() => toggleComplete(index)}
                    />
                }
            />
            <CardContent>
                <p style={{ textDecoration: taskObj.completed ? 'line-through' : 'none' }}>
                    {taskObj.Description}
                </p>
                <Button color="primary" onClick={() => setModal(true)}>Edit</Button>
                <Button color="secondary" onClick={handleDelete}>Delete</Button>
            </CardContent>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </MUICard>
    );
};

export default Card;
