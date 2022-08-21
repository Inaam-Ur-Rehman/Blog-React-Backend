import React from "react";
import {useQuery} from "react-query";
import * as api from "../../utils/queries";
import {DataGrid} from "@mui/x-data-grid";
import {Box, Modal, Typography} from "@mui/material";
import {useRouter} from "next/router";


const Index = () => {

    const router = useRouter();

    const columns = [
        { field: 'firstName', headerName: 'First Name', width: 230 },
        { field: 'lastName', headerName: 'Last Name', width: 230 },
        { field: 'email', headerName: 'Email Address', width: 400},
        { field: 'company', headerName: 'Company', width: 400},
    ];

    const {data, isLoading, isError,error} = useQuery("rfqs", api.getRfqs);
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>{error}</div>
    return (
        <Box pt={6} pl={6}>
            <h2>RFQS</h2>
            <div style={{ height: 400, width: '90%' }}>
                <DataGrid
                    rows={data||[]}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    getRowId={(row) => row._id}
                    onRowClick={async (e)=>{
                        console.log(e.row)
                        await router.push({
                            pathname: `/rfqs/[id]`,
                            query: {
                                id: e.row._id
                            }
                        })
                    }}
                />
            </div>
        </Box>
    );
}

export default Index;
