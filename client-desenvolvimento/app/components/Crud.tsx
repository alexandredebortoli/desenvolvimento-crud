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
    refreshData: any;
};

const Crud: React.FC<CrudProps> = ({
    tableData,
    tableHeaders,
    variation,
    refreshData,
}) => {
    return (
        <div>
            <div className="text-center my-5 flex flex-col gap-4">
                <AddItem variation={variation} refreshData={refreshData} />
            </div>
            <Table
                data={tableData}
                headers={tableHeaders}
                variation={variation}
                refreshData={refreshData}
            />
        </div>
    );
};

export default Crud;
