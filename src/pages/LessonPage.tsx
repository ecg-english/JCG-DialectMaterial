import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './LessonPage.module.css';

type LessonId = 'history' | 'culture' | 'phonetics';

interface LessonContent {
  id: LessonId;
  title: string;
  titleEn: string;
  sections: {
    heading: string;
    headingEn: string;
    content: string;
    contentEn: string;
  }[];
}

const lessonContents: Record<LessonId, LessonContent> = {
  history: {
    id: 'history',
    title: '方言の成り立ちと歴史',
    titleEn: 'Origin and History of Japanese Dialects',
    sections: [
      {
        heading: '方言の起源',
        headingEn: 'Origin of Dialects',
        content: '日本の方言は、古代から中世にかけて形成されました。各地域が地理的に隔離されていたことや、歴史的な政治的分断により、独自の言語体系が発達しました。特に、江戸時代の参勤交代制度により、各地の方言が交流し、さらに多様化していきました。',
        contentEn: 'Japanese dialects were formed from ancient times to the medieval period. Geographic isolation and historical political divisions led to the development of unique linguistic systems in each region. Particularly, the sankin-kotai system during the Edo period facilitated dialect exchange, further diversifying them.'
      },
      {
        heading: '方言の分類',
        headingEn: 'Classification of Dialects',
        content: '日本の方言は大きく東日本方言と西日本方言に分けられます。さらに細かく分類すると、北海道方言、東北方言、関東方言、中部方言、近畿方言、中国方言、四国方言、九州方言、琉球方言などがあります。それぞれが独特の音韻、語彙、文法を持っています。',
        contentEn: 'Japanese dialects are broadly divided into Eastern and Western dialects. More detailed classifications include Hokkaido, Tohoku, Kanto, Chubu, Kinki, Chugoku, Shikoku, Kyushu, and Ryukyuan dialects. Each has unique phonology, vocabulary, and grammar.'
      },
      {
        heading: '現代における方言',
        headingEn: 'Dialects in Modern Times',
        content: '現代では、標準語の普及により方言の使用が減少していますが、地域のアイデンティティとして方言は重要な役割を果たしています。また、メディアやエンターテインメントを通じて、方言が再評価され、若い世代にも関心が高まっています。',
        contentEn: 'In modern times, dialect usage has decreased due to the spread of standard Japanese, but dialects continue to play an important role as regional identity. Through media and entertainment, dialects are being re-evaluated, and interest is growing among younger generations.'
      }
    ]
  },
  culture: {
    id: 'culture',
    title: '方言と文化の深い関係',
    titleEn: 'Deep Relationship Between Dialects and Culture',
    sections: [
      {
        heading: '方言が反映する地域文化',
        headingEn: 'Regional Culture Reflected in Dialects',
        content: '方言は単なる言葉の違いではなく、その地域の歴史、生活様式、価値観を反映しています。例えば、関西弁のユーモアや親しみやすさは、商人の町として発展した大阪の文化を表しています。京都弁の上品で婉曲的な表現は、長い歴史を持つ都の文化を象徴しています。',
        contentEn: 'Dialects are not just linguistic differences but reflect the history, lifestyle, and values of each region. For example, Kansai dialect\'s humor and friendliness reflect Osaka\'s culture as a merchant city. Kyoto dialect\'s elegant and indirect expressions symbolize the culture of the ancient capital.'
      },
      {
        heading: '方言とコミュニケーション',
        headingEn: 'Dialects and Communication',
        content: '方言は、話者同士の距離感や関係性を表現する重要な手段です。同じ方言を話す人々の間には、自然な親近感が生まれます。また、方言を使うことで、地域への帰属意識や誇りを表現することもできます。',
        contentEn: 'Dialects are an important means of expressing the distance and relationship between speakers. A natural sense of closeness arises among people who speak the same dialect. Using dialects can also express a sense of belonging and pride in one\'s region.'
      },
      {
        heading: '方言の保存と継承',
        headingEn: 'Preservation and Inheritance of Dialects',
        content: '方言は貴重な文化的遺産です。しかし、標準語の普及により、多くの方言が消滅の危機に瀕しています。方言を保存し、次世代に継承することは、日本の多様な文化を守る上で重要な課題です。',
        contentEn: 'Dialects are valuable cultural heritage. However, due to the spread of standard Japanese, many dialects are at risk of extinction. Preserving dialects and passing them on to the next generation is an important task in protecting Japan\'s diverse culture.'
      }
    ]
  },
  phonetics: {
    id: 'phonetics',
    title: '方言の音韻変化と特徴',
    titleEn: 'Phonetic Changes and Characteristics of Dialects',
    sections: [
      {
        heading: '音韻体系の違い',
        headingEn: 'Differences in Phonological Systems',
        content: '各地域の方言は、独特の音韻体系を持っています。例えば、東北弁では「じ」と「ぢ」、「ず」と「づ」の区別がなくなる「ズーズー弁」が特徴的です。関西弁では、アクセントの型が標準語と大きく異なり、これが関西弁独特のリズムを生み出しています。',
        contentEn: 'Each regional dialect has a unique phonological system. For example, Tohoku dialect is characterized by "zuuzuu-ben" where the distinction between "ji" and "di", "zu" and "du" disappears. Kansai dialect has accent patterns that differ significantly from standard Japanese, creating its unique rhythm.'
      },
      {
        heading: '語彙の特徴',
        headingEn: 'Lexical Characteristics',
        content: '方言には、標準語にはない独自の語彙が数多く存在します。例えば、「なまら」（北海道弁：とても）、「めっちゃ」（関西弁：とても）、「ばってん」（博多弁：でも）など、同じ意味を表す言葉が地域によって全く異なります。',
        contentEn: 'Dialects contain many unique words that don\'t exist in standard Japanese. For example, "namara" (Hokkaido: very), "meccha" (Kansai: very), and "batten" (Hakata: but) - words expressing the same meaning differ completely by region.'
      },
      {
        heading: '文法の違い',
        headingEn: 'Grammatical Differences',
        content: '方言には、標準語とは異なる文法規則があります。例えば、関西弁では「〜やねん」という終助詞が多用され、名古屋弁では「〜だがね」という独特の語尾が使われます。これらの文法の違いが、方言の個性を際立たせています。',
        contentEn: 'Dialects have grammatical rules that differ from standard Japanese. For example, Kansai dialect frequently uses the sentence-ending particle "~yanen", while Nagoya dialect uses the unique ending "~dagane". These grammatical differences highlight the individuality of each dialect.'
      }
    ]
  }
};

export const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();

  const lesson = lessonId && lessonId in lessonContents
    ? lessonContents[lessonId as LessonId]
    : null;

  if (!lesson) {
    return (
      <div className={styles.error}>
        <h2>Lesson not found</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate('/')}>
          ← Back
        </button>
        <h1 className={styles.title}>{lesson.titleEn}</h1>
        <p className={styles.subtitle}>{lesson.title}</p>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          {lesson.sections.map((section, index) => (
            <div key={index} className={styles.section}>
              <h2 className={styles.sectionHeading}>{section.headingEn}</h2>
              <p className={styles.sectionHeadingEn}>{section.heading}</p>
              <div className={styles.sectionContent}>
                <p className={styles.contentText}>{section.contentEn}</p>
                <p className={styles.contentTextEn}>{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

