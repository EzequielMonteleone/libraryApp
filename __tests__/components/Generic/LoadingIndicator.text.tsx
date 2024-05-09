import React from 'react';
import {it, describe, expect} from '@jest/globals';
import {LoadingIndicator} from '../../../src/components/Generic/LoadingIndicator';
import {render} from '../../../src/utils/tests';

const loadingTitle = 'Loading ...';

describe('Loading indicator', () => {
  it('Should render correctly', async () => {
    const {toJSON} = render(<LoadingIndicator messageLoading={loadingTitle} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('Should render a loading indicator', async () => {
    const {findByTestId} = render(
      <LoadingIndicator messageLoading={loadingTitle} />,
    );
    const indicator = await findByTestId('indicatorLoading');
    expect(indicator).toBeTruthy();
  });
});
