import "@fontsource/poppins";
import {theme} from "../utils/theme";
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import AdminLayout from "../layouts/AdminLayout";

import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools";
function MyApp({ Component, pageProps }) {
    const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <AdminLayout>
                <Component {...pageProps} />
            </AdminLayout>
            <CssBaseline/>
            <ReactQueryDevtools/>
        </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
