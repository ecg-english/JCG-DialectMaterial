import { useState, useEffect } from 'react';
import { Progress, Region } from '../types';

const STORAGE_KEY = 'dialectMasterProgress';

export const useProgress = () => {
  const [progress, setProgress] = useState<Progress[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markPhraseAsLearned = (regionId: Region, phraseId: string) => {
    setProgress((prev) => {
      const existingProgress = prev.find((p) => p.regionId === regionId);
      
      if (existingProgress) {
        return prev.map((p) =>
          p.regionId === regionId
            ? {
                ...p,
                phrasesLearned: [...new Set([...p.phrasesLearned, phraseId])],
                lastStudied: new Date().toISOString(),
              }
            : p
        );
      } else {
        return [
          ...prev,
          {
            regionId,
            phrasesLearned: [phraseId],
            quizScore: 0,
            lastStudied: new Date().toISOString(),
          },
        ];
      }
    });
  };

  const updateQuizScore = (regionId: Region, score: number) => {
    setProgress((prev) => {
      const existingProgress = prev.find((p) => p.regionId === regionId);
      
      if (existingProgress) {
        return prev.map((p) =>
          p.regionId === regionId
            ? {
                ...p,
                quizScore: Math.max(p.quizScore, score),
                lastStudied: new Date().toISOString(),
              }
            : p
        );
      } else {
        return [
          ...prev,
          {
            regionId,
            phrasesLearned: [],
            quizScore: score,
            lastStudied: new Date().toISOString(),
          },
        ];
      }
    });
  };

  const getRegionProgress = (regionId: Region): Progress | undefined => {
    return progress.find((p) => p.regionId === regionId);
  };

  const getTotalProgress = () => {
    const totalPhrases = progress.reduce(
      (sum, p) => sum + p.phrasesLearned.length,
      0
    );
    const averageScore =
      progress.length > 0
        ? progress.reduce((sum, p) => sum + p.quizScore, 0) / progress.length
        : 0;
    return { totalPhrases, averageScore };
  };

  return {
    progress,
    markPhraseAsLearned,
    updateQuizScore,
    getRegionProgress,
    getTotalProgress,
  };
};

