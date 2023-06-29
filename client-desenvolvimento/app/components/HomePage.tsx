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
                setCarData(await getAllCars());
                setModelData(await getAllModels());
                setBrandData(await getAllBrands());
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const refreshData = async () => {
        try {
            switch (selectedOption) {
                case "car":
                    setCarData(await getAllCars());
                    break;
                case "model":
                    setModelData(await getAllModels());
                    break;
                case "brand":
                    setBrandData(await getAllBrands());
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

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
                refreshData={refreshData}
            />
        </div>
    );
};

export default HomePage;
