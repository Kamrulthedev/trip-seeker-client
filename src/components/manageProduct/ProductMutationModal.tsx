/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../redux/features/product/productApi";
import { useUploadImageMutation } from "../../redux/features/uploadImgbb/imagebbApiSlice";
import { IProduct } from "../../types/product.type";

import { useAppSelector } from "../../redux/hooks";
import { brands, categories, subCategories } from "../../utils/categories";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import PrimaryLoader from "../ui/loader/PrimaryLoader";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

interface IProductMutationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProductMutationModal({
  isOpen,
  onClose,
}: IProductMutationModalProps) {
  const { isUpdate, data: updateProductInfo } = useAppSelector(
    (state) => state.update
  );

  const [showThumbnailInput, setShowThumbnailInput] = useState(!isUpdate);
  const [showImageInput, setShowImageInput] = useState(!isUpdate);

  const { register, handleSubmit, control, reset } = useForm<IProduct>({
    defaultValues: {
      name: "",
      category: "",
      subcategory: "",
      brand: "",
      price: 0,
      discount: 0,
      stock: 0,
      thumbnail: "",
      image: "",
      description: "",
    },
  });

  useEffect(() => {
    if (updateProductInfo) {
      reset(updateProductInfo);
      setShowThumbnailInput(!updateProductInfo.thumbnail);
      setShowImageInput(!updateProductInfo.image);
    }
  }, [updateProductInfo, reset]);

  const [
    uploadImage,
    { isLoading: isUploading, isError: isUploadError, error: uploadError },
  ] = useUploadImageMutation();

  const [
    addProduct,
    {
      isLoading: isAddingProduct,
      isSuccess: isAddedProduct,
      isError: isAddProductError,
      error: addProductError,
    },
  ] = useAddProductMutation();

  const [
    updateProduct,
    {
      isLoading: isUpdatingProduct,
      isSuccess: isUpdatedProduct,
      isError: isUpdateProductError,
      error: updateProductError,
    },
  ] = useUpdateProductMutation();

  const onSubmit: SubmitHandler<IProduct> = async (data) => {
    try {
      let thumbnailUrl = data.thumbnail as unknown as string;
      let imageUrl = data.image as unknown as string;

      if (!isUpdate || (data.thumbnail && typeof data.thumbnail !== "string")) {
        const thumbnailFormData = new FormData();
        thumbnailFormData.append("image", data.thumbnail[0]);
        const thumbnailResponse = await uploadImage(thumbnailFormData).unwrap();
        thumbnailUrl = thumbnailResponse.data.url;
      }

      if (!isUpdate || (data.image && typeof data.image !== "string")) {
        const imageFormData = new FormData();
        imageFormData.append("image", data.image[0]);
        const imageResponse = await uploadImage(imageFormData).unwrap();
        imageUrl = imageResponse.data.url;
      }

      const productData = {
        name: data.name,
        category: data.category,
        subcategory: data.subcategory,
        brand: data.brand,
        description: data.description,
        thumbnail: thumbnailUrl,
        image: imageUrl,
        price: Number(data.price),
        discount: Number(data.discount),
        stock: Number(data.stock),
      };

      if (isUpdate) {
        await updateProduct({ id: data._id, data: productData });
      } else {
        await addProduct(productData);
      }
    } catch (err) {
      console.error("Failed to process product data: ", err);
    }
  };

  useEffect(() => {
    if (isAddedProduct) {
      toast.success("Product added successfully");
    } else if (isUpdatedProduct) {
      toast.success("Product updated successfully");
    }
    onClose();
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAddedProduct, isUpdatedProduct]);

  useEffect(() => {
    if (isUploadError) {
      toast(
        `Failed to upload image-${(uploadError as any).data.error.message}`
      );
    } else if (isAddProductError) {
      toast((addProductError as any).data.message);
    } else if (isUpdateProductError) {
      toast((updateProductError as any).data.message);
    }
  }, [
    isUploadError,
    isAddProductError,
    isUpdateProductError,
    uploadError,
    addProductError,
    updateProductError,
  ]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/50" />
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {isUpdate ? "Update Product" : "Add Product"}
          </DialogTitle>
          <DialogDescription>
            {isUpdate
              ? "Update the product details. Click save to update the product."
              : "Add a new product to your inventory. Fill in the required details and click save to add the product."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          {(isUploading || isAddingProduct || isUpdatingProduct) && (
            <PrimaryLoader />
          )}

          <div className="grid gap-5 py-4">
            <div>
              <Label className="text-right">Name*</Label>
              <Input type="text" required {...register("name")} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-right">Category*</Label>
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full py-3">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {categories.map((category, index) => (
                            <SelectItem key={index} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label className="text-right">Subcategory*</Label>
                <Controller
                  name="subcategory"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full py-3">
                        <SelectValue placeholder="Select Subcategory" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {subCategories.map((subcategory, index) => (
                            <SelectItem key={index} value={subcategory}>
                              {subcategory}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <Label className="text-right">Brand*</Label>
                <Controller
                  name="brand"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full py-3">
                        <SelectValue placeholder="Select Brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {brands.map((brand, index) => (
                            <SelectItem key={index} value={brand}>
                              {brand}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label>Price*</Label>
                <Input
                  type="number"
                  {...register("price", { valueAsNumber: true })}
                  required
                />
              </div>
              <div>
                <Label>Discount</Label>
                <Input type="number" {...register("discount")} />
              </div>
            </div>
            <div className="grid grid-cols-5 gap-3">
              <div>
                <Label>Stock*</Label>
                <Input type="number" {...register("stock")} required />
              </div>
              <div className="col-span-2">
                <Label>Thumbnail*</Label>
                {isUpdate &&
                updateProductInfo?.thumbnail &&
                !showThumbnailInput ? (
                  <div className="flex items-center">
                    <img
                      src={updateProductInfo.thumbnail}
                      alt="thumbnail"
                      className="w-20 h-20 mr-3"
                    />
                    <Button
                      type="button"
                      onClick={() => setShowThumbnailInput(true)}
                    >
                      Change
                    </Button>
                  </div>
                ) : (
                  <Input
                    type="file"
                    {...register("thumbnail")}
                    required={!isUpdate}
                  />
                )}
              </div>
              <div className="col-span-2">
                <Label>Image</Label>
                {isUpdate && updateProductInfo?.image && !showImageInput ? (
                  <div className="flex items-center">
                    <img
                      src={updateProductInfo.image}
                      alt="image"
                      className="w-20 h-20 mr-3"
                    />
                    <Button
                      type="button"
                      onClick={() => setShowImageInput(true)}
                    >
                      Change
                    </Button>
                  </div>
                ) : (
                  <Input type="file" {...register("image")} />
                )}
              </div>
            </div>
            <div>
              <Label>Description</Label>
              <Textarea {...register("description")} />
            </div>
          </div>
          <DialogFooter>
            <Button
              disabled={isAddingProduct || isUploading || isUpdatingProduct}
              type="submit"
            >
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
