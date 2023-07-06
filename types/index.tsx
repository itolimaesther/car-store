import { MouseEventHandler } from "react";


export interface CustomButtonProps {
    title: string,
    containerStyle?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit",
    textStyles?: string,
    rightIcon?: string,
    isDisabled?: boolean
}

export interface OptionProps {
    title: string,
    value: string
}

export interface CustomFilterProps {
    // title: string,
    options: OptionProps[],
    setFilter: (selected: any) => void;
}

// export interface SearchManufacturerOptionProps {
//     searchManufacturer: string
//     setSearchManufacturer: (searchManufacturer: string) => void
// }

export interface SearchManufacturerProps {
    selected: string;
    setSelected: (selected: string) => void;
    // searchManufacturer: string
    // setSearchManufacturer: (searchManufacturer: string) => void
    // selected: SearchManufacturerOptionProps["searchManufacturer"],
    // setSelected: SearchManufacturerOptionProps["setSearchManufacturer"]
}

export interface SearchBarProps {
  setManufacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}

export interface CarProps {
    map: any;
    city_mpg:number;
    class:string;
    combination_mpg?:number;
    cylinders?:number;
    displacement?:number;
    drive:string;
    fuel_type?:string;
    highway_mpg?:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}

export interface FilterProps {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,
}

export interface ShowMoreProps {
    pageNumber: number,
    isNext: boolean,
    setLimit: (limit: number) => void
}