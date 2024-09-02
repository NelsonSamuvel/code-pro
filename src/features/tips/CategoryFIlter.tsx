import { CategoriesType } from "../../services/apiCategories";
import { OptionType } from "../../ui/Dropdown";
import Filter from "../../ui/Filter";
import { useCategories } from "./useCategories";

function CategoryFIlter() {
  const { categories } = useCategories();

  return (
    <div className="flex items-start justify-center gap-4 p-2 mt-2">
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
