"use client";

import { TbSquareRoundedPlus } from "react-icons/tb";
import Modal from "./Modal";
import React, { FormEventHandler, useState } from "react";
import { createBrand, createCar, createModel } from "@/api";
import { useRouter } from "next/navigation";
import { IBrand } from "@/types/brand";
import { IModel } from "@/types/model";
import { ICar } from "@/types/car";

type AddItemProps = {
    variation: string;
};

const AddItem: React.FC<AddItemProps> = ({ variation }) => {
    const router = useRouter();
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
                        placeholder="Ford"
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
                            placeholder="735i/iA 3.5 32V"
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
                            placeholder="3"
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
                            placeholder="BMW 735i"
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
                            placeholder="1147483645"
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
                            placeholder="MAX-4948"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
                <div className="form-control w-full mb-5">
                    <label className="input-group">
                        <span className="whitespace-nowrap">{`Price ($BRL)`}</span>
                        <input
                            value={newCar.price}
                            onChange={(e) =>
                                setNewCar({
                                    ...newCar,
                                    price: Number(e.target.value),
                                })
                            }
                            type="text"
                            placeholder="12000,50"
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
                            placeholder="1987"
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
                            placeholder="1"
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
