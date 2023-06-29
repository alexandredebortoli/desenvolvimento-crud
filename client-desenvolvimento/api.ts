import { IBrand } from "./types/brand";
import { ICar } from "./types/car";
import { IModel } from "./types/model";

const baseUrl = "http://localhost:3010";

export const getAllBrands = async (): Promise<IBrand[]> => {
    const res = await fetch(`${baseUrl}/brand`, { cache: "no-store" });
    const response = await res.json();
    return response;
};

export const getAllModels = async (): Promise<IModel[]> => {
    const res = await fetch(`${baseUrl}/model`, { cache: "no-store" });
    const response = await res.json();
    return response;
};

export const getAllCars = async (): Promise<ICar[]> => {
    const res = await fetch(`${baseUrl}/car`, { cache: "no-store" });
    const response = await res.json();
    return response;
};

export const createBrand = async (brand: IBrand): Promise<IBrand> => {
    const res = await fetch(`${baseUrl}/brand`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...brand }),
    });
    const newItem = await res.json();
    return newItem;
};

export const createModel = async (model: IModel): Promise<IModel> => {
    const res = await fetch(`${baseUrl}/model`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...model }),
    });
    const newItem = await res.json();
    return newItem;
};

export const createCar = async (car: ICar): Promise<ICar> => {
    const res = await fetch(`${baseUrl}/car`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...car }),
    });
    const newItem = await res.json();
    return newItem;
};

export const editBrand = async (id: number, data: IBrand): Promise<IBrand> => {
    const res = await fetch(`${baseUrl}/brand/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const editedItem = await res.json();
    return editedItem;
};

export const editModel = async (id: number, data: IModel): Promise<IModel> => {
    const res = await fetch(`${baseUrl}/model/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const editedItem = await res.json();
    return editedItem;
};

export const editCar = async (id: number, data: ICar): Promise<ICar> => {
    const res = await fetch(`${baseUrl}/car/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const editedItem = await res.json();
    return editedItem;
};

export const deleteBrand = async (id: number): Promise<IBrand> => {
    const res = await fetch(`${baseUrl}/brand/${id}`, {
        method: "DELETE",
    });
    const deletedItem = await res.json();
    return deletedItem;
};

export const deleteModel = async (id: number): Promise<IModel> => {
    const res = await fetch(`${baseUrl}/model/${id}`, {
        method: "DELETE",
    });
    const deletedItem = await res.json();
    return deletedItem;
};

export const deleteCar = async (id: number): Promise<ICar> => {
    const res = await fetch(`${baseUrl}/car/${id}`, {
        method: "DELETE",
    });
    const deletedItem = await res.json();
    return deletedItem;
};
