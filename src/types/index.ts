// 地域の型定義（都道府県/都市レベル）
export type Region = 
  | 'hokkaido'
  | 'aomori'
  | 'akita'
  | 'iwate'
  | 'yamagata'
  | 'miyagi'
  | 'fukushima'
  | 'tokyo'
  | 'kanagawa'
  | 'chiba'
  | 'saitama'
  | 'ibaraki'
  | 'tochigi'
  | 'gunma'
  | 'niigata'
  | 'nagano'
  | 'yamanashi'
  | 'shizuoka'
  | 'aichi'
  | 'gifu'
  | 'toyama'
  | 'ishikawa'
  | 'fukui'
  | 'osaka'
  | 'kyoto'
  | 'hyogo'
  | 'wakayama'
  | 'nara'
  | 'shiga'
  | 'mie'
  | 'okayama'
  | 'hiroshima'
  | 'yamaguchi'
  | 'tottori'
  | 'shimane'
  | 'kagawa'
  | 'tokushima'
  | 'ehime'
  | 'kochi'
  | 'fukuoka'
  | 'saga'
  | 'nagasaki'
  | 'kumamoto'
  | 'oita'
  | 'miyazaki'
  | 'kagoshima'
  | 'okinawa';

// 方言フレーズの型定義
export interface DialectPhrase {
  id: string;
  dialect: string;           // 方言表現
  standard: string;          // 標準語
  romaji: string;           // ローマ字
  meaning: string;          // 英語の意味
  example: string;          // 例文（方言）
  exampleStandard: string;  // 例文（標準語）
  exampleMeaning: string;   // 例文の英訳
  audioUrl?: string;        // 音声ファイルURL（オプション）
}

// 細分化された方言の型定義
export interface SubDialect {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  color: string;
  phrases: DialectPhrase[];
}

// 地域別方言データの型定義
export interface RegionDialect {
  id: Region;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  color: string;
  phrases: DialectPhrase[];
  subDialects?: SubDialect[];  // 細分化された方言（オプショナル）
}

// 学習進捗の型定義
export interface Progress {
  regionId: Region;
  phrasesLearned: string[];  // 学習済みフレーズID
  quizScore: number;
  lastStudied: string;
}

// クイズの質問型定義
export interface QuizQuestion {
  id: string;
  phrase: string;
  correctAnswer: string;
  options: string[];
  region: Region;
}

