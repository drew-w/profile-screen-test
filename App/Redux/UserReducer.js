const initialState = {
  userInfo: {
    name: 'Nathan Garcia',
    picture: require('../Images/34.jpeg'),
    isOnline: true,
    position: 'UI/UX Designer',
    about:
      'Not so many years ago businesses used to grunt at using illustrations in their marketing materials. But today, the use and influence of illustrations is growing right along. An illustration, image, or picture that does not express a distinct idea is a poor illustration.',
    skills: ['Business', 'Management', 'Creativity', 'Webdesign', 'PHP'],
    recentActivity: [
      {
        icon: 'calendar',
        date: '28 February',
        details: 'Meeting with client',
      },
      {
        icon: 'briefcase',
        date: '1 March',
        details: 'New incoming request',
      },
      {
        icon: 'calendar',
        date: '2 March',
        details: 'Meeting with client',
      },
      {
        icon: 'check-circle',
        date: '8 March',
        details: 'Marked 12 Tasks Done',
      },
      {
        icon: 'briefcase',
        date: '13 March',
        details: 'New incoming request',
      },
      {
        icon: 'credit-card',
        date: '16 March',
        details: 'Payout processed',
      },
      {
        icon: 'briefcase',
        date: '20 March',
        details: 'Marked 12 Tasks Done',
      },
    ],
  },
};

export function reducer(state = initialState) {
  return state;
}
