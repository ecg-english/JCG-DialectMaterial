import { RegionDialect } from '../types';

export const detailedDialectData: RegionDialect[] = [
  {
    id: 'hokkaido',
    name: '北海道弁',
    nameEn: 'Hokkaido Dialect',
    description: '北海道で話される方言。独特の語彙と柔らかいイントネーションが特徴です。',
    descriptionEn: 'Dialect spoken in Hokkaido, characterized by unique vocabulary and soft intonation.',
    color: '#4A90E2',
    phrases: [
      {
        id: 'hok1',
        dialect: 'なまら',
        standard: 'とても',
        romaji: 'namara',
        meaning: 'very, extremely',
        example: 'なまら寒いっしょ',
        exampleStandard: 'とても寒いでしょう',
        exampleMeaning: "It's very cold, isn't it?"
      },
      {
        id: 'hok2',
        dialect: 'したっけ',
        standard: 'それじゃあ',
        romaji: 'shitakke',
        meaning: 'well then, see you',
        example: 'したっけ、また明日',
        exampleStandard: 'それじゃあ、また明日',
        exampleMeaning: 'Well then, see you tomorrow'
      },
      {
        id: 'hok3',
        dialect: 'こわい',
        standard: '疲れた',
        romaji: 'kowai',
        meaning: 'tired (not scary)',
        example: '今日はこわいわ',
        exampleStandard: '今日は疲れたよ',
        exampleMeaning: "I'm tired today"
      },
      {
        id: 'hok4',
        dialect: 'あずましい',
        standard: '快適な',
        romaji: 'azumashii',
        meaning: 'comfortable, cozy',
        example: 'この部屋あずましいね',
        exampleStandard: 'この部屋快適だね',
        exampleMeaning: 'This room is comfortable'
      }
    ]
  },
  {
    id: 'osaka',
    name: '大阪弁',
    nameEn: 'Osaka Dialect',
    description: '大阪で話される方言。地域によって特徴が異なり、摂津弁、河内弁、泉州弁に分けられます。',
    descriptionEn: 'Dialect of Osaka, with different characteristics by region: Settsu, Kawachi, and Senshu dialects.',
    color: '#FF5B8D',
    phrases: [],
    subDialects: [
      {
        id: 'settsu',
        name: '摂津弁',
        nameEn: 'Settsu Dialect',
        description: '大阪北部（摂津）で話される方言。大阪弁の標準的な特徴を持ちます。',
        descriptionEn: 'Dialect of northern Osaka (Settsu), with standard Osaka dialect characteristics.',
        color: '#FF5B8D',
        phrases: [
          {
            id: 'set1',
            dialect: 'めっちゃ',
            standard: 'とても',
            romaji: 'meccha',
            meaning: 'very, really',
            example: 'めっちゃおもろいやん',
            exampleStandard: 'とても面白いじゃないか',
            exampleMeaning: "It's really funny, isn't it?"
          },
          {
            id: 'set2',
            dialect: 'なんでやねん',
            standard: 'どうしてだよ',
            romaji: 'nande yanen',
            meaning: 'why (emphatic)',
            example: 'なんでやねん、そんなん！',
            exampleStandard: 'どうしてだよ、そんなこと！',
            exampleMeaning: 'Why would you do that?!'
          },
          {
            id: 'set3',
            dialect: 'ほんま',
            standard: '本当',
            romaji: 'honma',
            meaning: 'really, truly',
            example: 'ほんまかいな',
            exampleStandard: '本当ですか',
            exampleMeaning: 'Is that really true?'
          },
          {
            id: 'set4',
            dialect: 'あかん',
            standard: 'だめ',
            romaji: 'akan',
            meaning: 'no good, can\'t',
            example: 'それはあかんで',
            exampleStandard: 'それはだめだよ',
            exampleMeaning: "That's no good"
          },
          {
            id: 'set5',
            dialect: 'しゃーない',
            standard: 'しょうがない',
            romaji: 'shaanai',
            meaning: "can't be helped",
            example: 'まあ、しゃーないわ',
            exampleStandard: 'まあ、しょうがないよ',
            exampleMeaning: "Well, can't be helped"
          }
        ]
      },
      {
        id: 'kawachi',
        name: '河内弁',
        nameEn: 'Kawachi Dialect',
        description: '大阪東部（河内）で話される方言。やや荒っぽい表現が特徴です。',
        descriptionEn: 'Dialect of eastern Osaka (Kawachi), known for somewhat rough expressions.',
        color: '#FF4B7D',
        phrases: [
          {
            id: 'kaw1',
            dialect: 'ちゃう',
            standard: '違う',
            romaji: 'chau',
            meaning: 'different, wrong',
            example: 'ちゃうちゃう、そうちゃう',
            exampleStandard: '違う違う、そうじゃない',
            exampleMeaning: "No, no, that's not it"
          },
          {
            id: 'kaw2',
            dialect: 'ええやん',
            standard: 'いいじゃないか',
            romaji: 'eeyan',
            meaning: "that's good, isn't it",
            example: 'ええやん、それで',
            exampleStandard: 'いいじゃないか、それで',
            exampleMeaning: "That's fine, go ahead"
          },
          {
            id: 'kaw3',
            dialect: 'ほかす',
            standard: '捨てる',
            romaji: 'hokasu',
            meaning: 'to throw away',
            example: 'これほかしといて',
            exampleStandard: 'これ捨てておいて',
            exampleMeaning: 'Throw this away'
          },
          {
            id: 'kaw4',
            dialect: 'けったい',
            standard: '変な',
            romaji: 'kettai',
            meaning: 'strange, weird',
            example: 'けったいなこと言うな',
            exampleStandard: '変なこと言うな',
            exampleMeaning: "Don't say weird things"
          },
          {
            id: 'kaw5',
            dialect: 'どない',
            standard: 'どう',
            romaji: 'donai',
            meaning: 'how',
            example: 'どないしたん？',
            exampleStandard: 'どうしたの？',
            exampleMeaning: 'What happened?'
          }
        ]
      },
      {
        id: 'senshu',
        name: '泉州弁',
        nameEn: 'Senshu Dialect',
        description: '大阪南部（泉州）で話される方言。和歌山弁に近い特徴があります。',
        descriptionEn: 'Dialect of southern Osaka (Senshu), with characteristics close to Wakayama dialect.',
        color: '#FF6B9D',
        phrases: [
          {
            id: 'sen1',
            dialect: 'やに',
            standard: 'とても',
            romaji: 'yani',
            meaning: 'very',
            example: 'やにおもろい',
            exampleStandard: 'とても面白い',
            exampleMeaning: 'Very interesting'
          },
          {
            id: 'sen2',
            dialect: 'きのう',
            standard: 'すごい',
            romaji: 'kinou',
            meaning: 'amazing, great',
            example: 'きのうええやん',
            exampleStandard: 'すごくいいじゃないか',
            exampleMeaning: "That's really great!"
          },
          {
            id: 'sen3',
            dialect: 'せわない',
            standard: '大丈夫',
            romaji: 'sewanai',
            meaning: "no problem, it's fine",
            example: 'せわないせわない',
            exampleStandard: '大丈夫大丈夫',
            exampleMeaning: "It's fine, don't worry"
          },
          {
            id: 'sen4',
            dialect: 'かまんし',
            standard: 'かまわない',
            romaji: 'kamanshi',
            meaning: "don't mind",
            example: 'かまんしかまんし',
            exampleStandard: 'かまわないかまわない',
            exampleMeaning: "I don't mind at all"
          },
          {
            id: 'sen5',
            dialect: 'ええで',
            standard: 'いいよ',
            romaji: 'eede',
            meaning: "it's okay",
            example: 'それでええで',
            exampleStandard: 'それでいいよ',
            exampleMeaning: "That's fine"
          }
        ]
      }
    ]
  },
  {
    id: 'kyoto',
    name: '京都弁',
    nameEn: 'Kyoto Dialect',
    description: '京都で話される方言。上品で婉曲的な表現が特徴です。',
    descriptionEn: 'Dialect of Kyoto, known for elegant and indirect expressions.',
    color: '#FF7BAD',
    phrases: [
      {
        id: 'kyo1',
        dialect: 'おおきに',
        standard: 'ありがとう',
        romaji: 'ookini',
        meaning: 'thank you',
        example: 'おおきにどすえ',
        exampleStandard: 'ありがとうございます',
        exampleMeaning: 'Thank you very much'
      },
      {
        id: 'kyo2',
        dialect: 'はんなり',
        standard: '上品で華やか',
        romaji: 'hannari',
        meaning: 'elegant and gorgeous',
        example: 'はんなりしてはりますなあ',
        exampleStandard: '上品でいらっしゃいますね',
        exampleMeaning: "You're very elegant"
      },
      {
        id: 'kyo3',
        dialect: 'おいでやす',
        standard: 'いらっしゃい',
        romaji: 'oideyasu',
        meaning: 'welcome',
        example: 'おいでやす、よう来はったね',
        exampleStandard: 'いらっしゃいませ、よく来られましたね',
        exampleMeaning: 'Welcome! Glad you could come'
      },
      {
        id: 'kyo4',
        dialect: 'どす',
        standard: 'です',
        romaji: 'dosu',
        meaning: 'polite copula',
        example: 'そうどすえ',
        exampleStandard: 'そうですね',
        exampleMeaning: "That's right"
      },
      {
        id: 'kyo5',
        dialect: 'ぶぶ漬けでもどうどす',
        standard: 'そろそろお帰りください（婉曲表現）',
        romaji: 'bubuzuke demo doudosu',
        meaning: 'please leave (indirect)',
        example: 'ぶぶ漬けでもどうどすか',
        exampleStandard: 'お茶漬けでもいかがですか（帰ってほしい）',
        exampleMeaning: 'Would you like some tea and rice? (time to go)'
      }
    ]
  },
  {
    id: 'hyogo',
    name: '兵庫弁',
    nameEn: 'Hyogo Dialect',
    description: '兵庫で話される方言。地域によって特徴が異なり、神戸弁、播州弁、淡路弁、丹波方言に分けられます。',
    descriptionEn: 'Dialect of Hyogo, with different characteristics by region: Kobe, Banshu, Awaji, and Tamba dialects.',
    color: '#FF6B9D',
    phrases: [],
    subDialects: [
      {
        id: 'kobe',
        name: '神戸弁',
        nameEn: 'Kobe Dialect',
        description: '神戸で話される方言。大阪弁と京都弁の中間的な特徴があり、上品な印象があります。',
        descriptionEn: 'Dialect of Kobe, with characteristics between Osaka and Kyoto dialects, giving an elegant impression.',
        color: '#FF6B9D',
        phrases: [
          {
            id: 'kob1',
            dialect: 'べっちょない',
            standard: '大丈夫',
            romaji: 'betchonai',
            meaning: "it's okay, no problem",
            example: 'べっちょない、気にせんといて',
            exampleStandard: '大丈夫、気にしないで',
            exampleMeaning: "It's okay, don't worry about it"
          },
          {
            id: 'kob2',
            dialect: 'ばり',
            standard: 'とても',
            romaji: 'bari',
            meaning: 'very',
            example: 'ばりうまい',
            exampleStandard: 'とてもおいしい',
            exampleMeaning: 'Very delicious'
          },
          {
            id: 'kob3',
            dialect: 'ようけ',
            standard: 'たくさん',
            romaji: 'youke',
            meaning: 'a lot, many',
            example: 'ようけあるで',
            exampleStandard: 'たくさんあるよ',
            exampleMeaning: 'There are a lot'
          },
          {
            id: 'kob4',
            dialect: 'いかんねん',
            standard: 'だめなんだ',
            romaji: 'ikannen',
            meaning: "can't do, no good",
            example: 'それはいかんねん',
            exampleStandard: 'それはだめなんだ',
            exampleMeaning: "That won't work"
          },
          {
            id: 'kob5',
            dialect: 'ええやん',
            standard: 'いいじゃないか',
            romaji: 'eeyan',
            meaning: "that's good, isn't it",
            example: 'ええやん、それで',
            exampleStandard: 'いいじゃないか、それで',
            exampleMeaning: "That's fine, go ahead"
          }
        ]
      },
      {
        id: 'banshu',
        name: '播州弁',
        nameEn: 'Banshu Dialect',
        description: '兵庫西部（播州）で話される方言。やや荒っぽく、力強い表現が特徴です。',
        descriptionEn: 'Dialect of western Hyogo (Banshu), known for somewhat rough and powerful expressions.',
        color: '#FF7BAD',
        phrases: [
          {
            id: 'ban1',
            dialect: 'わや',
            standard: 'めちゃくちゃ',
            romaji: 'waya',
            meaning: 'messy, chaotic',
            example: 'わやじゃのう',
            exampleStandard: 'めちゃくちゃだね',
            exampleMeaning: "It's a mess"
          },
          {
            id: 'ban2',
            dialect: 'えらい',
            standard: '疲れた',
            romaji: 'erai',
            meaning: 'tired',
            example: 'えらいわ',
            exampleStandard: '疲れたよ',
            exampleMeaning: "I'm tired"
          },
          {
            id: 'ban3',
            dialect: 'ほかす',
            standard: '捨てる',
            romaji: 'hokasu',
            meaning: 'to throw away',
            example: 'これほかしといて',
            exampleStandard: 'これ捨てておいて',
            exampleMeaning: 'Throw this away'
          },
          {
            id: 'ban4',
            dialect: 'けったい',
            standard: '変な',
            romaji: 'kettai',
            meaning: 'strange, weird',
            example: 'けったいなこと言うな',
            exampleStandard: '変なこと言うな',
            exampleMeaning: "Don't say weird things"
          },
          {
            id: 'ban5',
            dialect: 'どない',
            standard: 'どう',
            romaji: 'donai',
            meaning: 'how',
            example: 'どないしたん？',
            exampleStandard: 'どうしたの？',
            exampleMeaning: 'What happened?'
          }
        ]
      },
      {
        id: 'awaji',
        name: '淡路弁',
        nameEn: 'Awaji Dialect',
        description: '淡路島で話される方言。島独特の表現が特徴です。',
        descriptionEn: 'Dialect of Awaji Island, featuring unique island expressions.',
        color: '#FF8BBD',
        phrases: [
          {
            id: 'awa1',
            dialect: 'ええで',
            standard: 'いいよ',
            romaji: 'eede',
            meaning: "it's okay",
            example: 'それでええで',
            exampleStandard: 'それでいいよ',
            exampleMeaning: "That's fine"
          },
          {
            id: 'awa2',
            dialect: 'やに',
            standard: 'とても',
            romaji: 'yani',
            meaning: 'very',
            example: 'やにおもろい',
            exampleStandard: 'とても面白い',
            exampleMeaning: 'Very interesting'
          },
          {
            id: 'awa3',
            dialect: 'きのう',
            standard: 'すごい',
            romaji: 'kinou',
            meaning: 'amazing, great',
            example: 'きのうええやん',
            exampleStandard: 'すごくいいじゃないか',
            exampleMeaning: "That's really great!"
          },
          {
            id: 'awa4',
            dialect: 'せわない',
            standard: '大丈夫',
            romaji: 'sewanai',
            meaning: "no problem, it's fine",
            example: 'せわないせわない',
            exampleStandard: '大丈夫大丈夫',
            exampleMeaning: "It's fine, don't worry"
          },
          {
            id: 'awa5',
            dialect: 'かまんし',
            standard: 'かまわない',
            romaji: 'kamanshi',
            meaning: "don't mind",
            example: 'かまんしかまんし',
            exampleStandard: 'かまわないかまわない',
            exampleMeaning: "I don't mind at all"
          }
        ]
      },
      {
        id: 'tamba',
        name: '丹波方言',
        nameEn: 'Tamba Dialect',
        description: '兵庫東部（丹波）で話される方言。京都弁の影響が強く、上品な表現が特徴です。',
        descriptionEn: 'Dialect of eastern Hyogo (Tamba), strongly influenced by Kyoto dialect with elegant expressions.',
        color: '#FF9BCD',
        phrases: [
          {
            id: 'tam1',
            dialect: 'どす',
            standard: 'です',
            romaji: 'dosu',
            meaning: 'polite copula',
            example: 'そうどすえ',
            exampleStandard: 'そうですね',
            exampleMeaning: "That's right"
          },
          {
            id: 'tam2',
            dialect: 'おおきに',
            standard: 'ありがとう',
            romaji: 'ookini',
            meaning: 'thank you',
            example: 'おおきにどすえ',
            exampleStandard: 'ありがとうございます',
            exampleMeaning: 'Thank you very much'
          },
          {
            id: 'tam3',
            dialect: 'はんなり',
            standard: '上品で華やか',
            romaji: 'hannari',
            meaning: 'elegant and gorgeous',
            example: 'はんなりしてはりますなあ',
            exampleStandard: '上品でいらっしゃいますね',
            exampleMeaning: "You're very elegant"
          },
          {
            id: 'tam4',
            dialect: 'おいでやす',
            standard: 'いらっしゃい',
            romaji: 'oideyasu',
            meaning: 'welcome',
            example: 'おいでやす、よう来はったね',
            exampleStandard: 'いらっしゃいませ、よく来られましたね',
            exampleMeaning: 'Welcome! Glad you could come'
          },
          {
            id: 'tam5',
            dialect: 'ええで',
            standard: 'いいよ',
            romaji: 'eede',
            meaning: "it's okay",
            example: 'それでええで',
            exampleStandard: 'それでいいよ',
            exampleMeaning: "That's fine"
          }
        ]
      }
    ]
  },
  {
    id: 'wakayama',
    name: '和歌山弁',
    nameEn: 'Wakayama Dialect',
    description: '和歌山で話される方言。おおらかな響きが特徴です。',
    descriptionEn: 'Dialect of Wakayama, known for its relaxed tone.',
    color: '#FF8BBD',
    phrases: [
      {
        id: 'wak1',
        dialect: 'きのう',
        standard: 'すごい',
        romaji: 'kinou',
        meaning: 'amazing, great',
        example: 'きのうええやん',
        exampleStandard: 'すごくいいじゃないか',
        exampleMeaning: "That's really great!"
      },
      {
        id: 'wak2',
        dialect: 'やに',
        standard: 'とても',
        romaji: 'yani',
        meaning: 'very',
        example: 'やにうまい',
        exampleStandard: 'とてもおいしい',
        exampleMeaning: 'Very delicious'
      },
      {
        id: 'wak3',
        dialect: 'せわない',
        standard: '大丈夫',
        romaji: 'sewanai',
        meaning: "no problem, it's fine",
        example: 'せわないせわない',
        exampleStandard: '大丈夫大丈夫',
        exampleMeaning: "It's fine, don't worry"
      },
      {
        id: 'wak4',
        dialect: 'かまんし',
        standard: 'かまわない',
        romaji: 'kamanshi',
        meaning: "don't mind",
        example: 'かまんしかまんし',
        exampleStandard: 'かまわないかまわない',
        exampleMeaning: "I don't mind at all"
      }
    ]
  },
  {
    id: 'fukuoka',
    name: '博多弁（福岡弁）',
    nameEn: 'Hakata Dialect (Fukuoka)',
    description: '福岡・博多で話される方言。明るくテンポの良い話し方が特徴です。',
    descriptionEn: 'Dialect of Fukuoka/Hakata, featuring bright and rhythmic speech.',
    color: '#FF6347',
    phrases: [
      {
        id: 'fuk1',
        dialect: 'ばってん',
        standard: 'でも',
        romaji: 'batten',
        meaning: 'but, however',
        example: 'ばってん、それは違うよ',
        exampleStandard: 'でも、それは違うよ',
        exampleMeaning: 'But that\'s not right'
      },
      {
        id: 'fuk2',
        dialect: 'よか',
        standard: 'いい',
        romaji: 'yoka',
        meaning: 'good, fine',
        example: 'それでよかよ',
        exampleStandard: 'それでいいよ',
        exampleMeaning: "That's fine"
      },
      {
        id: 'fuk3',
        dialect: 'すいとう',
        standard: '好き',
        romaji: 'suitou',
        meaning: 'like, love',
        example: 'あなたがすいとう',
        exampleStandard: 'あなたが好き',
        exampleMeaning: 'I like you'
      },
      {
        id: 'fuk4',
        dialect: 'くさ',
        standard: 'だよ',
        romaji: 'kusa',
        meaning: 'you know (particle)',
        example: 'そうやくさ',
        exampleStandard: 'そうだよ',
        exampleMeaning: "That's right, you know"
      },
      {
        id: 'fuk5',
        dialect: 'なんしよっと',
        standard: '何してるの',
        romaji: 'nan shiyotto',
        meaning: 'what are you doing?',
        example: 'なんしよっと？',
        exampleStandard: '何してるの？',
        exampleMeaning: 'What are you doing?'
      }
    ]
  },
  {
    id: 'hiroshima',
    name: '広島弁',
    nameEn: 'Hiroshima Dialect',
    description: '広島で話される方言。力強く印象的な表現が特徴です。',
    descriptionEn: 'Dialect of Hiroshima, known for powerful and distinctive expressions.',
    color: '#FFB470',
    phrases: [
      {
        id: 'hir1',
        dialect: 'ぶち',
        standard: 'とても',
        romaji: 'buchi',
        meaning: 'very',
        example: 'ぶちうまい',
        exampleStandard: 'とてもおいしい',
        exampleMeaning: 'Very delicious'
      },
      {
        id: 'hir2',
        dialect: 'たいぎい',
        standard: '面倒くさい',
        romaji: 'taigii',
        meaning: 'troublesome, bothersome',
        example: 'たいぎいのう',
        exampleStandard: '面倒くさいなあ',
        exampleMeaning: "It's such a hassle"
      },
      {
        id: 'hir3',
        dialect: 'じゃけん',
        standard: 'だから',
        romaji: 'jaken',
        meaning: 'so, therefore',
        example: 'じゃけん言うたろ',
        exampleStandard: 'だから言っただろう',
        exampleMeaning: 'I told you so'
      },
      {
        id: 'hir4',
        dialect: 'わや',
        standard: 'めちゃくちゃ',
        romaji: 'waya',
        meaning: 'messy, chaotic',
        example: 'わやじゃのう',
        exampleStandard: 'めちゃくちゃだね',
        exampleMeaning: "It's a mess"
      }
    ]
  },
  {
    id: 'aichi',
    name: '名古屋弁（愛知弁）',
    nameEn: 'Nagoya Dialect (Aichi)',
    description: '名古屋・愛知で話される方言。独特の語尾と表現が特徴です。',
    descriptionEn: 'Dialect of Nagoya/Aichi, known for unique endings and expressions.',
    color: '#FFA337',
    phrases: [
      {
        id: 'aic1',
        dialect: 'でら',
        standard: 'とても',
        romaji: 'dera',
        meaning: 'very',
        example: 'でらうまい',
        exampleStandard: 'とてもおいしい',
        exampleMeaning: 'Very delicious'
      },
      {
        id: 'aic2',
        dialect: 'だがね',
        standard: 'だよね',
        romaji: 'dagane',
        meaning: 'you know, right',
        example: 'そうだがね',
        exampleStandard: 'そうだよね',
        exampleMeaning: "That's right, you know"
      },
      {
        id: 'aic3',
        dialect: 'やっとかめ',
        standard: '久しぶり',
        romaji: 'yattokame',
        meaning: 'long time no see',
        example: 'やっとかめだなも',
        exampleStandard: '久しぶりだね',
        exampleMeaning: 'Long time no see'
      },
      {
        id: 'aic4',
        dialect: 'ちんちん',
        standard: '熱い',
        romaji: 'chinchin',
        meaning: 'hot (temperature)',
        example: 'お茶がちんちんだで',
        exampleStandard: 'お茶が熱いよ',
        exampleMeaning: 'The tea is hot'
      }
    ]
  },
  {
    id: 'miyagi',
    name: '仙台弁（宮城弁）',
    nameEn: 'Sendai Dialect (Miyagi)',
    description: '仙台・宮城で話される方言。東北弁の中では比較的標準語に近いです。',
    descriptionEn: 'Dialect of Sendai/Miyagi, relatively close to standard Japanese among Tohoku dialects.',
    color: '#6B58DE',
    phrases: [
      {
        id: 'miy1',
        dialect: 'んだ',
        standard: 'そうだ',
        romaji: 'nda',
        meaning: "that's right, yes",
        example: 'んだんだ、そのとおり',
        exampleStandard: 'そうそう、そのとおり',
        exampleMeaning: "Yes, yes, that's right"
      },
      {
        id: 'miy2',
        dialect: 'いずい',
        standard: '違和感がある・しっくりこない',
        romaji: 'izui',
        meaning: 'uncomfortable, awkward',
        example: 'なんかいずい',
        exampleStandard: 'なんか違和感がある',
        exampleMeaning: 'Something feels off'
      },
      {
        id: 'miy3',
        dialect: 'おしょすい',
        standard: '恥ずかしい',
        romaji: 'oshosui',
        meaning: 'embarrassing, shy',
        example: 'おしょすいなあ',
        exampleStandard: '恥ずかしいなあ',
        exampleMeaning: "That's embarrassing"
      }
    ]
  },
  {
    id: 'okinawa',
    name: '沖縄弁（うちなーぐち）',
    nameEn: 'Okinawan Dialect',
    description: '沖縄で話される方言。琉球語の影響を受けた独特の表現が特徴です。',
    descriptionEn: 'Dialect of Okinawa, featuring unique expressions influenced by Ryukyuan language.',
    color: '#FFB6C1',
    phrases: [
      {
        id: 'oki1',
        dialect: 'はいさい',
        standard: 'こんにちは（男性）',
        romaji: 'haisai',
        meaning: 'hello (male)',
        example: 'はいさい、元気？',
        exampleStandard: 'こんにちは、元気？',
        exampleMeaning: 'Hello, how are you?'
      },
      {
        id: 'oki2',
        dialect: 'はいたい',
        standard: 'こんにちは（女性）',
        romaji: 'haitai',
        meaning: 'hello (female)',
        example: 'はいたい、元気？',
        exampleStandard: 'こんにちは、元気？',
        exampleMeaning: 'Hello, how are you?'
      },
      {
        id: 'oki3',
        dialect: 'にふぇーでーびる',
        standard: 'ありがとうございます',
        romaji: 'nifee deebiru',
        meaning: 'thank you very much',
        example: 'にふぇーでーびる',
        exampleStandard: 'ありがとうございます',
        exampleMeaning: 'Thank you very much'
      },
      {
        id: 'oki4',
        dialect: 'めんそーれ',
        standard: 'いらっしゃいませ',
        romaji: 'mensore',
        meaning: 'welcome',
        example: 'めんそーれ沖縄へ',
        exampleStandard: 'ようこそ沖縄へ',
        exampleMeaning: 'Welcome to Okinawa'
      },
      {
        id: 'oki5',
        dialect: 'ちゅらさん',
        standard: '美しい',
        romaji: 'churasan',
        meaning: 'beautiful',
        example: 'ちゅらさんやね',
        exampleStandard: '美しいですね',
        exampleMeaning: "It's beautiful"
      }
    ]
  }
];

