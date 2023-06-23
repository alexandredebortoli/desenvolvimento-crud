import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ICar } from "@/types/car";
import { getAllCars, getAllModels, getAllBrands } from "@/api";
import { IBrand } from "@/types/brand";
import { IModel } from "@/types/model";
import Crud from "./Crud";

const HomePage: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState("car");
    const [carData, setCarData] = useState<ICar[]>([]);
    const [modelData, setModelData] = useState<IModel[]>([]);
    const [brandData, setBrandData] = useState<IBrand[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cars = await getAllCars();
                setCarData(cars);
                const models = await getAllModels();
                setModelData(models);
                const brands = await getAllBrands();
                setBrandData(brands);
            } catch (error) {
                console.error("Error fetching car data:", error);
            }
        };

        fetchData();
    }, []);

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };

    let tableData: ICar[] | IModel[] | IBrand[] = [];
    let tableHeaders: string[] = [];
    if (selectedOption === "car") {
        tableData = carData;
        tableHeaders = [
            "id",
            "name",
            "renavam",
            "license",
            "price",
            "year",
            "id model",
        ];
    } else if (selectedOption === "model") {
        tableData = modelData;
        tableHeaders = ["id", "name", "id brand"];
    } else if (selectedOption === "brand") {
        tableData = brandData;
        tableHeaders = ["id", "name"];
    }

    return (
        <div>
            <Navbar
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
            />
            <Crud
                tableData={tableData}
                tableHeaders={tableHeaders}
                variation={selectedOption}
            />
        </div>
    );
};

export default HomePage;
