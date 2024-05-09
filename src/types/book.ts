export type Book = {
  author_alternative_name: string[];
  author_key: string[];
  author_name: string[];
  contributor: string[];
  cover_edition_key: string;
  cover_i: number;
  ddc: string[];
  ebook_access: string;
  ebook_count_i: number;
  edition_count: number;
  edition_key: string[];
  first_publish_year: number;
  first_sentence: string[];
  format: string[];
  has_fulltext: boolean;
  isbn: string[];
  key: string;
  title: string;
  title_suggest: string;
  title_sort: string;
  type: string;
};

export type SearchResultBooks = {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  num_found: number;
  q: string;
  docs: Book[];
};
