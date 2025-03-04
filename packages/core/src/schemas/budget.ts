import { number } from "yup";

export const budgetSchema = {
  budget: number().required("Campo requerido").positive("Solo numeros positivos").label("budget"),
}