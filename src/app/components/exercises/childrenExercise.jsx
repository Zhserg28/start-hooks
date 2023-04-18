import React, { useRef } from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";
const ComponentList = ({ children }) => {
    const indexComponent = useRef(1);
    return (
        <div>
            <ul>
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, { index: String(indexComponent.current++) });
                })}
            </ul>
        </div>
    );
};
ComponentList.propTypes = {
    children: PropTypes.array
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentList>
                <Component />
                <Component />
                <Component />
            </ComponentList>
        </CollapseWrapper>
    );
};

const Component = ({ index }) => {
    const field = "Компонент списка";
    return <div>{index + ". " + field}</div>;
};
Component.propTypes = {
    index: PropTypes.string
};

export default ChildrenExercise;
