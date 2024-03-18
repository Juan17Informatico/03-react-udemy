import PropTypes from "prop-types";
// const getSaludo = (name) => {
//     return "Hola " + name;
// };

export const FirstApp = ({ title, subTitle, name }) => {
    // console.log(props);

    return (
        <>
            <h1 data-testid="test-title"> { title } </h1>
            <h2>{subTitle}</h2>
            <h2>{subTitle}</h2>
            <h3>{name}</h3>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
    // title: "No hay titulo",
    subTitle: "No hay Subtitulo",
    name: "Juan Campuzano",
};
