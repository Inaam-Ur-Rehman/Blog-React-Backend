import React from "react";
import {Box, Card, CardMedia, Typography} from "@mui/material";
import {useRouter} from "next/router";
import {useQuery} from "react-query";

import * as api from "../../utils/queries";


const Rfq = () => {
    const router = useRouter();
    const {data, isLoading, isError,error} = useQuery(["rfq", router.query.id],
        ()=>api.getRfqById(router.query.id)
        );

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>{error[0]}</div>
    return (
        <Box pt={6} pl={6}>
            <h2>RFQ</h2>
            <Typography variant="h6">
                <span style={{
                    fontWeight: "bold"
                }}>Name: </span>
                {data.firstName} {data.lastName}
            </Typography>
            <Typography variant="h6">
                 <span style={{
                     fontWeight: "bold"
                 }}>Company Name: </span>
                 {data.company}
            </Typography>
            <Typography variant="h6">
                 <span style={{
                     fontWeight: "bold"
                 }}>Email Address: </span>
                 {data.email}
            </Typography>
            <Typography variant="h6">
                 <span style={{
                     fontWeight: "bold"
                 }}>Contact: </span>
                 {data.phone}
            </Typography>
            <Typography variant="h6">
                 <span style={{
                     fontWeight: "bold"
                 }}>Gender: </span>
                {
                    data?.gender?.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </Typography>
            <Typography variant="h6">
                 <span style={{
                     fontWeight: "bold"
                 }}>Type: </span>
                {
                    data?.type?.map((item, index) => {
                        return <li key={index}>{item}, </li>
                    })
                }
            </Typography>
            <Typography variant="h6" mt={5}>
                 <span style={{
                     fontWeight: "bold"
                 }}>Front Image: </span>
                <Card sx={{maxWidth: 500, maxHeight: 400}}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={data.frontImage}
                        alt="Paella dish"
                    />
                </Card>
            </Typography>
            {
                data.backImage && (
                    <Typography variant="h6" mt={5}>
                 <span style={{
                     fontWeight: "bold"
                 }}>Back Image: </span>
                        <Card sx={{maxWidth: 500, maxHeight: 400}}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={data.backImage}
                                alt="Paella dish"
                            />
                        </Card>
                    </Typography>
                )
            }
            {
                data.mockUp && (
                    <Typography variant="h6" mt={5}>
                 <span style={{
                     fontWeight: "bold"
                 }}>Mockup Image: </span>
                        <Card sx={{maxWidth: 500, maxHeight: 400}}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={data.mockup}
                                alt="Paella dish"
                            />
                        </Card>
                    </Typography>
                )
            }
            <Typography variant="h6" mt={2}>
                 <span style={{
                     fontWeight: "bold"
                 }}>Count: </span>
                {data.count}
            </Typography>
            <Typography variant="h6">
                 <span style={{
                     fontWeight: "bold"
                 }}>Rating: </span>
                {data.rating}
            </Typography>
        </Box>
    );
}

export default Rfq;
