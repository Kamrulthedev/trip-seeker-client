import { Close } from "@radix-ui/react-dialog";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import {
  HiOutlineMagnifyingGlass,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../redux/features/product/productApi";
import { updateMode } from "../../redux/features/update/updateSlice";
import { useAppDispatch } from "../../redux/hooks";
import { IProduct } from "../../types/product.type";
import BtnAddItem from "../ui/BtnAddItem";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import PrimaryLoader from "../ui/loader/PrimaryLoader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { ProductMutationModal } from "./ProductMutationModal";

// Define the type for your product data
export type Product = {
  _id?: string;
  id?: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  discount: number;
  stock: number;
  description: string;
  thumbnail: string;
  image: string;
  subcategory: string;
};

export function ProductTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);

  // Fetch product data
  const { data: products, isLoading } = useGetProductsQuery({});
  const dispatch = useAppDispatch();
  const [deleteProduct, { isLoading: isDeleting, isSuccess: isDeleted }] =
    useDeleteProductMutation();

  const handleDeleteProduct = async (product: IProduct) => {
    await deleteProduct(product._id);
  };
  useEffect(() => {
    if (isDeleted) {
      toast.success("Product deleted successfully");
    }
  }, [isDeleted]);
  // Handle opening modal in update mode
  const handleOpenModal = () => {
    setModalOpen(true);
    dispatch(updateMode({ isUpdate: false, data: {} }));
  };

  // Handle closing modal
  const closeModal = () => {
    setModalOpen(false);
    dispatch(updateMode({ isUpdate: false, data: {} }));
  };
  const handleUpdateModal = (data: IProduct) => {
    setModalOpen(true);
    dispatch(updateMode({ isUpdate: true, data }));
  };
  // Define table columns
  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <Link to={`/products/${row.original._id}`} className="capitalize">
          {row.getValue("name")}
        </Link>
      ),
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("category")}</div>
      ),
    },
    {
      accessorKey: "price",
      header: ({ column }) => (
        <button
          className="flex items-center gap-0.5 text-lg"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      ),
      cell: ({ row }) => (
        <div className="lowercase text-left">${row.getValue("price")}</div>
      ),
    },
    {
      accessorKey: "stock",
      header: ({ column }) => (
        <button
          className="flex items-center gap-0.5 text-lg"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stock
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      ),
      cell: ({ row }) => (
        <div className="lowercase text-left">{row.getValue("stock")}</div>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex items-center gap-2 text-lg">
          <HiOutlinePencilSquare
            onClick={() => handleUpdateModal(row.original)}
            className="hover:text-primary transition-all cursor-pointer"
          />
          <Dialog>
            {isDeleting && <PrimaryLoader />}
            <DialogOverlay className="bg-black/50" />
            <DialogTrigger asChild>
              <button>
                <HiOutlineTrash className="hover:text-rose-600 transition-all cursor-pointer" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Do you want to delete this product?</DialogTitle>
                <DialogDescription>
                  If you delete this product, it will be removed from the
                  database. You can't undo this action.
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <Close>
                  <Button variant="default" className="px-8">
                    Cancel
                  </Button>
                </Close>
                <Button
                  disabled={isDeleting}
                  onClick={() => handleDeleteProduct(row.original)}
                  type="submit"
                  variant="destructive"
                  className="px-8"
                >
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      ),
    },
  ];

  // Initialize React Table with fetched data and column configuration
  const table = useReactTable({
    data: products?.data || [], // Assuming products is the array of products in the fetched data
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <>
      <div className="w-full px-[2%] min-h-fit bg-white rounded-md">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center flex-wrap w-full  gap-5">
            <button onClick={handleOpenModal}>
              <BtnAddItem />
            </button>

            <ProductMutationModal isOpen={isModalOpen} onClose={closeModal} />
            <div className="ui-input-container">
              <input
                required
                placeholder="Search Product..."
                className="ui-input"
                type="text"
                value={
                  (table.getColumn("name")?.getFilterValue() as string) ?? ""
                }
                onChange={(event) =>
                  table.getColumn("name")?.setFilterValue(event.target.value)
                }
              />
              <div className="ui-input-underline"></div>
              <div className="ui-input-highlight"></div>
              <div className="ui-input-icon">
                <HiOutlineMagnifyingGlass />
              </div>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-sm border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    Loading...
                  </TableCell>
                </TableRow>
              ) : table.getRowModel()?.rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected()}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell?.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    Product Not Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {/* {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected. */}
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
