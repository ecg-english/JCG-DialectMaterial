import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JapanMapStyled } from '../components/JapanMapStyled';
import { BookIcon, CardIcon, QuizIcon } from '../components/Icons';
import { detailedDialectData } from '../data/detailedDialectData';
import { Region } from '../types';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState<Region | undefined>();

  const prefectureData = detailedDialectData.map(d => ({
    id: d.id,
    name: d.name,
    color: d.color
  }));

  const handleRegionClick = (region: Region) => {
    setSelectedRegion(region);
    setTimeout(() => {
      navigate(`/region/${region}`);
    }, 300);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Japanese Dialect Master
          <span className={styles.subtitle}>方言マスター</span>
        </h1>
        <p className={styles.description}>
          Learn dialects from all over Japan! Select a region from the map.
          <span className={styles.descriptionEn}>
            日本全国の方言を学びましょう！地図から地域を選んでください。
          </span>
        </p>
      </header>

      <main className={styles.main}>
        <div className={styles.mapSection}>
          <JapanMapStyled
            onRegionClick={handleRegionClick}
            selectedRegion={selectedRegion}
            prefectureData={prefectureData}
          />
        </div>

        <div className={styles.infoSection}>
          <div className={styles.lessonsCard}>
            <h3 className={styles.lessonsTitle}>Master Lessons</h3>
            <p className={styles.lessonsSubtitle}>Deep dive into dialects</p>
            
            <div className={styles.lessonsGrid}>
              <button
                className={styles.lessonButton}
                onClick={() => navigate('/lesson/history')}
              >
                <div className={styles.lessonIcon}>
                  <BookIcon size={40} color="#E63946" />
                </div>
                <div className={styles.lessonContent}>
                  <h4 className={styles.lessonTitle}>Origin and History of Dialects</h4>
                  <p className={styles.lessonDescription}>
                    Learn how dialects were formed and developed throughout Japanese history
                  </p>
                </div>
              </button>

              <button
                className={styles.lessonButton}
                onClick={() => navigate('/lesson/culture')}
              >
                <div className={styles.lessonIcon}>
                  <CardIcon size={40} color="#E63946" />
                </div>
                <div className={styles.lessonContent}>
                  <h4 className={styles.lessonTitle}>Deep Relationship Between Dialects and Culture</h4>
                  <p className={styles.lessonDescription}>
                    Explore how dialects reflect regional culture, values, and identity
                  </p>
                </div>
              </button>

              <button
                className={styles.lessonButton}
                onClick={() => navigate('/lesson/phonetics')}
              >
                <div className={styles.lessonIcon}>
                  <QuizIcon size={40} color="#E63946" />
                </div>
                <div className={styles.lessonContent}>
                  <h4 className={styles.lessonTitle}>Phonetic Changes and Characteristics</h4>
                  <p className={styles.lessonDescription}>
                    Detailed explanation of phonetic, lexical, and grammatical features of dialects
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 JCG Japanese Conversation Gym. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

