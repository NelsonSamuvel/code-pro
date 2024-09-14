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
import { onCloseProp } from "../../ui/Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useEditTip } from "../../store/useEditTip";

type FormData = {
  title: string;
  content: string;
  category: string;
};

function AddTipsForm({ onCloseModal, name }: onCloseProp) {
  const { categories, isLoading } = useCategories();
  const { user } = useAuth();
  const { addTip, isAdding } = useAddTip();

  const tip = useEditTip((state) => state.tip);

  console.log(tip);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues:
      name === "edit"
        ? {
            title: tip.title,
            content: tip.content,
            category: tip.category_id?.toString(),
          }
        : {},
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const { title, content, category } = data;
    const newTip = {
      title,
      content,
      category_id: Number(category),
      updated_at: null,
      image: null,
      created_at: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
      user_id: user?.id ?? "",
    };

    addTip(newTip, {
      onSuccess: () => {
        onCloseModal?.();
      },
    });
  };

  const optionTypes: OptionType[] =
    categories?.reduce((acc: OptionType[], cur: CategoriesType) => {
      acc.push({ label: cur.name, value: cur.id.toString() });
      return acc;
    }, []) || [];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-wider">Add New Tip</h1>
        <button className="rounded-icon" onClick={() => onCloseModal?.()}>
          <HiXMark className="custom-icons" />
        </button>
      </div>
      <>
        <FormRow label="Title" error={errors.title?.message}>
          <input
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
          {isLoading ? (
            <SpinnerMini />
          ) : (
            <select
              className={`input text-sm font-semibold py-2.5`}
              {...register("category", {
                required: {
                  value: true,
                  message: "this field is required",
                },
              })}
            >
              {optionTypes?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </FormRow>
        <FormRow>
          <Button disabled={isAdding}>Add</Button>
        </FormRow>
      </>
    </form>
    // </FormLayout>
  );
}

export default AddTipsForm;
