import { Theme } from '@material-ui/core';

export const appStyles = (theme: Theme) => {
    return {
        app: {
            backgroundColor: "#e2e2e280",
            width: "100vw",
            height: "100vh",
            "& tbody tr": {
                cursor: "pointer",
                "&:hover": {
                    backgroundColor: theme.palette.grey[200]
                }
            }
        },
    }
}
