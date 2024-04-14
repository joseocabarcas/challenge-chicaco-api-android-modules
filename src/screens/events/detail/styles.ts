import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 16,
  },
  container: {
    flex: 1,
  },
  containerImage: {
    height: 350,
    overflow: 'hidden',
    borderRadius: 20,
    position: 'relative',
  },
  image: {
    height: 350,
  },
  circleButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    height: 36,
    width: 36,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBack: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  circleBookmark: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  shadow: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  textTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  // description
  containerSection: {
    paddingVertical: 10,
  },
  containerDesciption: {},
  labelDesciption: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  textDesciption: {
    color: '#858585',
    fontSize: 14,
  },
})
