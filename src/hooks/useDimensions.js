import {useState} from "react";

export const useDimensions = () => {
	const initialValue = 15;
	const [min, max] = [10, 50];
	const [height, setHeight] = useState(initialValue);
	const [width, setWidth] = useState(initialValue);

	return { height, width, setHeight, setWidth, min, max , initialValue};
}
