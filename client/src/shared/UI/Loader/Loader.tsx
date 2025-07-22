import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string,
}

export const Loader = ({ className }: LoaderProps) => {

    return (
        <div className={cls.ldsGrid}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

