"use client";
import { useBudgetStore } from "@repo/core/store/budget";
import { Input } from "@repo/ui/form/Input";
import { budgetSchema } from "@repo/core/schemas/budget";
import { formValidate } from "@repo/core/helpers/formValidate";
import { FormEvent, useState } from "react";

export const BudgetForm = () => {
  const [errors, setErrors] = useState<LocalErrors>({});
  const { updateBudget } = useBudgetStore();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const budget = data.get("budget") as string;

    const formContact = [{ schema: budgetSchema.budget, value: Number(budget) }];

    const validation = await formValidate(formContact);
    const isFormValid = validation.isFormValid;
    const FormErrors = validation.errors;

    if (!isFormValid) {
      FormErrors.forEach((error) =>
        setErrors((prev) => ({ ...prev, [error.label]: error.message }))
      );
    }
    if (!!isFormValid) {
      updateBudget(Number(budget));
      form.reset();
      setErrors({});
    }
  };

  return (
    <form
      className="flex flex-wrap items-center justify-center gap-4 mb-10"
      onSubmit={handleSubmit}
      id="budgetForm"
    >
      <div className="flex flex-col w-full sm:w-auto">
        <Input
          label="Escribe tu presupuesto:"
          name="budget"
          placeholder="150"
          type="number"
          textError={errors.budget}
          required
        />
      </div>

      <button className="text-green-400 border p-2 rounded-2xl" type="submit">
        Buscar
      </button>
    </form>
  );
};

type LocalErrors = {
  budget?: string;
};