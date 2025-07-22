import cls from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { LinkProps, NavLink } from 'react-router-dom';
import { FC } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}
interface AppLinkProps extends LinkProps{
    className?: string,
    theme?: AppLinkTheme,
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
    const { className, to, children, theme=AppLinkTheme.PRIMARY, ...otherProps } = props;
    console.log();
    return (
        <NavLink
            className={classNames(cls.applink, {}, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
};

