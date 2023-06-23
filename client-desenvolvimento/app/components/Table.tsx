import React from "react";
import Row from "./Row";

type TableProps = {
    data: any[];
    headers: string[];
    variation: string;
};

const Table: React.FC<TableProps> = ({ data, headers, variation }) => {
    return (
        <table className="table w-full table-normal">
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                    <th className="flex justify-end">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <Row
                        key={index}
                        item={item}
                        headers={headers}
                        variation={variation}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
