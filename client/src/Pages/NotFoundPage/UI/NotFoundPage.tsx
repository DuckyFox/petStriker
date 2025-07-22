import cls from './NotFoundPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/UI';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
    className?: string,
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {

    const { t } = useTranslation('NotFoundPage');

    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            <AppLink to={'/'}>
                <h2 className={cls.notFoundPageText}>
                    {t('NotFoundPage:404 NOT FOUND')}
                </h2>
            </AppLink>
        </div>
    );
};

export default NotFoundPage;

