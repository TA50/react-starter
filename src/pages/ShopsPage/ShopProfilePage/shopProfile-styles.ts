import { makeStyles, Theme } from "@material-ui/core"

export const shopProfileStyles = makeStyles((theme:Theme)=>{ 
    return {
        root:{
            padding: theme.spacing(2)
        },
        select: {
            margin: theme.spacing(1),
            minWidth: 120,
          }
    }
})