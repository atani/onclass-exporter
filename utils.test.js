const { filterByDate, escapeCsvField } = require('./utils');

describe('filterByDate', () => {
  const feedbacks = [
    { id: 1, date: '2024/01/15', content: 'フィードバック1' },
    { id: 2, date: '2024/02/20', content: 'フィードバック2' },
    { id: 3, date: '2024/03/10', content: 'フィードバック3' },
    { id: 4, date: null, content: 'フィードバック（日付なし）' },
  ];

  test('フィルタなしの場合は全て返す', () => {
    const result = filterByDate(feedbacks, { start: null, end: null });
    expect(result).toEqual(feedbacks);
  });

  test('開始日のみ指定', () => {
    const result = filterByDate(feedbacks, { start: '2024-02-01', end: null });
    expect(result).toHaveLength(3);
    expect(result.map(f => f.id)).toEqual([2, 3, 4]);
  });

  test('終了日のみ指定', () => {
    const result = filterByDate(feedbacks, { start: null, end: '2024-02-28' });
    expect(result).toHaveLength(3);
    expect(result.map(f => f.id)).toEqual([1, 2, 4]);
  });

  test('開始日と終了日の両方を指定', () => {
    const result = filterByDate(feedbacks, { start: '2024-02-01', end: '2024-02-28' });
    expect(result).toHaveLength(2);
    expect(result.map(f => f.id)).toEqual([2, 4]);
  });

  test('日付がnullのフィードバックは常に含まれる', () => {
    const result = filterByDate(feedbacks, { start: '2024-05-01', end: '2024-05-31' });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(4);
  });

  test('空の配列を渡した場合は空の配列を返す', () => {
    const result = filterByDate([], { start: '2024-01-01', end: '2024-12-31' });
    expect(result).toEqual([]);
  });
});

describe('escapeCsvField', () => {
  test('通常の文字列はそのまま返す', () => {
    expect(escapeCsvField('Hello World')).toBe('Hello World');
  });

  test('nullの場合は空文字を返す', () => {
    expect(escapeCsvField(null)).toBe('');
  });

  test('undefinedの場合は空文字を返す', () => {
    expect(escapeCsvField(undefined)).toBe('');
  });

  test('空文字の場合は空文字を返す', () => {
    expect(escapeCsvField('')).toBe('');
  });

  test('カンマを含む場合はダブルクォートで囲む', () => {
    expect(escapeCsvField('Hello, World')).toBe('"Hello, World"');
  });

  test('ダブルクォートを含む場合はエスケープして囲む', () => {
    expect(escapeCsvField('He said "Hello"')).toBe('"He said ""Hello"""');
  });

  test('改行を含む場合はダブルクォートで囲む', () => {
    expect(escapeCsvField('Line1\nLine2')).toBe('"Line1\nLine2"');
  });

  test('カンマとダブルクォートの両方を含む場合', () => {
    expect(escapeCsvField('Hello, "World"')).toBe('"Hello, ""World"""');
  });

  test('数値は文字列に変換される', () => {
    expect(escapeCsvField(123)).toBe('123');
  });

  test('日本語の文字列はそのまま返す', () => {
    expect(escapeCsvField('こんにちは')).toBe('こんにちは');
  });

  test('日本語とカンマを含む場合', () => {
    expect(escapeCsvField('コース名,カテゴリー')).toBe('"コース名,カテゴリー"');
  });
});
