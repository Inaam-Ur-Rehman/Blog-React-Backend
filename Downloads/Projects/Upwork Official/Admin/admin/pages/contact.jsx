import React from "react";
import {useQuery} from "react-query";
import * as api from "../utils/queries";
import {Box, Collapse, List, ListItemButton, ListItemText, Modal, Typography} from "@mui/material";
import {styled} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

const Contact = () => {

    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(null);

    const columns = [
        { field: 'name', headerName: 'Full Name', width: 230 },
        { field: 'email', headerName: 'Email Address', width: 230 },
        { field: 'subject', headerName: 'Subject', width: 400},
        { field: 'description', headerName: 'Description', width: 400},
    ];

    const ContactContainer = styled(Box) (({theme}) => ({
        display: "flex",
        padding: "20px 10px",
        borderRadius: "4px",
        width: "95%",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.default,
    }))

    const {data, isLoading, isError,error} = useQuery("contacts", api.getContacts);
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>{error}</div>
    return (
        <Box pt={6} pl={6}>
            <h2>Contact</h2>
            <div style={{ height: 400, width: '90%' }}>
                <DataGrid
                    rows={data||[]}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    getRowId={(row) => row._id}
                    onCellClick={(e) => {
                        setOpen(true);
                        setSelected(e.row);
                    }}
                />
            </div>

            <Modal open={open} onClose={() => {setOpen(false)}}>
                <Box style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "400px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    boxShadow: 24,
                    padding: "24px",
                }} p={4}>
                    <Typography style={{
                        backgroundColor: "#f5f5f5",
                        padding: "10px",
                        marginBottom: "10px",
                    }} textAlign="center" variant="h6">
                        More Details
                    </Typography>
                    <Typography variant="body1">
                        <strong>Name:</strong> {selected && selected.name}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Email:</strong> {selected && selected.email}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Subject:</strong> {selected && selected.subject}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Description:</strong> {selected && selected.description}
                    </Typography>
                </Box>
            </Modal>
        </Box>
    );
}

export default Contact;
