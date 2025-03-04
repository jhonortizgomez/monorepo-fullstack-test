"use client"
import { useBudgetStore } from "@repo/core/store/budget"
import { budgetSchema } from "@repo/core/schemas/budget"
import { formValidate } from "@repo/core/helpers/formValidate"
import { FormEvent, useState } from "react";

export const BudgetForm = () => {
  const [errors, setErrors] = useState<LocalErrors>({});
  const { updateBudget } = useBudgetStore();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({})
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const budget = data.get("budget") as string;
  
    const formContact = [
      {schema: budgetSchema.budget, value: Number(budget)},
    ];

    const validation = await formValidate(formContact);
    const isFormValid = validation.isFormValid;
    const FormErrors = validation.errors;

    if (!isFormValid){ 
      FormErrors.forEach((error) => setErrors((prev) => ({...prev, [error.label]: error.message})));
    }
    if (!!isFormValid) {
      updateBudget(Number(budget))
      form.reset();
      setErrors({});
    } 
  }

  return (
    <form className="flex items-center justify-center gap-4" onSubmit={ handleSubmit } id="budgetForm">
      <label htmlFor="budget"> Escribe tu presupuesto: </label>
      <input 
        className="bg-white border-0 rounded-3xl py-2 px-4 text-black" 
        id="budget"
        placeholder="150"
        name="budget"
        type="number" 
        required
      />
      {!!errors.budget && <p className="text-red-500 text-sm mt-1">{ errors.budget }</p>}
      <button className="text-green-400 border p-2 rounded-2xl" type="submit">
          Buscar
      </button>
    </form>
  )
}

type LocalErrors = { 
  budget?: string,
}

type Props = {
  updateBudget: (n?:number) => void;
}