import s from "./loader.module.scss";

export default function Loader() {
    return (
        <div className={s.loaderContainer}>
            <span className={s.loader}></span>
        </div>
    );
}
