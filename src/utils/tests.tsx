import {render, RenderOptions} from '@testing-library/react-native';
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {...options});

export * from '@testing-library/react-native';
export {customRender as render};
