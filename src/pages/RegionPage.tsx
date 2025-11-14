import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookIcon, CardIcon, QuizIcon } from '../components/Icons';
import { detailedDialectData } from '../data/detailedDialectData';
import styles from './RegionPage.module.css';

export const RegionPage: React.FC = () => {
  const { regionId } = useParams<{ regionId: string }>();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<'phrases' | 'flashcards' | 'quiz'>('phrases');
  const [selectedSubDialect, setSelectedSubDialect] = useState<string | null>(null);

  const regionData = detailedDialectData.find(d => d.id === regionId);

  if (!regionData) {
    return (
      <div className={styles.error}>
        <h2>Region not found</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  // 表示する方言データを決定（subDialectが選択されている場合はそれを使用）
  const displayDialect = selectedSubDialect && regionData.subDialects
    ? regionData.subDialects.find(sd => sd.id === selectedSubDialect)
    : null;
  
  const phrases = displayDialect ? displayDialect.phrases : regionData.phrases;
  const displayName = displayDialect ? displayDialect.nameEn : regionData.nameEn;
  const displayColor = displayDialect ? displayDialect.color : regionData.color;

  return (
    <div className={styles.container}>
      <header className={styles.header} style={{ backgroundColor: regionData.color }}>
        <button className={styles.backButton} onClick={() => navigate('/')}>
          ← Back
        </button>
        <h1 className={styles.title}>{regionData.nameEn}</h1>
        <p className={styles.subtitle}>{regionData.name}</p>
        <p className={styles.description}>{regionData.descriptionEn}</p>
        <p className={styles.descriptionEn}>{regionData.description}</p>
      </header>

      <nav className={styles.tabs}>
        <button
          className={`${styles.tab} ${selectedTab === 'phrases' ? styles.activeTab : ''}`}
          onClick={() => setSelectedTab('phrases')}
        >
          <BookIcon size={20} />
          <span>Phrases</span>
        </button>
        <button
          className={`${styles.tab} ${selectedTab === 'flashcards' ? styles.activeTab : ''}`}
          onClick={() => setSelectedTab('flashcards')}
        >
          <CardIcon size={20} />
          <span>Flashcards</span>
        </button>
        <button
          className={`${styles.tab} ${selectedTab === 'quiz' ? styles.activeTab : ''}`}
          onClick={() => setSelectedTab('quiz')}
        >
          <QuizIcon size={20} />
          <span>Quiz</span>
        </button>
      </nav>

      <main className={styles.main}>
        {/* 細分化された方言選択UI */}
        {regionData.subDialects && regionData.subDialects.length > 0 && (
          <div className={styles.subDialectSelector}>
            <h3 className={styles.subDialectTitle}>Select Dialect:</h3>
            <div className={styles.subDialectGrid}>
              {regionData.subDialects.map((subDialect) => (
                <button
                  key={subDialect.id}
                  className={`${styles.subDialectCard} ${
                    selectedSubDialect === subDialect.id ? styles.selectedSubDialect : ''
                  }`}
                  onClick={() => setSelectedSubDialect(
                    selectedSubDialect === subDialect.id ? null : subDialect.id
                  )}
                  style={{
                    borderColor: subDialect.color,
                    backgroundColor: selectedSubDialect === subDialect.id
                      ? `${subDialect.color}20`
                      : 'white'
                  }}
                >
                  <div
                    className={styles.subDialectColorBar}
                    style={{ backgroundColor: subDialect.color }}
                  />
                  <div className={styles.subDialectName}>{subDialect.nameEn}</div>
                  <div className={styles.subDialectNameEn}>{subDialect.name}</div>
                  <div className={styles.subDialectDescription}>{subDialect.descriptionEn}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'phrases' && (
          <div className={styles.phrasesGrid}>
            {phrases.length > 0 ? (
              phrases.map((phrase) => (
              <div key={phrase.id} className={styles.phraseCard}>
                <div className={styles.phraseHeader}>
                  <span className={styles.dialect}>{phrase.dialect}</span>
                  <span className={styles.romaji}>{phrase.romaji}</span>
                </div>
                <div className={styles.phraseBody}>
                  <div className={styles.row}>
                    <span className={styles.label}>Standard Japanese:</span>
                    <span>{phrase.standard}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.label}>Meaning:</span>
                    <span>{phrase.meaning}</span>
                  </div>
                  <div className={styles.example}>
                    <div className={styles.exampleTitle}>Example:</div>
                    <div className={styles.exampleText}>{phrase.example}</div>
                    <div className={styles.exampleTranslation}>{phrase.exampleStandard}</div>
                    <div className={styles.exampleMeaning}>{phrase.exampleMeaning}</div>
                  </div>
                </div>
              </div>
              ))
            ) : (
              <div className={styles.noPhrasesMessage}>
                <p>Please select a dialect</p>
              </div>
            )}
          </div>
        )}

        {selectedTab === 'flashcards' && (
          <div className={styles.flashcardSection}>
            {phrases.length > 0 ? (
              <FlashcardView phrases={phrases} color={displayColor} />
            ) : (
              <div className={styles.noPhrasesMessage}>
                <p>Please select a dialect</p>
              </div>
            )}
          </div>
        )}

        {selectedTab === 'quiz' && (
          <div className={styles.quizSection}>
            {phrases.length > 0 ? (
              <QuizView phrases={phrases} color={displayColor} regionName={displayName} />
            ) : (
              <div className={styles.noPhrasesMessage}>
                <p>Please select a dialect</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

// フラッシュカードコンポーネント
interface FlashcardViewProps {
  phrases: any[];
  color: string;
}

const FlashcardView: React.FC<FlashcardViewProps> = ({ phrases, color }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);

  const currentPhrase = phrases[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setShowMeaning(false);
    setCurrentIndex((prev) => (prev + 1) % phrases.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setShowMeaning(false);
    setCurrentIndex((prev) => (prev - 1 + phrases.length) % phrases.length);
  };

  const handleFlip = () => {
    if (!isFlipped) {
      setIsFlipped(true);
    } else {
      setShowMeaning(!showMeaning);
    }
  };

  return (
    <div className={styles.flashcardContainer}>
      <div className={styles.progress}>
        {currentIndex + 1} / {phrases.length}
      </div>

      <div
        className={`${styles.flashcard} ${isFlipped ? styles.flipped : ''}`}
        onClick={handleFlip}
        style={{ borderColor: color }}
      >
        {!isFlipped ? (
          <div className={styles.flashcardFront}>
            <div className={styles.flashcardDialect}>{currentPhrase.dialect}</div>
            <div className={styles.flashcardRomaji}>{currentPhrase.romaji}</div>
            <div className={styles.flashcardHint}>Tap to reveal</div>
          </div>
        ) : (
          <div className={styles.flashcardBack}>
            <div className={styles.flashcardStandard}>{currentPhrase.standard}</div>
            <div className={styles.flashcardMeaning}>{currentPhrase.meaning}</div>
            {showMeaning && (
              <div className={styles.flashcardExample}>
                <div className={styles.flashcardExampleTitle}>Example:</div>
                <div>{currentPhrase.example}</div>
                <div className={styles.flashcardExampleTranslation}>
                  {currentPhrase.exampleStandard}
                </div>
                <div className={styles.flashcardExampleMeaning}>
                  {currentPhrase.exampleMeaning}
                </div>
              </div>
            )}
            {!showMeaning && (
              <div className={styles.flashcardHint}>Tap for example</div>
            )}
          </div>
        )}
      </div>

      <div className={styles.flashcardControls}>
        <button
          className={styles.controlButton}
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
        >
          ← Previous
        </button>
        <button
          className={styles.controlButton}
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

// クイズコンポーネント
interface QuizViewProps {
  phrases: any[];
  color: string;
  regionName: string;
}

const QuizView: React.FC<QuizViewProps> = ({ phrases, color }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState(() => generateQuizQuestions(phrases));

  function generateQuizQuestions(phrases: any[]) {
    return phrases.map((phrase) => {
      const wrongAnswers = phrases
        .filter(p => p.id !== phrase.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(p => p.standard);
      
      const options = [phrase.standard, ...wrongAnswers].sort(() => Math.random() - 0.5);

      return {
        dialect: phrase.dialect,
        romaji: phrase.romaji,
        correctAnswer: phrase.standard,
        options: options
      };
    });
  }

  const handleAnswerClick = (answer: string) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    const isCorrect = answer === quizQuestions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizQuestions(generateQuizQuestions(phrases));
  };

  const isFinished = currentQuestion === quizQuestions.length - 1 && showResult;
  const currentQ = quizQuestions[currentQuestion];

  return (
    <div className={styles.quizContainer}>
      {!isFinished ? (
        <>
          <div className={styles.quizProgress}>
            Question {currentQuestion + 1} / {quizQuestions.length}
          </div>

          <div className={styles.quizCard}>
            <div className={styles.quizQuestion}>
              <div className={styles.quizDialect}>{currentQ.dialect}</div>
              <div className={styles.quizRomaji}>{currentQ.romaji}</div>
              <div className={styles.quizPrompt}>
                What is this in standard Japanese?
              </div>
            </div>

            <div className={styles.quizOptions}>
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === currentQ.correctAnswer;
                const shouldShowCorrect = showResult && isCorrect;
                const shouldShowWrong = showResult && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    className={`${styles.quizOption} ${
                      shouldShowCorrect ? styles.correct : ''
                    } ${shouldShowWrong ? styles.wrong : ''} ${
                      isSelected && !showResult ? styles.selected : ''
                    }`}
                    onClick={() => handleAnswerClick(option)}
                    disabled={showResult}
                    style={
                      shouldShowCorrect
                        ? { borderColor: '#4CAF50', backgroundColor: '#E8F5E9' }
                        : shouldShowWrong
                        ? { borderColor: '#f44336', backgroundColor: '#FFEBEE' }
                        : {}
                    }
                  >
                    {option}
                    {shouldShowCorrect && ' ✓'}
                    {shouldShowWrong && ' ✗'}
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div className={styles.quizFeedback}>
                {selectedAnswer === currentQ.correctAnswer ? (
                  <div className={styles.feedbackCorrect}>
                    ✓ Correct!
                  </div>
                ) : (
                  <div className={styles.feedbackWrong}>
                    ✗ Incorrect
                    <div className={styles.correctAnswerHint}>
                      Correct answer: {currentQ.correctAnswer}
                    </div>
                  </div>
                )}
                <button
                  className={styles.nextButton}
                  onClick={handleNext}
                  style={{ backgroundColor: color }}
                >
                  Next Question
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className={styles.quizResults}>
          <h2>Quiz Complete!</h2>
          <div className={styles.finalScore}>
            <span className={styles.scoreNumber}>{score}</span>
            <span className={styles.scoreDivider}>/</span>
            <span className={styles.scoreTotal}>{quizQuestions.length}</span>
          </div>
          <div className={styles.scorePercentage}>
            {Math.round((score / quizQuestions.length) * 100)}%
          </div>
          <p className={styles.scoreMessage}>
            {score === quizQuestions.length
              ? 'Perfect! 🎉'
              : score >= quizQuestions.length * 0.7
              ? 'Great job! 👏'
              : score >= quizQuestions.length * 0.5
              ? 'Good work! 😊'
              : 'Try again! 💪'}
          </p>
          <button
            className={styles.restartButton}
            onClick={handleRestart}
            style={{ backgroundColor: color }}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

