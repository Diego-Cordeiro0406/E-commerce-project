// import '@testing-library/jest-dom';
// import { act, screen, waitFor } from '@testing-library/react';
// import renderWithRouter from './helpers/renderWithRouter';
// import userEvent from '@testing-library/user-event';
// import App from '../App';
// import Provider from '../context/Provider';

// describe('Testa a página do carrinho de compras', () => {
//   it('A home deve ter o botão do carrinho de compras', () => {
//     renderWithRouter(
//       <Provider>
//         <App />
//       </Provider>
//     );
//     expect(screen.getByTestId('shopping-cart-button')).toBeDefined();
//   });

//   it(`Clicar no botão deve levar à página do carrinho vazio, com a mensagem
//       'Seu carrinho está vazio' nela`, async () => {
//       renderWithRouter(
//         <Provider>
//           <App />
//         </Provider>
//       );

//     await act(async () => {
//     userEvent.click(screen.getByTestId('shopping-cart-button'));
//     })

//     await waitFor(() => screen.getByTestId('shopping-cart-empty-message'));
//     expect(screen.getByTestId('shopping-cart-empty-message')).toHaveTextContent(
//       'Seu carrinho está vazio',
//     );
//   });
// });