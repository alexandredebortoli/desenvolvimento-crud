import { IBrand } from "@/types/brand";
import { ICar } from "@/types/car";
import { IModel } from "@/types/model";
import React from "react";
import Table from "./Table";
import AddItem from "./AddItem";

type CrudProps = {
    tableData: ICar[] | IModel[] | IBrand[];
    tableHeaders: string[];
    variation: string;
};

const Crud: React.FC<CrudProps> = ({ tableData, tableHeaders, variation }) => {
    return (
        <div>
            <div className="text-center my-5 flex flex-col gap-4">
                <AddItem variation={variation} />
            </div>
            <Table
                data={tableData}
                headers={tableHeaders}
                variation={variation}
            />
        </div>
    );
};

export default Crud;
