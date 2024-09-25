import { FormEvent, useState } from "react";
import Button from "../../components/ui/Button";
import DropDown, { OptionType } from "../../ui/Dropdown";
import FormRow from "../../ui/FormRow";
import { useCategories } from "./useCategories";
import { format } from "date-fns";
import { useAuth } from "../authentication/useAuth";
import { useAddTip } from "./useAddTip";
import { HiXMark } from "react-icons/hi2";
import { CategoriesType } from "../../services/apiCategories";
import { onCloseProp } from "../../ui/Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useEditTips } from "../myTips/useEditTips";
import { MenuContextType } from "../../ui/Menu";
import Input from "../../components/ui/Input";
import Spinner from "../../ui/Spinner";

type FormData = {
  title: string;
  content: string;
  category: string;
};

export type TipType = {
  id?: number;
  title: string;
  content: string;
  category: string;
};

type TipEditType = {
  tipToEdit?: TipType;
  category?: string;
  closeMenu?: () => void;
};

const defaultTipToEdit: TipType = {
  id: undefined,
  title: "",
  content: "",
  category: "",
};

function AddTipsForm({
  onCloseModal,
  tipToEdit = defaultTipToEdit,
  category,
  closeMenu,
}: onCloseProp & TipEditType) {
  const { categories, isLoading: isLoadingCategories } = useCategories();
  const { user } = useAuth();
  const { addTip, isAdding } = useAddTip();
  const { updateTips, isUpdating } = useEditTips();

  const { id: editId, ...editValues } = tipToEdit;

  const isEdit = Boolean(editId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: isEdit ? { ...editValues, category } : {},
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {

    console.log(data);

    const { title, content, category } = data;

    const editTips = {
      title: title,
      content: content,
      category_name: category,
    };

    if (isEdit) {
      updateTips(
        { id: editId, editTips },
        {
          onSuccess: () => {
            onCloseModal?.();
            closeMenu?.();
          },
        }
      );
    } else {
      const newTip = {
        title,
        content,
        category_id: 0,
        updated_at: null,
        image: null,
        created_at: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        user_id: user?.id ?? "",
      };
      addTip(
        { newTip, categoryName: category },
        {
          onSuccess: onCloseModal,
        }
      );
    }
  };

  const optionTypes: OptionType[] =
    categories?.reduce((acc: OptionType[], cur: CategoriesType) => {
      acc.push({ label: cur.name, value: cur.name });
      return acc;
    }, []) || [];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-wider">
          {isEdit ? `Edit tip#${tipToEdit.id}` : "Add New Tip"}{" "}
        </h1>
        <button className="rounded-icon" onClick={() => onCloseModal?.()}>
          <HiXMark className="custom-icons" />
        </button>
      </div>

      {!isLoadingCategories ? (
        <>
          <FormRow label="Title" error={errors.title?.message}>
            <Input
              className="input"
              type="text"
              id="title"
              disabled={isAdding}
              {...register("title", {
                required: {
                  value: true,
                  message: "This Field is required",
                },
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters",
                },
              })}
            />
          </FormRow>

          <FormRow label="Content" error={errors.content?.message}>
            <textarea
              className="input h-32"
              id="content"
              {...register("content", {
                required: {
                  value: true,
                  message: "This Field is required",
                },
                validate: (value) => {
                  return (
                    value.split(" ").length >= 5 ||
                    "The description should have at least 5 words and above"
                  );
                },
              })}
            />
          </FormRow>
          <FormRow label="Choose Language" error={errors.category?.message}>
            <DropDown options={optionTypes} {...register("category")} />
          </FormRow>
          <FormRow>
            <Button disabled={isAdding || isUpdating}>
              {isEdit ? "Update" : "Add"}
            </Button>
          </FormRow>
        </>
      ) : (
        <Spinner />
      )}
    </form>
    // </FormLayout>
  );
}

export default AddTipsForm;
