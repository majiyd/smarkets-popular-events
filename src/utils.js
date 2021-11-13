import Colors from './theme/colors';

export const getStateColor = state => {
  switch (state) {
    case 'live':
      return Colors.green;
    case 'ended':
      return Colors.red;

    default:
      return Colors.neutral;
  }
};
