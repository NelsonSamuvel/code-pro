import { FormEvent, useState } from "react";
import Button from "../../ui/Button";
import Dropdown, { OptionType } from "../../ui/Dropdown";
import FormRow from "../../ui/FormRow";
import SpinnerMini from "../../ui/SpinnerMini";
import { useCategories } from "./useCategories";
import { format } from "date-fns";
import { useAuth } from "../authentication/useAuth";
import { useAddTip } from "./useAddTip";
import { HiXMark } from "react-icons/hi2";
import { CategoriesType } from "../../services/apiCategories";

type onCloseProp = {
  onCloseModal?: () => void;
};

function AddTipsForm({ onCloseModal }: onCloseProp) {
  const { categories, isLoading } = useCategories();
  const { user } = useAuth();
  const { addTip, isAdding } = useAddTip();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [language, setLanguage] = useState(
    (categories?.[0].id ?? 1).toString()
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title || !content || !language) return;
    const newTip = {
      title,
      content,
      category_id: Number(language),
      updated_at: null,
      image: null,
      created_at: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      user_id: user?.id,
    };

    addTip(newTip, {
      onSuccess: () => {
        onCloseModal?.();
      },
    });
  }

  const optionTypes: OptionType[] =
    categories?.reduce((acc: OptionType[], cur: CategoriesType) => {
      acc.push({ label: cur.name, value: cur.id.toString() });
      return acc;
    }, []) || [];


  return (
  
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-wider">Add New Tip</h1>
        <button className="rounded-icon" onClick={() => onCloseModal?.()}>
          <HiXMark className="custom-icons" />
        </button>
      </div>
      <>
        <FormRow label="Title">
          <input
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            disabled={isAdding}
          />
        </FormRow>

        <FormRow label="Content">
          <textarea
            className="input h-32"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FormRow>
        <FormRow label="Choose Language">
          {isLoading ? (
            <SpinnerMini />
          ) : (
            <Dropdown
              name="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              options={optionTypes}
            />
          )}
        </FormRow>
        <FormRow>
          <Button disabled={false}>Add</Button>
        </FormRow>
      </>
    </form>
    // </FormLayout>
  );
}

export default AddTipsForm;
