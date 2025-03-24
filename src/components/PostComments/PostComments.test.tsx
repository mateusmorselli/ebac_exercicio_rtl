import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Teste de adição de 2 comentários', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('elemento-textarea'), {
            target: {
                value: 'Comentário 1',
            }
        });
        fireEvent.click(screen.getByTestId('elemento-btn'));
            
        fireEvent.change(screen.getByTestId('elemento-textarea'), {
            target: {
                value: 'Comentário 2',
            }
        });
        fireEvent.click(screen.getByTestId('elemento-btn'));

        expect(screen.getAllByTestId('qtd-comentario')).toHaveLength(2);
    });
});