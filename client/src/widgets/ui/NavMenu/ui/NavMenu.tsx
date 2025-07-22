import React from 'react';

import { AppLink } from 'shared/UI';

import cls from './NavMenu.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLinkTheme } from 'shared/UI/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavMenuProps {
    className?: string,
}

export const NavMenu = ({ className }: NavMenuProps) => {

    const { t } = useTranslation('navmenu');

    return (
        <div className={classNames(cls.navmenu, {}, [className])}>
            <nav className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} className={cls.mainLink} to={'/'}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} className={cls.mainLink} to={'/About'}>{t('О нас')}</AppLink>
            </nav>
        </div>
    );
};

