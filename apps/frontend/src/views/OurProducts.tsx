import { BudgetForm } from "@/components/Forms/BudgetForm";
import { ProductList } from "@/components/List/products";

export const OurProductsView = () => {
  return (
    <>
      <div className="flex flex-col  sm:flex-row items-center justify-between w-full px-7">
        <h1 className="font-bold text-3xl mb-4 sm:mb-0">Nuestros Productos</h1>
        <BudgetForm />
      </div>
      <ProductList />
    </>
  );
};