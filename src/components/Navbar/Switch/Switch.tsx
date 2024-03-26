import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

interface ISwitchProps {
    toggleTheme: () => void;
}

const TogglerSwitch = ({ toggleTheme }: ISwitchProps) => {
    const { name } = useContext(ThemeContext);
    return (
        <Switch
            name="switch"
            id="switch"
            aria-checked={name === "dark"}
            aria-readonly="false"
            aria-label="switch"
            offHandleColor="#E0E0DC"
            onHandleColor="#E0E0DC"
            onChange={toggleTheme}
            checked={name === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={14}
            width={32}
            offColor="#CCCCCC"
            handleDiameter={20}
            onColor="#6272a4"
        />
    );
};

export default TogglerSwitch;
