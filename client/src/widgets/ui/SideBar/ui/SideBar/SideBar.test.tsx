import { render, screen } from '@testing-library/react';
import { SideBar } from 'widgets/ui/SideBar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import userEvent from '@testing-library/user-event';


describe('SideBar', () => {

    test('render Sidebar', ()=> {
        render(renderWithTranslation(<SideBar/>));
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle SideBar', async ()=> {
        render(renderWithTranslation(<SideBar/>));
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        await userEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        await userEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });

});