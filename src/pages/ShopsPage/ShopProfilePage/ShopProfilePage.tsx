import { Container, Paper, Grid, TextField, Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import * as React from 'react';
import { useParams } from "react-router-dom";
import Loader from '../../../components/Loader/Loader';
import { container, enumToArray, Layouts, ServiceName, Shop } from '../../../core';
import { ShopApi } from '../../../core/API/ShopApi/ShopApi';
import { shopFormSchema } from './shopFormSchema';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { shopProfileStyles } from './shopProfile-styles';
import Layout from '../../../Layout/Layout';

interface IShopProfilePageProps {
}

const ShopProfilePage: React.FunctionComponent<IShopProfilePageProps> = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(shopFormSchema),
  });
  let { kid } = useParams<{ kid: string }>();
  const classes = shopProfileStyles();
  const [shop, setShop] = React.useState<Shop>();
  const shopApi = container.get<ShopApi>(ServiceName.ShopApi);
  React.useEffect(() => {
    shopApi.getSingle(kid).then(result => {
      setShop({ ...result })
    })
  }, [])

  const submitForm: SubmitHandler<Shop> = (data) => {
    console.log(data)
  }
  return (<Loader isLoading={!Boolean(shop)}>
    <Container component={Paper} className={classes.root} >
      {/* {shop ? shop.name : "not found"} */}
      <form onSubmit={handleSubmit(submitForm)} noValidate  >
        <Grid container spacing={2} >
          <Grid item xs={6} md={4} >
            <TextField
              error={errors["name"]}
              variant="outlined" fullWidth defaultValue={shop?.name} {...register("name")} label="Name" />
          </Grid>
          <Grid item xs={6} md={4} >
            <TextField
              error={errors["email"]}
              variant="outlined" fullWidth {...register("email")} defaultValue={shop?.email} label="Email" />
          </Grid>
          <Grid item xs={6} md={4} >
            <TextField
              error={errors["layout"]}
              variant="outlined" fullWidth  {...register("layout")} defaultValue={shop?.layout} label="Layout" />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField
              defaultValue={shop?.phone_number} label="Phone Number"
              error={errors["phone_number"]}
              variant="outlined"
              fullWidth  {...register("phone_number")} />
          </Grid>
          <Grid item xs={6} md={4}>
          <FormControl className={classes.select}
          {...register("layout")}
          >
        <InputLabel id="demo-simple-select-label">Layout</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        
        >{
          enumToArray<Layouts>(Layout).map((layout, i)=>{
            <MenuItem value={layout} key = {i}>{layout}</MenuItem>
          })
        }
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>

            <TextField
              error={errors["latitude"]}
              variant="outlined"
              defaultValue={shop?.latitude} label="Latitude"
              {...register("latitude")} type="number"


            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField variant="outlined"
              error={errors["longitude"]}
              {...register("longitude")} type="number" defaultValue={shop?.longitude} label="Longitude" />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField
              error={errors["classic_coffee_price"]}
              variant="outlined" {...register("classic_coffee_price")} type="number" defaultValue={shop?.classic_coffee_price} label="Classic Coffee Price" />
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField label="Specialty Coffee Price"
              error={errors["specialty_coffee_price"]}
              variant="outlined"  {...register("specialty_coffee_price")}
              type="number"
              defaultValue={shop?.specialty_coffee_price} />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" disableElevation variant="contained" type="submit">submit</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  </Loader>)
};

export default ShopProfilePage;

