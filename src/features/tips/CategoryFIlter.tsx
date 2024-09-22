import { CategoriesType } from "../../services/apiCategories";
import { OptionType } from "../../ui/Dropdown";
import Filter from "../../ui/Filter";
import { useCategories } from "./useCategories";

function CategoryFIlter() {
  const { categories } = useCategories();

  return (
    <div className="flex items-start lg:text-lg justify-center flex-wrap gap-2 sm:gap-4 p-2 mt-2 max-w-lg mx-auto">
      <Filter
        options={
          categories?.reduce(
            (acc: OptionType[], cur: CategoriesType) => {
              acc.push({ label: cur.name, value: cur.name });
              return acc;
            },
            [{ label: "All", value: "all" }]
          ) ?? []
        }
      />
    </div>
  );
}

export default CategoryFIlter;
