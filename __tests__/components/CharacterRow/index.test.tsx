import React from 'react';
import {fireEvent, waitFor} from '@testing-library/react-native';
import {it, describe, expect} from '@jest/globals';
import {render} from '../../../src/utils/tests';
import BookRow from '../../../src/components/BookRow';

const onPress = () => {};
const testProps = {
  author_alternative_name: [
    'Gabriel José de la Concordia García Márquez',
    'Gabriel Garcia Marquez',
  ],
  author_key: ['OL4586796A'],
  author_name: ['Gabriel García Márquez'],
  contributor: [
    'Selvi, Seçkin.',
    'Rabassa, Gregory',
    'Yang, Naidong.',
    'Gregory Rabassa (Translator)',
  ],
  cover_edition_key: 'OL37050600M',
  cover_i: 12627383,
  ddc: ['863.64', '868', '863', '891.73'],
  ebook_access: 'borrowable',
  ebook_count_i: 39,
  edition_count: 197,
  edition_key: ['OL46864926M', 'OL35346764M', 'OL32256442M'],
  first_publish_year: 1967,
  first_sentence: [
    'MANY YEARS LATER, as he faced the firing squad, Colonel Aureliano Buendia was to remember that distant afternoon when his father took him to discover ice.',
    'Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.',
    'Many years later, as he faced the firing squad, Colonel Aureliano Buendia was to remember that distant afternoon when his father took him to discover ice.',
  ],
  format: ['Paperback', 'Taschenbuch'],
  has_fulltext: true,
  isbn: ['9785040048274', '9780307350275'],
  key: '/works/OL274505W',
  title: 'Cien años de soledad',
  title_suggest: 'Cien años de soledad',
  title_sort: 'Cien años de soledad',
  type: 'work',
};

describe('BookRow', () => {
  it('should render', async () => {
    const {toJSON} = render(
      <BookRow book={{...testProps}} onPress={onPress} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should call event onPress', async () => {
    const {findByTestId} = render(
      <BookRow book={{...testProps}} onPress={onPress} />,
    );

    const button = await findByTestId('BookRow_btn');
    fireEvent.press(button);

    await waitFor(() => {
      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });
});
