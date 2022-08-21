import React,{useState} from "react";
import AdminLayout from "../layouts/AdminLayout";
import {
    Box, Button,
    Collapse, FormControl,
    List,
    ListItemButton,
    ListItemText, Modal, Stack, TextField,
    Typography
} from "@mui/material";

import {MdEdit} from "react-icons/md";
import {useQuery, useMutation, useQueryClient} from "react-query";
import * as api from "../utils/queries";



const Services = () => {
    const [open, setOpen] = useState(false);
    const [openSub, setOpenSub] = useState(false);
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [url, setUrl] = useState("");
    const [subUrl, setSubUrl] = useState("");
    const [id, setId] = useState("");

    const queryClient = useQueryClient();

    const {data, isLoading, isError,error} = useQuery("services", api.getServices,);
    const mutation = useMutation(api.addService,{
        onSuccess: async (data) => {
            await queryClient.invalidateQueries("services");
            setOpen(false);
            setTitle("");
            setSubTitle("");
        }
    });

    const submenuMutation = useMutation(api.addServiceSub,{
        onSuccess: async (data) => {
            await queryClient.invalidateQueries("services");
            setOpenSub(false);
            setSubTitle("");
            setSubUrl("");
            setId("")
        }
    });



    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>{error}</div>


    return (
        <Box pt={6} pl={6}>
            <Stack direction="row" gap={4}>
                <Typography variant="h4">
                    Services
                </Typography>
                <Button onClick={()=>setOpen(true)} startIcon={<MdEdit/>} color="primary" variant="contained" size="small">
                    Add Service
                </Button>
            </Stack>
            <List

                sx={{ width: '90%', marginTop: "20px", backgroundColor: "#fff" }}
            >
                {data ? data.map(item => (
                    <Box key={item._id} >
                        <ListItemButton onClick={()=>{
                            setId(item._id);
                            setOpenSub(true);

                        }}>
                            <ListItemText primary={item.title} />
                            <MdEdit/>
                        </ListItemButton>
                        {
                            item.submenu && item.submenu.map(subitem => (
                                <Collapse key={subitem._id} in={true} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText primary={subitem.title} />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            ))
                        }
                    </Box>
                )): ""}
            </List>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    backgroundColor: 'white',
                    borderRadius:'5px',
                    boxShadow: 24,
                    padding: '24px',
                }}>
                    <Typography variant="h6" component="h2" textAlign="center" mb={5}>
                       Add Service
                    </Typography>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        mutation.mutate({
                            title: title,
                            url: url,
                        });
                    }}
                    >
                        <TextField
                            helperText="Please enter title"
                            label="Title"
                            fullWidth={true}
                            style={ { marginBottom: '12px' } }
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                        />
                        <TextField
                            helperText="Please enter URL"
                            label="URL"
                            fullWidth={true}
                            value={url}
                            onChange={(e)=>setUrl(e.target.value)}
                        />
                        <Button type="submit" variant="contained" style={{
                            marginTop: '12px',
                        }} color="primary" fullWidth={true} >
                            {
                                mutation.isLoading ? "Adding..." : "Add Service"
                            }
                        </Button>
                    </form>
                </Box>
            </Modal>
            <Modal
                open={openSub}
                onClose={() => setOpenSub(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    backgroundColor: 'white',
                    borderRadius:'5px',
                    boxShadow: 24,
                    padding: '24px',
                }}>
                    <Typography variant="h6" component="h2" textAlign="center" mb={5}>
                       Add Service Sub Menu
                    </Typography>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        submenuMutation.mutate({
                            id,
                            submenu:[
                                {
                                    title: subTitle,
                                    url: subUrl,
                                }
                            ]
                        });
                    }}
                    >
                        <TextField
                            helperText="Please enter title"
                            label="Title"
                            fullWidth={true}
                            style={ { marginBottom: '12px' } }
                            value={subTitle}
                            onChange={(e)=>setSubTitle(e.target.value)}
                        />
                        <TextField
                            helperText="Please enter URL"
                            label="URL"
                            fullWidth={true}
                            value={subUrl}
                            onChange={(e)=>setSubUrl(e.target.value)}
                        />
                        <Button type="submit" variant="contained" style={{
                            marginTop: '12px',
                        }} color="primary" fullWidth={true} >
                            {
                                submenuMutation.isLoading ? "Adding..." : "Add Sub Menu"
                            }
                        </Button>
                    </form>
                </Box>
            </Modal>
        </Box>
    )
}
export default Services;



