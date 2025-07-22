import { render, screen } from '@testing-library/react';
import { Button } from 'shared/UI';
import { ButtonTheme as Theme } from 'shared/UI/Button/Button';
describe('Button', () => {
    test('render btn', ()=> {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>Тест</Button>);
        expect(screen.getByText('Тест')).toBeInTheDocument();
    });

    test('render btn with theme', ()=> {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={Theme.CLEAR}>Тест</Button>);
        expect(screen.getByText('Тест')).toHaveClass('clear');
    });
});