import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const Tags = () => {
    const [selected, setSelected] = useState(["Web Dev"]);

    return (
        <div>
            <div className="">
                <TagsInput
                    value={selected}
                    onChange={setSelected}
                    name="fruits"
                    placeHolder="Enter Interests"
                />
            </div>

        </div>
    );
};

export default Tags;