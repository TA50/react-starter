
import * as yup from 'yup';

export const shopFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phone_number: yup.string().required(),
  layout: yup.string().required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
  classic_coffee_price: yup.number().required(),
  specialty_coffee_price: yup.number().required(),
});

