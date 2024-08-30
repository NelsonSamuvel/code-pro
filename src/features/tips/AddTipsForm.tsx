import { useState } from "react";
import Button from "../../ui/Button";
import Dropdown from "../../ui/Dropdown";
import FormLayout from "../../ui/FormLayout";
import FormRow from "../../ui/FormRow";
import Spinner from "../../ui/Spinner";
import SpinnerMini from "../../ui/SpinnerMini";
import { useCategories } from "./useCategories";
import { format } from "date-fns";
import { useAuth } from "../authentication/useAuth";
import { useAddTip } from "./useAddTip";
import { HiXMark } from "react-icons/hi2";

function AddTipsForm({ onCloseModal }) {
  const { categories, isLoading } = useCategories();
  const { user } = useAuth();
  const { addTip, isAdding } = useAddTip();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [language, setLanguage] = useState<number | undefined>(categories?.id);

  function handleSubmit(e) {
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
        onCloseModal();
      },
    });
  }

  return (
    // <FormLayout title="Add New Tip" type="modal">
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-wider">Add New Tip</h1>
        <button className="rounded-icon" onClick={() => onCloseModal()}>
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
              isHide={false}
              name="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              options={categories?.reduce(
                (acc, cur) => [...acc, { label: cur.name, value: cur.id }],
                []
              )}
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
