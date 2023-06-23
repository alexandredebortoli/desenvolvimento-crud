"use client";

import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import {
    deleteBrand,
    deleteCar,
    deleteModel,
    editBrand,
    editCar,
    editModel,
} from "@/api";

interface RowProps {
    item: any;
    headers: string[];
    variation: string;
}

const Row: React.FC<RowProps> = ({ item, headers, variation }) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const [newItem, setNewItem] = useState({ ...item });

    const handleSubmitEditItem: FormEventHandler<HTMLFormElement> = async (
        e
    ) => {
        const { id, ...editedItem } = newItem;
        e.preventDefault();
        switch (variation) {
            case "car":
                await editCar(id, editedItem);
                break;
            case "model":
                await editModel(id, editedItem);
                break;
            case "brand":
                await editBrand(id, editedItem);
                break;
        }
        router.refresh();
        setOpenModalEdit(false);
    };

    const handleSubmitDeleteItem: FormEventHandler<HTMLFormElement> = async (
        e
    ) => {
        e.preventDefault();
        if (deleteConfirm) {
            switch (variation) {
                case "car":
                    await deleteCar(item.id);
                    break;
                case "model":
                    await deleteModel(item.id);
                    break;
                case "brand":
                    await deleteBrand(item.id);
                    break;
            }
            setDeleteConfirm(false);
            router.refresh();
        }
        setOpenModalDelete(false);
    };

    return (
        <tr className="hover">
            {headers.map((header) => {
                let value = "";
                if (header === "id") {
                    value = item.id ? item.id.toString() : "";
                } else if (header === "name") {
                    value = item.name || "";
                } else if (header === "renavam") {
                    value = item.renavam ? item.renavam.toString() : "";
                } else if (header === "license") {
                    value = item.license || "";
                } else if (header === "price") {
                    value = item.price ? item.price.toString() : "";
                } else if (header === "year") {
                    value = item.year || "";
                } else if (header === "id model") {
                    value = item.idModel ? item.idModel.toString() : "";
                } else if (header === "id brand") {
                    value = item.idBrand ? item.idBrand.toString() : "";
                }
                return <td key={header}>{value}</td>;
            })}
            <td className="flex justify-end gap-5">
                <FiEdit
                    onClick={() => setOpenModalEdit(true)}
                    cursor="pointer"
                    size={23}
                />
                <Modal
                    modalOpen={openModalEdit}
                    setModalOpen={setOpenModalEdit}
                >
                    <form onSubmit={handleSubmitEditItem}>
                        <h3 className="font-bold text-lg">Edit {item.name}</h3>
                        <div className="modal-action flex flex-col justify-center align-center">
                            {headers.map((header) => {
                                let value = "";
                                if (header === "id") {
                                    return null;
                                } else if (header === "name") {
                                    value = newItem.name || "";
                                } else if (header === "renavam") {
                                    value = newItem.renavam
                                        ? newItem.renavam.toString()
                                        : "";
                                } else if (header === "license") {
                                    value = newItem.license || "";
                                } else if (header === "price") {
                                    value = newItem.price
                                        ? newItem.price.toString()
                                        : "";
                                } else if (header === "year") {
                                    value = newItem.year || "";
                                } else if (header === "id model") {
                                    value = newItem.idModel
                                        ? newItem.idModel
                                        : 0;
                                } else if (header === "id brand") {
                                    value = newItem.idBrand
                                        ? newItem.idBrand
                                        : 0;
                                }
                                return (
                                    <div
                                        className="form-control w-full mb-5"
                                        style={{
                                            marginLeft: 0,
                                        }}
                                    >
                                        <label className="input-group">
                                            <span className="whitespace-nowrap">
                                                {header.toUpperCase()}
                                            </span>
                                            <input
                                                key={header}
                                                value={value}
                                                onChange={(e) => {
                                                    if (header === "name") {
                                                        setNewItem({
                                                            ...newItem,
                                                            name: e.target
                                                                .value,
                                                        });
                                                    } else if (
                                                        header === "renavam"
                                                    ) {
                                                        setNewItem({
                                                            ...newItem,
                                                            renavam: Number(
                                                                e.target.value
                                                            ),
                                                        });
                                                    } else if (
                                                        header === "license"
                                                    ) {
                                                        setNewItem({
                                                            ...newItem,
                                                            license:
                                                                e.target.value,
                                                        });
                                                    } else if (
                                                        header === "price"
                                                    ) {
                                                        setNewItem({
                                                            ...newItem,
                                                            price: Number(
                                                                e.target.value
                                                            ),
                                                        });
                                                    } else if (
                                                        header === "year"
                                                    ) {
                                                        setNewItem({
                                                            ...newItem,
                                                            year: e.target
                                                                .value,
                                                        });
                                                    } else if (
                                                        header === "id model"
                                                    ) {
                                                        setNewItem({
                                                            ...newItem,
                                                            idModel: Number(
                                                                e.target.value
                                                            ),
                                                        });
                                                    } else if (
                                                        header === "id brand"
                                                    ) {
                                                        setNewItem({
                                                            ...newItem,
                                                            idBrand: Number(
                                                                e.target.value
                                                            ),
                                                        });
                                                    }
                                                }}
                                                type={
                                                    typeof value === "string"
                                                        ? "text"
                                                        : "number"
                                                }
                                                placeholder={header}
                                                className="input input-bordered w-full"
                                            />
                                        </label>
                                    </div>
                                );
                            })}
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ margin: 0 }}
                            >
                                Editar
                            </button>
                        </div>
                    </form>
                </Modal>
                <FiTrash2
                    onClick={() => setOpenModalDelete(true)}
                    className="text-error"
                    cursor="pointer"
                    size={23}
                />
                <Modal
                    modalOpen={openModalDelete}
                    setModalOpen={setOpenModalDelete}
                >
                    <form onSubmit={handleSubmitDeleteItem}>
                        <h3 className="font-bold text-lg">
                            Are you sure you want to delete '{item.name}' ?
                        </h3>
                        <div className="modal-action flex justify-evenly">
                            <button
                                onClick={(e) => setDeleteConfirm(true)}
                                type="submit"
                                className="btn btn-error text-center w-1/2 mx-1"
                            >
                                Yes
                            </button>
                            <button
                                onClick={(e) => setDeleteConfirm(false)}
                                type="submit"
                                className="btn text-center w-1/2 mx-1"
                            >
                                No
                            </button>
                        </div>
                    </form>
                </Modal>
            </td>
        </tr>
    );
};

export default Row;
