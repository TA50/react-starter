import { Theme } from '@mui/material';
import { SxStyles } from './core/types/index';

export const appStyles: SxStyles = {

        app: {
            bgcolor: "#e2e2e280",
            width: "100vw",
            height: "100vh",
            "& tbody tr": {
                cursor: "pointer",
                "&:hover": {
                    bgcolor: "gray[200]"
                    // backgroundColor: theme.palette.grey[200]
                }
            }
        },
    
}
