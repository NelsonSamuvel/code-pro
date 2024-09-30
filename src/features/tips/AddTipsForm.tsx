import { FormEvent, useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import DropDown, { OptionType } from "../../ui/Dropdown";
import FormRow from "../../ui/FormRow";
import { useCategories } from "./useCategories";
import { format } from "date-fns";
import { useAuth } from "../authentication/useAuth";
import { useAddTip } from "./useAddTip";
import { HiOutlinePhoto, HiOutlinePlus, HiXMark } from "react-icons/hi2";
import { CategoriesType } from "../../services/apiCategories";
import { onCloseProp } from "../../ui/Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useEditTips } from "../myTips/useEditTips";
import { MenuContextType } from "../../ui/Menu";
import Input from "../../components/ui/Input";
import Spinner from "../../ui/Spinner";
import { HiOutlinePhoneOutgoing, HiPhotograph } from "react-icons/hi";

type FormData = {
  title: string;
  content: string;
  category: string;
  image: string;
};

export type TipType = {
  id?: number;
  title: string;
  content: string;
  category: string;
  image: string;
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
  image: "",
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
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: isEdit ? { ...editValues, category } : {},
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { title, content, category, image } = data;

    const editTips = {
      title: title,
      content: content,
      category_name: category,
      image: image,
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
      console.log("new tip");
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
        { newTip, categoryName: category, imageFile: image },
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

  const thumbnail = watch("image");
  let imageName = "";

  if (thumbnail && thumbnail.length > 0) {
    imageName = thumbnail[0].name;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-y-scroll p-4 scrlBar"
    >
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
          <FormRow label="Thumbnail" error={errors.image?.message}>
            <div className="relative bg-stone-100 rounded-md h-[200px] flex justify-center flex-col gap-4 cursor-not-allowed items-center">
              <input
                type="file"
                id="tb"
                className="hidden"
                {...register("image", {
                  required: "Please select a thumbnail",
                })}
              />

              {!imageName ? (
                <img
                  src="/assets/svg/image-upload.svg"
                  alt=""
                  className="w-1/2 object-cover"
                />
              ) : (
                <>
                  <p>{imageName}</p>
                </>
              )}

              <label
                htmlFor="tb"
                className=" bg-stone-900 text-white p-2 rounded-md cursor-pointer"
              >
                Upload Image
              </label>
            </div>
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
