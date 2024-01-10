import React, { useState } from "react";
import Snippet from "./Snippet";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export default function News(){


    const [currentFilter, setCurrentFilter] = useState(0);

    const filterList = [
        {
            name: "News Site1",
            img: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eligendi ipsa iusto ex ipsam voluptatum libero debitis, quas sapiente."
        },
        {
            name: "News Site2",
            img: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eligendi ipsa iusto ex ipsam voluptatum libero debitis, quas sapiente."
        },
        {
            name: "News Site3",
            img: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eligendi ipsa iusto ex ipsam voluptatum libero debitis, quas sapiente."
        },
        {
            name: "News Site4",
            img: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eligendi ipsa iusto ex ipsam voluptatum libero debitis, quas sapiente."
        },
        {
            name: "News Site5",
            img: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eligendi ipsa iusto ex ipsam voluptatum libero debitis, quas sapiente."
        },
        {
            name: "News Site6",
            img: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eligendi ipsa iusto ex ipsam voluptatum libero debitis, quas sapiente."
        },
        {
            name: "News Site7",
            img: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eligendi ipsa iusto ex ipsam voluptatum libero debitis, quas sapiente."
        },
        {
            name: "News Site8",
            img: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eligendi ipsa iusto ex ipsam voluptatum libero debitis, quas sapiente."
        },
        {
            name: "News Site9",
            img: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eligendi ipsa iusto ex ipsam voluptatum libero debitis, quas sapiente."
        },
        {
            name: "News Site10",
            img: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eligendi ipsa iusto ex ipsam voluptatum libero debitis, quas sapiente."
        },
        {
            name: "News Site11",
            img: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eligendi ipsa iusto ex ipsam voluptatum libero debitis, quas sapiente."
        },
        {
            name: "News Site12",
            img: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eligendi ipsa iusto ex ipsam voluptatum libero debitis, quas sapiente."
        },
        {
            name: "News Site13",
            img: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eligendi ipsa iusto ex ipsam voluptatum libero debitis, quas sapiente."
        },
        {
            name: "News Site14",
            img: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eligendi ipsa iusto ex ipsam voluptatum libero debitis, quas sapiente."
        },
        {
            name: "News Site15",
            img: "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium eligendi ipsa iusto ex ipsam voluptatum libero debitis, quas sapiente."
        }
    ];
    const length = filterList.length;

    const offSet = 5;
    const nextFilter = () => {
        setCurrentFilter(
            currentFilter === length - 1 - offSet ? 0 : currentFilter + 5
        );
    };

    const prevFilter = () => {
        setCurrentFilter(
            currentFilter === 0 ? length - 1 - offSet : currentFilter - 5
        );
    };
    console.log(currentFilter);

    if (!Array.isArray(filterList) || filterList.length <= 0) {
        return null;
    }

    return (

        <div className="carousel">
            <span className="arrow" onClick={prevFilter}><IoIosArrowBack color="white" size={"24px"} /></span>
            {filterList.filter(
                (d, i) => i > currentFilter && i <= currentFilter + offSet
            ).map((item) => {

                return <Snippet heading={item.name} image={item.img} content={item.content} />
            })}
            <span className="arrow" onClick={nextFilter}><IoIosArrowForward color="white" size={"24px"}/></span>
           
        </div>
    );
};

function List({ data = [] }) {
    if (!data.length) return;
    return (
        <ul className="items-container">
            {data.map((d, i) => (
                <li key={i}> {d.title} </li>
            ))}
        </ul>
    );
}

