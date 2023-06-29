"use client";

import { TbSquareRoundedPlus } from "react-icons/tb";
import Modal from "./Modal";
import React, { FormEventHandler, useState } from "react";
import { createBrand, createCar, createModel } from "@/api";
import { IBrand } from "@/types/brand";
import { IModel } from "@/types/model";
import { ICar } from "@/types/car";

type AddItemProps = {
    variation: string;
    refreshData: any;
};

const AddItem: React.FC<AddItemProps> = ({ variation, refreshData }) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newBrand, setNewBrand] = useState<IBrand>({});
    const [newModel, setNewModel] = useState<IModel>({});
    const [newCar, setNewCar] = useState<ICar>({});

    const handleSubmitNewItem: FormEventHandler<HTMLFormElement> = async (
        e
    ) => {
        e.preventDefault();
        switch (variation) {
            case "car":
                await createCar(newCar);
                setNewCar({});
                break;
            case "model":
                await createModel(newModel);
                setNewModel({});
                break;
            case "brand":
                await createBrand(newBrand);
                setNewBrand({});
                break;
            default:
                break;
        }
        refreshData();
        setModalOpen(false);
    };

    let inputElement;
    if (variation === "brand") {
        inputElement = (
            <div className="form-control w-full mb-5">
                <label className="input-group">
                    <span>Name</span>
                    <input
                        value={newBrand.name}
                        onChange={(e) =>
                            setNewBrand({
                                name: e.target.value,
                            })
                        }
                        type="text"
                        placeholder="Brand name"
                        className="input input-bordered w-full"
                    />
                </label>
            </div>
        );
    } else if (variation === "model") {
        inputElement = (
            <div>
                <div className="form-control w-full mb-5">
                    <label className="input-group">
                        <span>Name</span>
                        <input
                            value={newModel.name}
                            onChange={(e) =>
                                setNewModel({
                                    ...newModel,
                                    name: e.target.value,
                                })
                            }
                            type="text"
                            placeholder="Model name"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-control w-full mb-5">
                    <label className="input-group">
                        <span className="whitespace-nowrap">ID Brand</span>
                        <input
                            value={newModel.idBrand}
                            onChange={(e) =>
                                setNewModel({
                                    ...newModel,
                                    idBrand: Number(e.target.value),
                                })
                            }
                            type="number"
                            placeholder="Brand id (Number)"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
            </div>
        );
    } else if (variation === "car") {
        inputElement = (
            <div>
                <div className="form-control w-full mb-5">
                    <label className="input-group">
                        <span className="whitespace-nowrap">Name</span>
                        <input
                            value={newCar.name}
                            onChange={(e) =>
                                setNewCar({
                                    ...newCar,
                                    name: e.target.value,
                                })
                            }
                            type="text"
                            placeholder="Car name"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-control w-full mb-5">
                    <label className="input-group">
                        <span className="whitespace-nowrap">Renavam</span>
                        <input
                            value={newCar.renavam}
                            onChange={(e) =>
                                setNewCar({
                                    ...newCar,
                                    renavam: Number(e.target.value),
                                })
                            }
                            type="text"
                            placeholder="Car renavam"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-control w-full mb-5">
                    <label className="input-group">
                        <span className="whitespace-nowrap">License</span>
                        <input
                            value={newCar.license}
                            onChange={(e) =>
                                setNewCar({
                                    ...newCar,
                                    license: e.target.value,
                                })
                            }
                            type="text"
                            placeholder="Car license"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-control w-full mb-5">
                    <label className="input-group">
                        <span className="whitespace-nowrap">{`Price`}</span>
                        <input
                            value={newCar.price}
                            onChange={(e) =>
                                setNewCar({
                                    ...newCar,
                                    price: Number(e.target.value),
                                })
                            }
                            type="text"
                            placeholder="Car price (BRL)"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-control w-full mb-5">
                    <label className="input-group">
                        <span className="whitespace-nowrap">{`Year`}</span>
                        <input
                            value={newCar.year}
                            onChange={(e) =>
                                setNewCar({
                                    ...newCar,
                                    year: String(Number(e.target.value)),
                                })
                            }
                            type="text"
                            placeholder="Car year"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-control w-full mb-5">
                    <label className="input-group">
                        <span className="whitespace-nowrap">ID Model</span>
                        <input
                            value={newCar.idModel}
                            onChange={(e) =>
                                setNewCar({
                                    ...newCar,
                                    idModel: Number(e.target.value),
                                })
                            }
                            type="number"
                            placeholder="Model id (Number)"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
            </div>
        );
    }

    return (
        <div>
            <button
                onClick={() => setModalOpen(true)}
                className="btn btn-primary w-full"
            >
                {`Add new ${variation}`}
                <TbSquareRoundedPlus className="ml-1" size={23} />
            </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewItem}>
                    <h3 className="font-bold text-lg">
                        {`Add new ${variation}`.toUpperCase()}
                    </h3>
                    <div className="modal-action flex flex-col justify-center align-center">
                        {inputElement}
                        <button
                            type="submit"
                            className="btn btn-primary w-full text-center"
                            style={{ margin: 0 }}
                        >
                            Add
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddItem;
