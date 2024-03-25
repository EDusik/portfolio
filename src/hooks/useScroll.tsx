import { useEffect, useState } from "react";
import { NAVBAR_HEIGHT } from "../utils/constants";

export const useScroll = () => {
	const [scroll, setScroll] = useState(false);
	const [bottom, setBottom] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        document.addEventListener("scroll", () => {
            const about = window.scrollY > NAVBAR_HEIGHT;
            if (about !== scroll) {
                setScroll(about);
            }
        });

        window.onscroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
                setBottom(true);
            } else {
                setBottom(false);
            }
        };
    };

    return { scroll, bottom };
}

