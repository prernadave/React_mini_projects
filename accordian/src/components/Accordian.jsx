import { useState } from "react";
import data from "./data";

const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const [enable, setEnable] = useState(false);
    const [mltSlct, setMltSlct] = useState([]);
    const selectAccordion = (id) => {
        console.log(id);
        setSelected(id === selected ? null : id);
    };
    const toggleSelection = (id) => {
        if (enable) {
            // Multi-selection: Toggle the presence of the item's ID in the mltSlct array
            const copy = [...mltSlct];
            const index = copy.indexOf(id);
            if (index === -1) {
                copy.push(id);
            } else {
                copy.splice(index, 1);
            }
            setMltSlct(copy);
        } else {
            // Single selection: Toggle the selected item ID in the selected state
            setSelected(id === selected ? null : id);
        }
    };

    return (


        <div className="wrapper">
            <button onClick={() => setEnable(!enable)}>Enable Multi Selection</button>
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div
                            key={item.id}
                            className={`item ${selected === item.id ? "active" : ""}`}
                        >
                            <div className="title">
                                <h3 className="question">{item.question}</h3>
                                <span
                                    onClick={
                                        enable
                                            ? () => toggleSelection(item.id)
                                            : () => selectAccordion(item.id)
                                    }
                                >
                                    +
                                </span>
                            </div>
                            {enable
                                ? // Show content if multi-selection is enabled and item is in mltSlct array
                                mltSlct.includes(item.id) && (
                                    <div className="acc-content">{item.answer}</div>
                                )
                                : // Show content if single selection and item is selected
                                selected === item.id && (
                                    <div className="acc-content">{item.answer}</div>
                                )}
                        </div>
                    ))
                ) : (
                    <div>No data </div>
                )}
            </div>
        </div>
    );


};

export default Accordian;
