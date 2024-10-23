// src/lib/members.js を修正
export const memberCategories = [
  { id: 'all', name: 'All' },
  { id: 'valorant', name: 'VALORANT' },
  { id: 'fortnite', name: 'FORTNITE' }
];

export const membersData = {
  valorant: {
    name: 'VALORANT Div',
    members: [
      {
        id: 'noton',
        name: 'Noton',
        image: '/noton.webp',
        division: 'valorant',
        role: 'Controller',
        joinDate: '2024.04',
        description: 'VALORANTチームのIGLを務める。冷静な判断と的確なコールで味方を導く。',
        twitter: '@noton_ww'
      },
      {
        id: 'kabakaba',
        name: 'Kabakaba',
        image: '/kabakaba.webp',
        division: 'valorant',
        role: 'Duelist',
        joinDate: '2024.04',
        description: '攻撃的なプレイスタイルで試合の流れを作るエースプレイヤー。',
        twitter: '@kabakaba_ww'
      }
    ]
  },
  fortnite: {
    name: 'Fortnite Div',
    members: [
      {
        id: 'worriedkey',
        name: 'worriedkey-828',
        image: '/worriedkey.webp',
        division: 'fortnite',
        joinDate: '2024.04',
        description: 'ビルドの速さとゲームセンスの高さを武器に戦う。',
        twitter: '@worriedkey_ww'
      },
      {
        id: 'nopeip',
        name: 'nopeip',
        image: '/nopeip.webp',
        division: 'fortnite',
        joinDate: '2024.04',
        description: '正確なエイムと状況判断力に定評がある。',
        twitter: '@nopeip_ww'
      }
    ]
  }
};