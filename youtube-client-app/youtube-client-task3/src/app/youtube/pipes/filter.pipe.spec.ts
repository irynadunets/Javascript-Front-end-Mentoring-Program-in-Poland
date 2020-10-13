import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe: pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
