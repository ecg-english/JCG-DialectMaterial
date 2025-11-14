import React from 'react';
import { Region } from '../types';
import styles from './JapanMapStyled.module.css';

interface PrefectureBox {
  id: Region;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

interface JapanMapStyledProps {
  onRegionClick: (region: Region) => void;
  selectedRegion?: Region;
  prefectureData: Array<{ id: Region; name: string; color: string }>;
}

export const JapanMapStyled: React.FC<JapanMapStyledProps> = ({ 
  onRegionClick, 
  selectedRegion,
  prefectureData
}) => {
  // 都道府県の配置（四角形でデフォルメ）
  const prefectureBoxes: PrefectureBox[] = [
    // 北海道
    { id: 'hokkaido', name: '北海道', x: 900, y: 50, width: 180, height: 120, color: '#4A90E2' },
    
    // 東北
    { id: 'aomori', name: '青森', x: 900, y: 190, width: 80, height: 60, color: '#7B68EE' },
    { id: 'akita', name: '秋田', x: 810, y: 250, width: 70, height: 70, color: '#8A7EF5' },
    { id: 'iwate', name: '岩手', x: 900, y: 260, width: 80, height: 90, color: '#9B8EFF' },
    { id: 'yamagata', name: '山形', x: 810, y: 330, width: 70, height: 70, color: '#7B68EE' },
    { id: 'miyagi', name: '宮城', x: 900, y: 360, width: 80, height: 70, color: '#6B58DE' },
    { id: 'fukushima', name: '福島', x: 820, y: 410, width: 90, height: 80, color: '#8A7EF5' },
    
    // 関東
    { id: 'ibaraki', name: '茨城', x: 920, y: 460, width: 70, height: 60, color: '#50C878' },
    { id: 'tochigi', name: '栃木', x: 850, y: 500, width: 60, height: 60, color: '#60D888' },
    { id: 'gunma', name: '群馬', x: 790, y: 510, width: 60, height: 60, color: '#70E898' },
    { id: 'saitama', name: '埼玉', x: 850, y: 570, width: 60, height: 50, color: '#50C878' },
    { id: 'chiba', name: '千葉', x: 920, y: 530, width: 70, height: 70, color: '#60D888' },
    { id: 'tokyo', name: '東京', x: 880, y: 630, width: 50, height: 50, color: '#40B868' },
    { id: 'kanagawa', name: '神奈川', x: 820, y: 640, width: 60, height: 50, color: '#50C878' },
    
    // 中部
    { id: 'niigata', name: '新潟', x: 750, y: 420, width: 70, height: 90, color: '#FFB347' },
    { id: 'toyama', name: '富山', x: 700, y: 520, width: 60, height: 50, color: '#FFC357' },
    { id: 'ishikawa', name: '石川', x: 640, y: 490, width: 50, height: 80, color: '#FFD367' },
    { id: 'fukui', name: '福井', x: 640, y: 580, width: 50, height: 60, color: '#FFB347' },
    { id: 'yamanashi', name: '山梨', x: 780, y: 600, width: 50, height: 50, color: '#FFA337' },
    { id: 'nagano', name: '長野', x: 710, y: 570, width: 70, height: 80, color: '#FFB347' },
    { id: 'gifu', name: '岐阜', x: 680, y: 650, width: 70, height: 60, color: '#FFC357' },
    { id: 'shizuoka', name: '静岡', x: 750, y: 660, width: 90, height: 60, color: '#FFD367' },
    { id: 'aichi', name: '愛知', x: 680, y: 720, width: 80, height: 60, color: '#FFA337' },
    { id: 'mie', name: '三重', x: 630, y: 730, width: 50, height: 70, color: '#FFB347' },
    
    // 関西
    { id: 'shiga', name: '滋賀', x: 600, y: 680, width: 50, height: 50, color: '#FF6B9D' },
    { id: 'kyoto', name: '京都', x: 560, y: 660, width: 50, height: 60, color: '#FF7BAD' },
    { id: 'osaka', name: '大阪', x: 550, y: 730, width: 50, height: 50, color: '#FF5B8D' },
    { id: 'hyogo', name: '兵庫', x: 490, y: 690, width: 60, height: 70, color: '#FF6B9D' },
    { id: 'nara', name: '奈良', x: 560, y: 770, width: 50, height: 50, color: '#FF7BAD' },
    { id: 'wakayama', name: '和歌山', x: 530, y: 810, width: 60, height: 60, color: '#FF8BBD' },
    
    // 中国
    { id: 'tottori', name: '鳥取', x: 440, y: 650, width: 60, height: 40, color: '#F4A460' },
    { id: 'shimane', name: '島根', x: 360, y: 660, width: 80, height: 50, color: '#FFB470' },
    { id: 'okayama', name: '岡山', x: 460, y: 730, width: 70, height: 50, color: '#F4A460' },
    { id: 'hiroshima', name: '広島', x: 370, y: 720, width: 90, height: 60, color: '#FFB470' },
    { id: 'yamaguchi', name: '山口', x: 300, y: 740, width: 70, height: 60, color: '#F4A460' },
    
    // 四国
    { id: 'kagawa', name: '香川', x: 440, y: 800, width: 60, height: 40, color: '#98D8C8' },
    { id: 'tokushima', name: '徳島', x: 500, y: 830, width: 60, height: 50, color: '#A8E8D8' },
    { id: 'ehime', name: '愛媛', x: 360, y: 810, width: 80, height: 60, color: '#98D8C8' },
    { id: 'kochi', name: '高知', x: 390, y: 870, width: 110, height: 50, color: '#A8E8D8' },
    
    // 九州
    { id: 'fukuoka', name: '福岡', x: 230, y: 770, width: 70, height: 60, color: '#FF6347' },
    { id: 'saga', name: '佐賀', x: 200, y: 830, width: 50, height: 50, color: '#FF7357' },
    { id: 'nagasaki', name: '長崎', x: 140, y: 820, width: 60, height: 70, color: '#FF8367' },
    { id: 'kumamoto', name: '熊本', x: 210, y: 880, width: 70, height: 70, color: '#FF6347' },
    { id: 'oita', name: '大分', x: 280, y: 830, width: 60, height: 60, color: '#FF7357' },
    { id: 'miyazaki', name: '宮崎', x: 270, y: 900, width: 60, height: 80, color: '#FF8367' },
    { id: 'kagoshima', name: '鹿児島', x: 190, y: 960, width: 80, height: 90, color: '#FF6347' },
    
    // 沖縄
    { id: 'okinawa', name: '沖縄', x: 150, y: 1080, width: 100, height: 60, color: '#FFB6C1' },
  ];

  const handleClick = (region: Region) => {
    onRegionClick(region);
  };

  return (
    <div className={styles.mapContainer}>
      <svg
        viewBox="0 0 1200 1200"
        className={styles.map}
        xmlns="http://www.w3.org/2000/svg"
      >
        {prefectureBoxes.map((prefecture) => {
          const isSelected = selectedRegion === prefecture.id;
          const prefectureInfo = prefectureData.find(p => p.id === prefecture.id);
          const fillColor = prefectureInfo?.color || prefecture.color;
          
          return (
            <g key={prefecture.id}>
              <rect
                x={prefecture.x}
                y={prefecture.y}
                width={prefecture.width}
                height={prefecture.height}
                fill={fillColor}
                className={`${styles.prefecture} ${isSelected ? styles.selected : ''}`}
                onClick={() => handleClick(prefecture.id)}
                rx="4"
                ry="4"
              />
              <text
                x={prefecture.x + prefecture.width / 2}
                y={prefecture.y + prefecture.height / 2 + 5}
                className={styles.label}
                textAnchor="middle"
              >
                {prefecture.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

