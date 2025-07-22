import cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

import { Button } from 'shared/UI';

import DarkIcon from 'shared/assets/icons/dark-mode.svg';
import LightMode from 'shared/assets/icons/light-mode.svg';

interface ThemeSwitcherProps {
    className?: string,
}



export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            <Button>
                {theme === Theme.DARK ?  <LightMode/> : <DarkIcon/>}
            </Button>
        </div>
    );
};

