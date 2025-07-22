import cls from './SideBar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { Button } from 'shared/UI';
import { ThemeSwitcher } from 'widgets';
import { LangSwitcher } from 'widgets/ui/LangSwitcher/LangSwitcher';
import sidebarDark from 'shared/assets/icons/sidebar-dark.png';
import sidebarLight from 'shared/assets/icons/sidebar-light.png';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

interface SideBarProps {
    className?: string,
}

export const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { theme } = useTheme();

    const onToggle = ()=>{
        setCollapsed((prevState) => !prevState);
    };

    console.log(collapsed);
    console.log(classNames(cls.sideBar, { [cls.collapsed]:collapsed }, [className]));

    return (
        <div
            data-testid={'sidebar'}
            className={classNames(cls.sideBar, { [cls.collapsed]:collapsed }, [className])}
        >
            <Button
                data-testid={'sidebar-toggle'}
                className={cls.interactionBtn}
                onClick={onToggle}
            >
                {theme === Theme.LIGHT
                    ? <img className={cls.interactionBtn} src={sidebarLight} alt='кнопка открытия'/>
                    : <img className={cls.interactionBtn} src={sidebarDark} alt='кнопка открытия'/>
                }
            </Button>
            <div className={classNames(cls.switchers, { [cls.switchersCollapsed]: collapsed }, [])}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};

