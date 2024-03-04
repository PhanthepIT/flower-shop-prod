import { MdOutlineKeyboard, MdStorefront, MdTv, MdWatch } from "react-icons/md"; 
import { PiFlowerFill } from "react-icons/pi";
import { GiVineFlower } from "react-icons/gi";
import { GiMatchHead } from "react-icons/gi";

export const categories = [
    {
        label: "All",
        icon: MdStorefront,
    },
    {
        label: "Garland",
        icon: GiVineFlower,
    },
    {
        label: "Flower",
        icon: PiFlowerFill ,
    },
    {
        label: "Incense sticks and candles",
        icon: GiMatchHead ,
    },
];